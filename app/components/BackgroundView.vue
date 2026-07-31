<script setup lang="ts">
const route = useRoute();

const image = computed(
  () =>
    (route.meta.background as string | undefined) ??
    "background/main-background.jpg",
);
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <div
      class="absolute inset-[-5%] bg-cover bg-center bg-fixed"
      :style="{ backgroundImage: `url(${image})` }"
    />

    <div class="absolute inset-0 bg-slate-950/70" />
  </div>
</template>
