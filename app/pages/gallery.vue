<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8 text-sky-400">
      Artwork Gallery
    </h1>

    <div v-if="pending" class="text-center py-12 text-slate-400">
      Loading gallery...
    </div>

    <div
      v-else-if="!images || images.length === 0"
      class="text-center py-12 text-slate-400"
    >
      No artwork found in gallery yet!
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="group relative overflow-hidden rounded-xl"
      >
        <Image
          :src="img"
          preview
          :pt="{
            root: {
              class: 'block w-full',
            },
            image: {
              class: 'block w-full h-72 object-cover ',
            },
          }"
        />
        <!-- <img
          :src="img"
          alt="Anime Digital Artwork"
          class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const images = ref([]);

const fetchImages = async () => {
  const { data, pending } = await useFetch("/api/gallery");
  images.value = data.value;
};

onMounted(async () => {
  await fetchImages();
});
</script>
