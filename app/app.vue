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
    <!-- Background decoration -->
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        class="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-3xl"
      />

      <div
        class="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-pink-300/30 blur-3xl"
      />

      <div
        class="absolute bottom-[-150px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl"
      />
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
