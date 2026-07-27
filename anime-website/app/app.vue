<template>
  <NavBar />

  <!-- 3. flex-grow pushes the Footer down to the very bottom on short pages -->
  <main>
    <NuxtPage />
  </main>

  <!-- 4. Footer stays pinned to bottom -->
  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
