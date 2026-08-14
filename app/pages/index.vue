<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) =>
    title ? `${title} — InQu` : "InQu — Anime Illustrator & Webtoon Artist",

  description:
    "Custom anime illustrations, character portraits, and reference sheets by InQu. Original character art, commissions, and the webtoon Nutcases.",
  ogImage: "/commissions/examples/bust-up.webp", // relative is fine now — module resolves to absolute
  // ogImageWidth: 1200,
  // ogImageHeight: 630,
  ogImageAlt: "InQu — anime character illustration",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: { lang: "en" },
  meta: [{ name: "color-scheme", content: "dark" }],
});
</script>

<template>
  <div>
    <!-- Hero — base tone, carries its own dot-grid + glows -->
    <SectionsHeroSection id="hero-section" />

    <!-- Artwork gallery — raised -->
    <UiSectionBackground tone="raised" divider>
      <SectionsArtworkGalleryHomepageSection id="artwork-gallery" />
    </UiSectionBackground>

    <!-- Commission steps — base -->
    <UiSectionBackground tone="base" divider>
      <SectionsCommissionSection />
    </UiSectionBackground>

    <!-- Webtoon — raised (glow anchor suits the feature) -->
    <UiSectionBackground tone="raised" divider>
      <SectionsWebtoonSection />
    </UiSectionBackground>

    <!-- About me — base -->
    <UiSectionBackground tone="base" divider>
      <SectionsAboutTeaserSection />
    </UiSectionBackground>
  </div>
</template>
