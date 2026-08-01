<script setup lang="ts">
definePageMeta({
  background: "/background-home/main.jpg",
});
</script>

<template>
  <div
    class="parallax"
    style="background-image: url(&quot;/background-home/hero.jpg&quot;)"
  >
    <HeroSelection class="px-4 md:px-16" />
  </div>

  <div
    class="parallax"
    style="background-image: url(&quot;/background-home/features.jpg&quot;)"
  >
    <FeaturesSelection class="px-4 md:px-16" />
  </div>

  <div
    class="parallax"
    style="background-image: url(&quot;/background-home/gallery.jpg&quot;)"
  >
    <Gallery class="px-4 md:px-16" />
  </div>

  <div
    class="parallax"
    style="background-image: url(&quot;/background-home/hero.jpg&quot;)"
  >
    <Commision class="px-4 md:px-16" />
  </div>
</template>
