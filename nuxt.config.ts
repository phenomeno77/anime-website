import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: true,
  modules: ["@primevue/nuxt-module", "@nuxt/image", "nuxt-api-shield"],
  // Limits IPs to max 3 submissions every 10 minutes
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  runtimeConfig: {
    mailHost: process.env.NUXT_MAIL_HOST,
    mailPort: process.env.NUXT_MAIL_PORT,
    mailUser: process.env.NUXT_MAIL_USER,
    mailPass: process.env.NUXT_MAIL_PASS,
    mailTo: process.env.NUXT_MAIL_TO,
  },
});
