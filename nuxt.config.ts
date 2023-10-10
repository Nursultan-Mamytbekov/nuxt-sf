// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@mdi/font/css/materialdesignicons.min.css", "~/assets/style/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/_variables.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxtjs/i18n"],
  routeRules: {
    "/": { redirect: "/kg" },
  },
  i18n: {
    locales: ["ru", "kg"],
    strategy: "prefix",
    defaultLocale: "kg",
    detectBrowserLanguage: false,
    vueI18n: "./i18n",
  },
  vuetify: {
    treeShake: true,
  },
  build: {
    transpile: ["vuetify"],
  },
});
