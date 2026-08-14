<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) =>
    title ? `${title} — InQu` : "InQu — Anime Illustrator & Webtoon Artist",

  description:
    "Custom anime illustrations, character portraits, and reference sheets by InQu. Original character art, commissions, and the webtoon Nutcases.",
  ogImage: "/commissions/examples/bust-up.webp", // relative is fine now — module resolves to absolute
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "InQu — anime character illustration",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: { lang: "en" },
  meta: [{ name: "color-scheme", content: "dark" }],
});
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-bg text-text">
    <div class="relative z-10">
      <LayersAppNavBar />

      <main>
        <NuxtPage />
      </main>

      <LayersAppFooter />
    </div>
  </div>
</template>
