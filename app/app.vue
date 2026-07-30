<script setup lang="ts">
useNavigationHeight();

useSeoMeta({
  title: "Anime & Digital Art Commissions",
  description:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  // Social Media Meta Tags
  ogTitle: "Anime & Digital Art Commissions",
  ogDescription:
    "Custom hand-painted anime PC glass panels and digital artwork crafted to order.",
  ogImage: "/background/main-background.jpg", // Place a preview image in your public/ folder
  twitterCard: "summary_large_image",
});
</script>

<template>
  <BackgroundView />

  <div class="relative z-10 min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-1 container mx-auto px-4 py-16">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
