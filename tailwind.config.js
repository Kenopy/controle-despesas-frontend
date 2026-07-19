/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: "var(--cor-fundo-pagina)",
        nav: "var(--cor-fundo-navbar)",
        texto: "var(--cor-texto-padrao)",
        lineButton: "var(--cor-line-button)",
        backButton: "var(--cor-bg-button)"
      }
    },
  },
  plugins: [],
}