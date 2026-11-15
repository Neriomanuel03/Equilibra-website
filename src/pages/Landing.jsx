import { Link } from "react-router-dom";
import { ArrowLeftRight, Target, ChartPie, CircleCheck } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

/**
 * Página inicial (era o index.html).
 * Repara: em React usamos className (em vez de class) e fechamos todas as tags.
 * Os links que levavam a outras páginas .html agora usam <Link to="...">.
 */
export default function Landing() {
  useReveal();

  return (
    <>
      <header className="header">
        <nav aria-label="Principal">
          <Link className="logo" to="/">
            <img src="/assets/logo.png" alt="" />
            Equilibra
          </Link>
          <div className="links">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#painel">Painel</a>
          </div>
          <div className="nav-actions">
            <Link className="nav-btn" to="/app/visao-geral">Entrar</Link>
            <Link className="nav-btn solid" to="/carregamento" target="_blank" rel="noopener noreferrer">Criar conta</Link>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <h1>Cada Kwanza no seu lugar.</h1>
            <p className="lead">
              Regista o que ganhas e o que gastas, define limites por categoria e vê, mês após mês,
              para onde vai o teu dinheiro.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/carregamento" target="_blank" rel="noopener noreferrer">Começar agora</Link>
              <a className="btn btn-ghost" href="#como-funciona">Ver como funciona</a>
            </div>
            <small style={{ color: "var(--muted)" }}>Gratuito. Os teus dados ficam só teus.</small>
          </div>
          <div className="stack" aria-label="Exemplo de resumo mensal">
            <div className="layer"><span>Rendimentos</span><b className="num">450 000 Kz</b></div>
            <div className="layer"><span>Despesas</span><b className="num">312 500 Kz</b></div>
            <div className="layer"><span>Saldo do mês</span><b className="num">137 500 Kz</b></div>
          </div>
        </section>

        <section className="section" id="funcionalidades">
          <h2 className="rv">Tudo o que precisas para organizar o teu dinheiro</h2>
          <div className="features rv rv-stagger">
            <article className="card">
              <ArrowLeftRight aria-hidden="true" />
              <h3>Rendimentos e despesas</h3>
              <p>Regista cada movimento em segundos, com categoria e data.</p>
            </article>
            <article className="card">
              <Target aria-hidden="true" />
              <h3>Orçamentos mensais</h3>
              <p>Define limites e recebe um aviso antes de os ultrapassares.</p>
            </article>
            <article className="card">
              <ChartPie aria-hidden="true" />
              <h3>Relatórios claros</h3>
              <p>Compara meses e descobre as categorias onde mais gastas.</p>
            </article>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <h2 className="rv">Três passos para ganhar controlo</h2>
          <ol className="steps rv rv-stagger">
            <li><h3>Cria a tua conta</h3><p>Demora menos de um minuto e as categorias já vêm preparadas.</p></li>
            <li><h3>Regista os movimentos</h3><p>Adiciona salário, compras, transporte e tudo o resto.</p></li>
            <li><h3>Acompanha o equilíbrio</h3><p>O painel calcula saldo, gastos e orçamento por ti.</p></li>
          </ol>
        </section>

        <section
          className="section dark"
          id="beneficios"
          style={{ padding: "3.5rem clamp(1.2rem,4vw,3.5rem)" }}
        >
          <h2 className="rv">Porque usar o Equilibra</h2>
          <ul className="benefits rv rv-stagger">
            <li><CircleCheck aria-hidden="true" />Vês quanto sobra antes do fim do mês.</li>
            <li><CircleCheck aria-hidden="true" />Identificas os gastos que podes reduzir.</li>
            <li><CircleCheck aria-hidden="true" />Tudo em Kwanzas, pensado para Angola.</li>
            <li><CircleCheck aria-hidden="true" />Dados protegidos: só tu acedes aos teus registos.</li>
          </ul>
        </section>

        <section className="section" id="painel">
          <h2 className="rv">O teu mês, num só ecrã</h2>
          <div className="preview rv">
            <div className="mock">
              <div className="card metric"><span>Saldo disponível</span><strong className="num">137 500 Kz</strong></div>
              <div className="card metric"><span>Despesas</span><strong className="num">312 500 Kz</strong></div>
              <div className="card metric">
                <span>Orçamento usado</span>
                <strong className="num">78%</strong>
                <div className="progress"><span style={{ width: "78%" }} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2 className="rv">Começa hoje a organizar as tuas finanças</h2>
          <Link className="btn" to="/carregamento" target="_blank" rel="noopener noreferrer">Criar conta grátis</Link>
        </section>
      </main>

      <footer>
        <div className="container">
          <span><b>Equilibra</b> — gestão de finanças pessoais para Angola.</span>
          <span>© 2026 Equilibra</span>
        </div>
      </footer>
    </>
  );
}