import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    static: true,
  },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
