import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/strapi",
    "@vueuse/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
      },
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: { exclude: ["fsevents"] },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  routeRules: {
    "/": { redirect: "/ky" },
  },
  i18n: {
    locales: ["ru", "ky"],
    strategy: "prefix",
    defaultLocale: "ky",
    detectBrowserLanguage: false,
    vueI18n: "./i18n",
  },
});
