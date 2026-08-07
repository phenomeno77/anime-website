<script setup lang="ts">
useSeoMeta({
  title: "InQu | Digital Art",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogImage: "/background-pages/1.webp",
  twitterCard: "summary_large_image",
});

// useHead({
//   htmlAttrs: {
//     class: "dark",
//   },
// });
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-[#FCFCFD] text-zinc-900"
  >
    <div class="relative z-10">
      <LayersAppNavBar />

      <main>
        <NuxtPage />
      </main>

      <LayersAppFooter />
    </div>
  </div>
</template>
