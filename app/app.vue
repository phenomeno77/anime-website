<script setup lang="ts">
useSeoMeta({
  title: "Digital Art",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogImage: "/background-pages/1.webp",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    class: "dark",
  },
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar class="sticky! top-0! z-50! bg-black/60! backdrop-blur-md!" />

    <main class="flex-1 flex flex-col justify-center align-center">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
