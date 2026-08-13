<script setup lang="ts">
useSeoMeta({
  title: "InQu | Digital Art",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogImage:
    "https://manga-umber-rho.vercel.app/artwork-gallery/artworks-home/003.webp",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage:
    "https://manga-umber-rho.vercel.app/artwork-gallery/artworks-home/003.webp",
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
