import { Link } from "react-router-dom";

/**
 * PLACEHOLDER — aqui vai o painel (era app/visao-geral.html).
 */
export default function VisaoGeral() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1>Visão geral</h1>
        <p>Espaço reservado para o painel de despesas.</p>
        <Link to="/">← Voltar ao início</Link>
      </div>
    </main>
  );
}
