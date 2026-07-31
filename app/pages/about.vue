<script setup lang="ts">
definePageMeta({
  background: "/background-pages/about-background.jpg",
});

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
    <h1 class="text-4xl font-bold text-center mb-8 text-sky-400">About me</h1>

    <div class="w-full h-[300px] overflow-hidden rounded-lg">
      <img
        :src="aboutImage"
        class="w-full h-full object-cover object-center"
        alt="About me"
      />
    </div>

    <Card
      v-for="(i, index) in textList"
      :key="i.title"
      class="bg-slate-800/80 backdrop-blur my-8 border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
    >
      <!-- <template #header>
          <div class="p-6">
            <div
              class="w-14 h-14 rounded-xl bg-sky-500/20 flex items-center justify-center"
            ></div>
          </div>
        </template> -->

      <template #title>
        <span class="text-xl">
          {{ i.title }}
        </span>
      </template>

      <template #content>
        <p class="text-slate-400 leading-relaxed">
          {{ i.description }}
        </p>
      </template>
    </Card>
  </div>
</template>
