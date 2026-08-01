<script setup lang="ts">
useNavigationHeight();

useSeoMeta({
  title: "Anime & Digital Art Commissions",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogImage: "/background-pages/main.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-1 flex flex-col justify-center align-center">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
