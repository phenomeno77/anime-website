<script setup lang="ts">
const features = [
  {
    title: "Custom PC Artwork",
    description:
      "Hand-painted anime glass panels designed specifically for your setup.",
  },
  {
    title: "Digital Illustrations",
    description:
      "Original anime-style artwork created digitally for personal projects.",
  },
  {
    title: "Premium Quality",
    description: "High-quality materials and attention to every small detail.",
  },
  {
    title: "Custom Characters",
    description: "Bring your favorite characters or original ideas to life.",
  },
  {
    title: "Worldwide Orders",
    description: "Commissions available for clients around the world.",
  },
  {
    title: "Personal Service",
    description: "Direct communication throughout the entire creative process.",
  },
];

const isLeftCard = (index: number) => index < 3;

const reveals = features.map(() => useReveal());

const getReveal = (index: number) => reveals[index]!;
</script>

<template>
  <div class="flex w-full flex-col gap-6 md:gap-3 py-16">
    <div class="flex justify-center text-center mb-10">
      <h2
        class="text-3xl font-bold text-[var(--manga-accent)] drop-shadow-[0_0_15px_rgba(193,18,63,0.25)]"
      >
        Why Choose My Artwork?
      </h2>
    </div>

    <div
      v-for="(feature, index) in features"
      :key="feature.title"
      :ref="getReveal(index).target"
      class="w-full md:w-1/2"
      :class="[
        isLeftCard(index) ? 'md:self-start' : 'md:self-end',

        getReveal(index).isVisible.value
          ? isLeftCard(index)
            ? 'animate-slide-left'
            : 'animate-slide-right'
          : 'reveal-hidden',
      ]"
    >
      <Card
        class="bg-[#15151A]! backdrop-blur border border-[#27272A]! transition-all duration-300 hover:-translate-y-2"
      >
        <template #title>
          <span class="text-xl text-slate-100">
            {{ feature.title }}
          </span>
        </template>

        <template #content>
          <p class="text-slate-400 leading-relaxed">
            {{ feature.description }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
/* Initial hidden state */
.reveal-hidden {
  opacity: 0;
}

/* Desktop: slide animations */
@media (min-width: 768px) {
  .reveal-hidden {
    transform: translateX(0);
  }

  .animate-slide-left {
    animation: slideLeft 0.8s ease-out forwards;
  }

  .animate-slide-right {
    animation: slideRight 0.8s ease-out forwards;
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Mobile: fade only */
@media (max-width: 767px) {
  .animate-slide-left,
  .animate-slide-right {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .reveal-hidden {
    opacity: 0;
    transform: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .reveal-hidden,
  .animate-slide-left,
  .animate-slide-right {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
