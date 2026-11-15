import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

/* ============================================================
   ⏱️  AQUI MUDAS A DURAÇÃO DO CARREGAMENTO
   8000 = 8 segundos (valor em milissegundos). Muda este número
   para mais ou menos tempo.
   ============================================================ */
export const MIN_DURATION_MS = 3000;

// Mensagens que vão mudando enquanto carrega (o ecrã nunca fica parado).
// "ate" = percentagem até à qual a mensagem aparece.
const ETAPAS = [
  { ate: 20, texto: "A preparar a tua conta…" },
  { ate: 42, texto: "A criar as categorias de despesas…" },
  { ate: 64, texto: "A configurar os teus orçamentos em Kz…" },
  { ate: 86, texto: "A proteger os teus dados…" },
  { ate: 101, texto: "Quase pronto. Cada Kwanza no seu lugar!" },
];

// Curva do progresso: arranca depressa, abranda no meio, termina suave.
// (mistura de linear com "ease in-out" para não parecer parado)
function curva(t) {
  const easeInOut = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  return 0.5 * t + 0.5 * easeInOut;
}

export default function LoadingScreen({ duration = MIN_DURATION_MS, onFinish }) {
  const [progress, setProgress] = useState(0); // 0 → 100
  const [saindo, setSaindo] = useState(false);
  const logoPronto = useRef(false);
  const terminou = useRef(false);

  // Garante que o logotipo já está carregado antes de acabar
  useEffect(() => {
    const img = new Image();
    img.onload = img.onerror = () => (logoPronto.current = true);
    img.src = "/assets/logo.png";
  }, []);

  // Anima o progresso com base no TEMPO real (não em "ticks"),
  // por isso demora sempre `duration` ms, mesmo se o separador ficar em segundo plano.
  useEffect(() => {
    const inicio = performance.now();
    let raf;

    const passo = (agora) => {
      const t = Math.min((agora - inicio) / duration, 1);
      setProgress(curva(t) * 100);

      if (t < 1) {
        raf = requestAnimationFrame(passo);
      } else if (!logoPronto.current) {
        raf = requestAnimationFrame(passo); // espera pelo logo (raro)
      } else if (!terminou.current) {
        terminou.current = true;
        setSaindo(true);
      }
    };

    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  // Depois do fade-out, avança para a próxima página
  useEffect(() => {
    if (!saindo) return;
    const id = setTimeout(() => onFinish && onFinish(), 600);
    return () => clearTimeout(id);
  }, [saindo, onFinish]);

  const valor = Math.round(progress);
  const etapa = ETAPAS.find((e) => progress < e.ate) || ETAPAS[ETAPAS.length - 1];

  return (
    <main
      className={`eq-loading ${saindo ? "eq-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="A carregar o Equilibra"
    >
      {/* Moedas/bolinhas a subir ao fundo */}
      <div className="eq-bubbles" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      <div className="eq-stage">
        <span className="eq-glow" aria-hidden="true" />
        <span className="eq-ring" aria-hidden="true" />
        <span className="eq-ring eq-ring--2" aria-hidden="true" />
        <span className="eq-logo">
          <img src="/assets/logo.png" alt="" />
        </span>
      </div>

      <h1 className="eq-name">Equilibra</h1>
      <p className="eq-tagline">Cada Kwanza no seu lugar.</p>

      <div
        className="eq-bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={valor}
      >
        <div className="eq-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* key={etapa.texto} faz a mensagem "aparecer" de novo sempre que muda */}
      <span className="eq-pct" key={etapa.texto}>
        {etapa.texto} <b>{valor}%</b>
      </span>
    </main>
  );
}
