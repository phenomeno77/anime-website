<script setup lang="ts">
const features = [
  {
    title: "Custom PC Artwork",
    description:
      "Hand-painted anime glass panels designed specifically for your setup.",
    icon: "fas-regular fas-file",
  },
  {
    title: "Digital Illustrations",
    description:
      "Original anime-style artwork created digitally for personal projects.",
    icon: "palette",
  },
  {
    title: "Premium Quality",
    description: "High-quality materials and attention to every small detail.",
    icon: "star",
  },
  {
    title: "Custom Characters",
    description: "Bring your favorite characters or original ideas to life.",
    icon: "user",
  },
  {
    title: "Worldwide Orders",
    description: "Commissions available for clients around the world.",
    icon: "globe",
  },
  {
    title: "Personal Service",
    description: "Direct communication throughout the entire creative process.",
    icon: "comments",
  },
];
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-sky-400">Why Choose My Artwork?</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
      <Card
        v-for="(feature, index) in features"
        :key="feature.title"
        class="bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
      >
        <template #header>
          <div class="p-2">
            <div
              class="w-14 h-14 rounded-xl bg-sky-500/20 flex items-center justify-center"
            ></div>
          </div>
        </template>

        <template #title>
          <span class="text-xl">
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

    <div class="flex justify-center gap-4 pt-6">
      <NuxtLink to="/about" class="inline-flex">
        <Button label="Learn more" fluid size="large" severity="secondary" />
      </NuxtLink>
    </div>
  </div>
</template>
