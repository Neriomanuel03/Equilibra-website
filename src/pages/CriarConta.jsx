import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User, Mail, Wallet, Database, Lock, UserPlus, ChevronDown,
  ChartNoAxesColumn, ShieldCheck, Zap,
} from "lucide-react";
import Campo, { CampoSenha } from "../components/Campo.jsx";
import { IconeGoogle, IconeApple, IconeMicrosoft } from "../components/IconesSociais.jsx";
import "./CriarConta.css";

/* ---------- Dados fixos (fora do componente, não mudam) ---------- */

const BENEFICIOS = [
  { icone: ChartNoAxesColumn, titulo: "Controle total", texto: "sobre o seu dinheiro" },
  { icone: ShieldCheck, titulo: "Segurança garantida", texto: "em todos os seus dados" },
  { icone: Zap, titulo: "Planeamento inteligente", texto: "para os seus objetivos" },
];

const MOEDAS = [
  { valor: "AOA", nome: "Kwanza (AOA)" },
  { valor: "USD", nome: "Dólar (USD)" },
  { valor: "EUR", nome: "Euro (EUR)" },
];

const REDES = [
  { nome: "Google", Icone: IconeGoogle },
  { nome: "Apple", Icone: IconeApple },
  { nome: "Microsoft", Icone: IconeMicrosoft },
];

const FORMULARIO_VAZIO = {
  nome: "",
  email: "",
  rendimento: "",
  moeda: "AOA",
  senha: "",
  confirmar: "",
};

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ---------- Funções de apoio ---------- */

// Converte "450 000,50" ou "450.000" em número (em Angola: espaço/ponto separam milhares, vírgula os decimais)
function lerNumero(texto) {
  const limpo = texto.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  return Number(limpo);
}

// Devolve um objeto { campo: "mensagem" } só com os campos que têm erro
function validar(dados, aceitouTermos) {
  const erros = {};

  if (dados.nome.trim().split(/\s+/).filter(Boolean).length < 2) {
    erros.nome = "Digite o seu nome completo (nome e apelido).";
  }
  if (!REGEX_EMAIL.test(dados.email.trim())) {
    erros.email = "Use um e-mail válido, por exemplo nome@email.com.";
  }
  const valor = lerNumero(dados.rendimento);
  if (!dados.rendimento.trim() || Number.isNaN(valor) || valor <= 0) {
    erros.rendimento = "Informe o seu rendimento mensal (só números, maior que zero).";
  }
  if (dados.senha.length < 8) {
    erros.senha = "A senha precisa de pelo menos 8 caracteres.";
  }
  if (dados.confirmar !== dados.senha || !dados.confirmar) {
    erros.confirmar = "As senhas não coincidem.";
  }
  if (!aceitouTermos) {
    erros.termos = "Para continuar, aceite os Termos de Uso e a Política de Privacidade.";
  }
  return erros;
}

/* ---------- A página ---------- */

export default function CriarConta() {
  const navigate = useNavigate();

  const [dados, setDados] = useState(FORMULARIO_VAZIO);
  const [termos, setTermos] = useState(false);
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    document.title = "Criar conta — Equilibra";
  }, []);

  // Uma só função serve para todos os campos: usa o atributo name do input
  function aoMudar(e) {