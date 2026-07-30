<script setup lang="ts">
definePageMeta({
  background: "/background/main-background.jpg",
});
</script>

<template>
  <ScrollReveal>
    <HeroSelection />
  </ScrollReveal>

  <ScrollReveal>
    <FeaturesSelection class="pb-16" />
  </ScrollReveal>

  <ScrollReveal>
    <Gallery class="py-16" />
  </ScrollReveal>

  <ScrollReveal>
    <Commision class="py-16" />
  </ScrollReveal>
</template>
