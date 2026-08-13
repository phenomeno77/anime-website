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
