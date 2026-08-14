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
    storage: {
      shield: {
        driver: "memory",
      },
    },
  },
  components: true,
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/image",
    "nuxt-api-shield",
    "@nuxt/fonts",
    "@nuxtjs/seo",
  ],

  // ---------- SEO ----------
  site: {
    url: "https://manga-umber-rho.vercel.app",
    name: "InQu",
    description:
      "Custom anime character illustrations, portraits, and reference sheets by InQu — commissions and the webtoon Nutcases.",
    defaultLocale: "en",
  },

  sitemap: {
    exclude: ["/legal-notice", "/privacy-policy", "/terms-of-service"],
  },

  // no dynamic OG images — we ship a static /og/og-default.jpg
  ogImage: { enabled: false },

  // honor InQu's ToS: block AI training crawlers, keep search engines
  robots: {
    blockAiBots: true,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "InQu",
      url: "https://manga-umber-rho.vercel.app",
      sameAs: [
        "https://www.instagram.com/inqu_buss/",
        "https://www.tiktok.com/@orimeskariokes",
        "https://www.webtoons.com/en/canvas/nutcases/list?title_no=1084062",
      ],
    },
  },
  // ---------- /SEO ----------

  fonts: {
    families: [
      { name: "Clash Display", provider: "fontshare", weights: [600, 700] },
      { name: "Satoshi", provider: "fontshare", weights: [400, 500, 700] },
    ],
  },

  // Limits IPs to max 3 submissions every 10 minutes
  nuxtApiShield: {
    limit: {
      max: 100,
      duration: 60,
      ban: 60,
    },
    routes: [
      {
        path: "/api/commission",
        max: 1,
        duration: 300,
        ban: 300,
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
        options: {
          darkModeSelector: false || "none",
        },
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

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.png",
          sizes: "360x360",
        },
        {
          rel: "apple-touch-icon",
          href: "/logo.png",
        },
      ],
    },
  },
});
