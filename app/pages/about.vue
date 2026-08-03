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
    <!-- Hero image -->
    <div
      class="relative overflow-hidden rounded-3xl border border-[#27272A] shadow-2xl group animate-image"
    >
      <img
        :src="aboutImage"
        alt="About the artist"
        class="w-full h-[380px] md:h-[600px] object-cover"
      />

      <!-- Dark gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
      />

      <!-- Content panel -->
      <div class="absolute bottom-0 left-0 right-0 p-3 md:p-10">
        <div
          class="max-w-3xl rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4 md:p-8"
        >
          <h2 class="text-1xl md:text-5xl font-bold text-white leading-tight">
            Anime & Digital Art Creator
          </h2>

          <p
            class="mt-2 md:mt-4 text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl"
          >
            Custom artwork created with passion, creativity and attention to
            every detail.
          </p>

          <div class="mt-3 md:mt-6 flex flex-wrap gap-2">
            <span
              class="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[var(--manga-gold)] bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.3)]"
            >
              Anime Art
            </span>

            <span
              class="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[var(--manga-accent)] bg-[rgba(193,18,63,0.12)] border border-[rgba(193,18,63,0.3)]"
            >
              Commissions
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Story cards -->
    <div class="mt-16 grid gap-8">
      <Card
        v-for="(section, index) in sections"
        :key="section.title"
        class="!bg-[#15151A]/90 !border !border-white/10 shadow-xl overflow-hidden group animate-card hover:-translate-y-2 transition-transform duration-500"
      >
        <template #title>
          <div class="flex items-start gap-5">
            <!-- Icon -->
            <div
              class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-[rgba(193,18,63,0.25)] to-[rgba(212,160,23,0.15)] border border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-110"
            >
              {{ section.icon }}
            </div>

            <!-- Title -->
            <div>
              <h3
                class="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--manga-gold)]"
              >
                {{ section.title }}
              </h3>

              <div
                class="mt-2 h-[2px] w-12 bg-[var(--manga-accent)] transition-all duration-500 group-hover:w-24"
              />
            </div>
          </div>
        </template>

        <template #content>
          <p class="text-slate-300 leading-relaxed text-base md:text-lg mt-4">
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

@keyframes imageReveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-card {
  animation: cardReveal 0.8s ease-out both;
}

@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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

@media (max-width: 767px) {
  /* .animate-fade,
  .animate-image,
  .animate-card {
    animation: none;
  } */
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade,
  .animate-image,
  .animate-card {
    animation: none;
  }
}
</style>
