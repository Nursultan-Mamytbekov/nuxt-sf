/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  prefix: "tw-",
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "580px",
      md: "920px",
      md: "1024px",
      xl: "1024px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
