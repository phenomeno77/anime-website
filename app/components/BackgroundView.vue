<script setup lang="ts">
const route = useRoute();

const image = computed(
  () =>
    (route.meta.background as string | undefined) ??
    "/background/main-background.jpg",
);
</script>

<template>
  <div
    class="fixed inset-0 -z-10 parallax"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="absolute inset-0 bg-slate-950/70" />
  </div>
</template>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
