<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const background = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!background.value) return;

  gsap.to(background.value, {
    y: 150,
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
  <div class="min-h-screen flex flex-col relative">
    <!-- Background wrapper stays fixed -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div
        ref="background"
        class="absolute inset-[-10%] bg-cover bg-center"
        style="background-image: url(&quot;/background/background.jpg&quot;)"
      />
    </div>

    <!-- Overlay -->
    <div class="fixed inset-0 z-10 bg-slate-950/70" />

    <!-- Content -->
    <div class="relative z-20 min-h-screen flex flex-col">
      <NavBar />

      <main class="flex-1 container mx-auto px-4 py-16 space-y-24">
        <NuxtPage />
      </main>

      <Footer />
    </div>
  </div>
</template>
