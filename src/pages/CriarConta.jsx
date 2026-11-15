import { Link } from "react-router-dom";

/**
 * PLACEHOLDER — aqui vai a tua página de criação de conta (era auth/criar-conta.html).
 * Quando me enviares o ficheiro, converto-o para este componente.
 */
export default function CriarConta() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1>Criar conta</h1>
        <p>Esta página ainda é um espaço reservado. A tela de carregamento termina aqui.</p>
        <Link to="/">← Voltar ao início</Link>
      </div>
    </main>
  );
}
