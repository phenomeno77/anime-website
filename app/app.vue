<script setup lang="ts">
useSeoMeta({
  title: "InQu | Digital Art",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  // ogImage: "https://yourdomain.com/background-pages/1.webp",
  ogImage: "public/artwork-gallery/artworks-home/003.webp",

  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: "public/artwork-gallery/artworks-home/003.webp",
});
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-[#FCFCFD] text-zinc-900"
  >
    <!-- Background decoration -->
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <!-- Dot grid texture — global, every page/section -->
      <div class="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
    </div>

    <div class="relative z-10">
      <LayersAppNavBar />
      <main>
        <NuxtPage />
      </main>
      <LayersAppFooter />
    </div>
  </div>
</template>

<style scoped>
.dot-grid {
  background-image: radial-gradient(
    circle,
    var(--color-violet-300, #c4b5fd) 1.5px,
    transparent 1.5px
  );
  background-size: 24px 24px;
  mask-image: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    black 60%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    black 60%,
    transparent 100%
  );
}
</style>
