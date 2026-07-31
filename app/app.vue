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
  ogImage: "/background/main-background.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <BackgroundView />

  <div class="flex flex-col">
    <NavBar />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
