import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen.jsx";

/**
 * Página /carregamento
 * Mostra a animação e, quando termina, vai para /criar-conta.
 * Também aceita outro destino:  /carregamento?destino=/app/visao-geral
 */
export default function Carregamento() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // Só aceita caminhos internos do site (começam por "/" mas não por "//")
  const pedido = params.get("destino");
  const destino = pedido && pedido.startsWith("/") && !pedido.startsWith("//")
    ? pedido
    : "/criar-conta";

  return <LoadingScreen onFinish={() => navigate(destino, { replace: true })} />;
}
