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
  nuxtApiShield: {
    // 1. Set global defaults loose (or skip globally)
    limit: {
      max: 100,
      duration: 60,
      ban: 60,
    },

    // 2. Specify precise rules ONLY for the commission route
    routes: [
      {
        path: "/api/commission",
        max: 1, // Allow 1 request...
        duration: 300, // ...per 5 minutes (300 seconds)
        ban: 300, // Ban duration: 5 minutes
      },
    ],

    errorMessage:
      "You've already submitted a commission request. Please wait 5 minutes before trying again.",
  },
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
