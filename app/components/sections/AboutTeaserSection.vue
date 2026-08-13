<script setup lang="ts">
// EXAMPLE VALUES — replace with real content once your sister provides it
const quickFacts = [
  { label: "Drawing since", value: "2016" },
  { label: "Based in", value: "Austria" },
  { label: "Favorite medium", value: "Digital" },
];
const reveal = useReveal();
</script>

<template>
  <section class="relative">
    <div
      class="container-custom py-20 lg:py-32"
      :ref="reveal.target"
      :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
    >
      <div class="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div class="order-2 animate-up md:order-1">
          <UiArtistPortrait />
        </div>

        <div class="order-1 animate-drop text-center md:order-2 md:text-left">
          <p
            class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent-2"
          >
            About the Artist
          </p>
          <h2
            class="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl"
          >
            Hi, I'm In<span class="text-accent-2">Qu</span>
          </h2>
          <p
            class="mx-auto mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8 md:mx-0"
          >
            I'm a digital illustrator with a soft spot for chaotic character
            design and anything a little too dramatic. When I'm not
            commissioning, you'll find me buried in webtoon panels for Nutcases
            or chasing the perfect shade of purple.
          </p>

          <div class="mt-8">
            <UiQuickFacts :facts="quickFacts" align="left" />
          </div>

          <div class="mt-10">
            <UiPrimaryButton label="Learn more" href="/about" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
