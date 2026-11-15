import { useEffect } from "react";

/**
 * Faz os elementos com a classe "rv" aparecerem suavemente quando entram no ecrã.
 * (Substitui o antigo js/ui/reveal.js.)
 * Uso: chamar useReveal() uma vez na página e pôr className="rv" nos elementos.
 * Para vários filhos a entrar em cascata, usa className="rv rv-stagger" no pai.
 */
export default function useReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll(".rv");

    // Sem suporte, ou se o utilizador prefere menos movimento: mostra tudo já.
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduzir) {
      elementos.forEach((el) => el.classList.add("rv-in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
