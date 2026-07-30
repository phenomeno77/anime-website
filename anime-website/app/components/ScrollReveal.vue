<script setup lang="ts">
const element = ref<HTMLElement | null>(null);
const visible = ref(false);

onMounted(() => {
  if (!element.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
    },
  );

  observer.observe(element.value);
});
</script>

<template>
  <div ref="element" :class="{ 'animate-fade-in-up': visible }">
    <slot />
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
