<script setup lang="ts">
definePageMeta({
  background: "/background/main-background.jpg",
});
</script>

<template>
  <div class="parallax">
    <HeroSelection class="px-4 md:px-16" />
  </div>

  <div class="parallax">
    <FeaturesSelection class="px-4 md:px-16" />
  </div>

  <div class="parallax">
    <Gallery class="px-4 md:px-16" />
  </div>

  <div class="parallax">
    <Commision class="px-4 md:px-16" />
  </div>
</template>
