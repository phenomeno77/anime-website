<script setup lang="ts">
const aboutImage = "/about/about.webp";

const sections = [
  {
    title: "The Artist Behind The Artwork",
    description:
      "I create custom anime-inspired artwork that transforms ideas into unique pieces. Every illustration is crafted with attention to personality, details, colors, and emotion.",
    icon: "👤",
  },
  {
    title: "My Creative Process",
    description:
      "From the first idea to the final result, I focus on understanding the vision behind every commission. Sketching, refining, coloring, and polishing every detail is part of the journey.",
    icon: "✒️",
  },
  {
    title: "What I Create",
    description:
      "Custom anime illustrations, PC glass panel artwork, characters, and digital creations made specifically for people who want something truly personal.",
    icon: "⚡",
  },
];
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <div class="text-center mb-14 animate-fade">
      <p class="mt-5 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
        Bringing anime worlds and personal ideas to life through custom digital
        artwork.
      </p>
    </div>

    <!-- Hero image -->
    <div
      class="relative overflow-hidden rounded-3xl border border-[#27272A] shadow-2xl group animate-image"
    >
      <img
        :src="aboutImage"
        alt="About the artist"
        class="w-full h-[350px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <!-- overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />

      <div class="absolute bottom-8 left-8 right-8">
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          Anime & Digital Art Creator
        </h2>

        <p class="mt-3 text-slate-300 max-w-xl">
          Custom artwork created with passion, creativity and attention to every
          detail.
        </p>
      </div>
    </div>

    <!-- Story cards -->
    <div class="mt-16 space-y-8">
      <Card
        v-for="(section, index) in sections"
        :key="section.title"
        class="!bg-[#15151A] !border !border-[#27272A] hover:!border-[var(--manga-gold)] transition-all duration-500 hover:-translate-y-2 shadow-xl animate-card"
        :style="{
          animationDelay: `${index * 150}ms`,
        }"
      >
        <template #title>
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center bg-[rgba(193,18,63,0.15)] border border-[rgba(212,160,23,0.3)] text-2xl"
            >
              {{ section.icon }}
            </div>

            <span class="text-xl md:text-2xl text-[var(--manga-accent)]">
              {{ section.title }}
            </span>
          </div>
        </template>

        <template #content>
          <p class="text-slate-300 leading-relaxed text-base md:text-lg">
            {{ section.description }}
          </p>
        </template>
      </Card>
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <NuxtLink to="/gallery">
        <Button
          label="View My Artwork"
          size="large"
          class="!bg-[var(--manga-accent)] !border-[var(--manga-accent)] hover:!bg-[#a30f35]"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.animate-fade {
  animation: fadeUp 0.8s ease-out both;
}

.animate-image {
  animation: imageReveal 1s ease-out both;
}

.animate-card {
  animation: fadeUp 0.8s ease-out both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes imageReveal {
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 767px) {
  .animate-fade,
  .animate-image,
  .animate-card {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade,
  .animate-image,
  .animate-card {
    animation: none;
  }
}
</style>
