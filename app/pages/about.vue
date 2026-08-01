<script setup lang="ts">
const text = ref(
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
);

const aboutImage = computed(() => {
  return "/about/about.jpg";
});

const textList = [
  {
    title: "Some things about me...",
    description: text.value,
  },
  {
    title: "More about me...",
    description: text.value,
  },
  {
    title: "Even more about me...",
    description: text.value,
  },
];
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1
      class="text-4xl font-bold text-center mb-8 text-[var(--manga-gold)] drop-shadow-[0_0_15px_rgba(212,160,23,0.2)]"
    >
      About me
    </h1>

    <div
      class="w-full h-[300px] overflow-hidden rounded-xl border border-[#27272A] shadow-xl"
    >
      <img
        :src="aboutImage"
        class="w-full h-full object-cover object-center"
        alt="About me"
      />
    </div>

    <Card
      v-for="(i, index) in textList"
      :key="i.title"
      class="!bg-[#15151A] backdrop-blur my-8 !border !border-[#27272A] hover:!border-[var(--manga-gold)] transition-all duration-300 hover:-translate-y-2 shadow-lg"
    >
      <template #title>
        <span class="text-xl text-[var(--manga-accent)]">
          {{ i.title }}
        </span>
      </template>

      <template #content>
        <p class="text-slate-300 leading-relaxed">
          {{ i.description }}
        </p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
img {
  transition: transform 0.6s ease;
}

div:hover > img {
  transform: scale(1.03);
}
</style>
