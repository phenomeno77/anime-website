<template>
  <section
    class="text-center space-y-8 flex flex-col items-center justify-center"
  >
    <div class="animate-hero-tag">
      <Tag
        value="Anime Artist & Creator"
        rounded
        class="!bg-[var(--manga-gold)] !text-black"
      />
    </div>

    <h1
      class="text-5xl md:text-6xl font-extrabold text-[var(--manga-accent)] drop-shadow-lg animate-hero-title"
    >
      Anime & Digital Art Commissions
    </h1>

    <p
      class="text-xl text-slate-300 max-w-2xl mx-auto animate-hero-description"
    >
      Custom hand-painted anime PC glass panels and digital artwork crafted to
      order.
    </p>

    <div class="flex justify-center gap-4 pt-6 animate-hero-buttons">
      <NuxtLink to="/gallery" class="inline-flex">
        <Button
          label="Explore Gallery"
          size="large"
          class="!bg-[var(--manga-accent)] !border-[var(--manga-accent)]"
        />
      </NuxtLink>

      <NuxtLink to="/about" class="inline-flex">
        <Button
          label="About Artist"
          size="large"
          severity="secondary"
          outlined
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.animate-hero-tag {
  animation: heroDrop 0.7s ease-out both;
}

.animate-hero-title {
  animation: heroUp 0.8s ease-out 0.15s both;
}

.animate-hero-description {
  animation: heroUp 0.8s ease-out 0.3s both;
}

.animate-hero-buttons {
  animation: heroScale 0.8s ease-out 0.45s both;
}

@keyframes heroDrop {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile: no animations */
@media (max-width: 767px) {
  .animate-hero-tag,
  .animate-hero-title,
  .animate-hero-description,
  .animate-hero-buttons {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-hero-tag,
  .animate-hero-title,
  .animate-hero-description,
  .animate-hero-buttons {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
