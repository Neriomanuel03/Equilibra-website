# Equilibra em React — guia rápido

## Como arrancar
1. Instala o Node.js (https://nodejs.org, versão LTS).
2. Na pasta do projecto, no terminal:
   ```
   npm install     (só da primeira vez)
   npm run dev     (abre o site em http://localhost:5173)
   ```
3. Copia os teus CSS antigos (`tokens`, `base`, `components`, `landing`) para `src/styles/`, substituindo os 4 ficheiros que lá estão.

## Onde mudar a duração do carregamento
`src/components/LoadingScreen.jsx`, no topo:
```js
export const MIN_DURATION_MS = 8000;   // 8000 = 8 segundos
```

## Para onde foi cada coisa
| Antes (HTML/CSS/JS)         | Agora (React)                          |
|-----------------------------|----------------------------------------|
| index.html                  | src/pages/Landing.jsx                  |
| auth/carregamento.html + js | src/pages/Carregamento.jsx + src/components/LoadingScreen.jsx/.css |
| auth/criar-conta.html       | src/pages/CriarConta.jsx (placeholder) |
| app/visao-geral.html        | src/pages/VisaoGeral.jsx (placeholder) |
| js/ui/reveal.js             | src/hooks/useReveal.js                 |
| css/*.css                   | src/styles/*.css                       |
| assets/logo.png             | public/assets/logo.png                 |
| várias páginas .html        | src/App.jsx (as rotas)                 |

## 5 ideias para começar a perceber React
1. **Componente** = uma função que devolve HTML (JSX). `Landing()` é uma página inteira.
2. **JSX** é quase HTML, mas: `class` → `className`, todas as tags fecham (`<img />`), e JavaScript vai entre `{ }`.
3. **useState** guarda valores que mudam (ex.: a percentagem do carregamento). Quando muda, o ecrã actualiza sozinho.
4. **useEffect** corre código "por fora" do desenho (timers, animações). Em `LoadingScreen.jsx` é ele que faz a barra andar.
5. **Rotas** (`App.jsx`): cada endereço mostra um componente. `<Link to="/x">` navega sem recarregar a página.

Sugestão para treinar: abre `LoadingScreen.jsx`, muda as frases em `ETAPAS` e guarda — o navegador actualiza na hora.
