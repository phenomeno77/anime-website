<script setup lang="ts">
const backgrounds = ref<string[]>([]);

const findBackground = async (number: number) => {
  const extensions = ["webp", "jpg", "jpeg", "png"];

  for (const ext of extensions) {
    const url = `/background-home/${number}.${ext}`;

    try {
      const response = await fetch(url, { method: "HEAD" });

      if (response.ok) {
        return url;
      }
    } catch {}
  }

  return "";
};

onMounted(async () => {
  backgrounds.value = await Promise.all([
    findBackground(1),
    findBackground(2),
    findBackground(3),
    findBackground(4),
  ]);
});
</script>

<template>
  <div
    class="parallax"
    :style="{
      backgroundImage: backgrounds[0] ? `url(${backgrounds[0]})` : 'none',
    }"
  >
    <HeroSelection class="px-4 md:px-16" />
  </div>

  <div
    class="parallax"
    :style="{
      backgroundImage: backgrounds[1] ? `url(${backgrounds[1]})` : 'none',
    }"
  >
    <FeaturesSelection class="px-4 md:px-8" />
  </div>

  <div class="parallax">
    <Gallery class="px-4 md:px-8" />
  </div>

  <Divider class="m-0!" />
  <div class="parallax">
    <Commision class="px-4 md:px-16 py-16" />
  </div>
</template>
