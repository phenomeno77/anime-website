<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const el = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!el.value) return;

  gsap.from(el.value, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el.value,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
