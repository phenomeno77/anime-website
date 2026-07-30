<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();

const background = ref<HTMLElement | null>(null);

const image = computed(
  () =>
    (route.meta.background as string | undefined) ??
    "/background/main-background.jpg",
);

onMounted(() => {
  if (!background.value) return;

  gsap.to(background.value, {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
});
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <div
      ref="background"
      class="absolute inset-[-5%] bg-cover bg-center will-change-transform"
      :style="{ backgroundImage: `url(${image})` }"
    />

    <div class="absolute inset-0 bg-slate-950/70" />
  </div>
</template>
