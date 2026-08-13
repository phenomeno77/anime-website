<script setup lang="ts">
const credits = [
  {
    role: "Writer",
    name: "Kimlicki",
    icon: "M4 20h16M6.5 17.5 17 7l-3-3L3.5 14.5 3 18l3.5-.5Z",
  },
  {
    role: "Artist",
    name: "InQu (Me)",
    icon: "M12 2C7 2 3 6 3 11c0 3 2 4 4 4h1a2 2 0 0 1 2 2v1c0 2 1 4 2 4 5 0 9-4.5 9-11S17 2 12 2Zm-4 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
  },
];
const reveal = useReveal();
</script>

<template>
  <section id="webtoon" class="relative overflow-hidden">
    <!-- Glow anchor — the one accent moment for this feature section -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-glow/10 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="container-custom py-20 lg:py-32"
      :ref="reveal.target"
      :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
    >
      <!-- Banner -->
      <div class="mx-auto max-w-4xl animate-scale">
        <div
          class="overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_60px_-20px_var(--color-glow)]"
        >
          <NuxtImg
            src="/webtoon/webtoon.webp"
            alt="Nutcases webtoon banner — five characters and the series logo"
            class="h-auto w-full object-cover"
            width="1080"
            height="380"
            format="webp"
            quality="85"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="mx-auto mt-12 max-w-2xl text-center">
        <UiSectionTitle
          eyebrow="Currently Creating"
          title="Nutcases"
          description="by ORIMES KARIOKES"
          class="animate-drop"
        />
        <p
          class="animate-up mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
        >
          Hi hi~ We're two besties who love writing and drawing, currently
          cooking up a webtoon about five chaotic dudes who solve weird cases,
          take on the gigs no one else wants, and somehow live their lives in
          the most chaotic way possible.
        </p>

        <!-- Credits -->
        <div
          class="animate-scale mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          <div
            v-for="credit in credits"
            :key="credit.role"
            class="flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-accent-2">
              <path :d="credit.icon" />
            </svg>
            <span class="text-sm text-muted">
              {{ credit.role }}:
              <strong class="font-semibold text-text">{{ credit.name }}</strong>
            </span>
          </div>
        </div>

        <!-- CTA + Social -->
        <div class="animate-scale mt-10 flex flex-col items-center gap-6">
          <UiPrimaryButton
            label="Read on WEBTOON"
            is-external
            href="https://www.webtoons.com/en/canvas/nutcases/list?title_no=1084062"
          />
          <div class="flex gap-6">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
