import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Carregamento from "./pages/Carregamento.jsx";
import CriarConta from "./pages/CriarConta.jsx";
import VisaoGeral from "./pages/VisaoGeral.jsx";

/**
 * Cada <Route> liga um endereço (path) a uma página (element).
 * Antes eram ficheiros .html separados; agora é tudo uma só aplicação.
 *
 *   /                  → Landing        (era index.html)
 *   /carregamento      → Carregamento   (tela de loading)
 *   /criar-conta       → CriarConta     (era auth/criar-conta.html)
 *   /app/visao-geral   → VisaoGeral     (era app/visao-geral.html)
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/carregamento" element={<Carregamento />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/app/visao-geral" element={<VisaoGeral />} />
    </Routes>
  );
}
