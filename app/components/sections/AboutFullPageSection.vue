<script setup lang="ts">
// EXAMPLE VALUES — replace with real content once your sister provides it
const quickFacts = [
  { label: "Drawing since", value: "2016" },
  { label: "Based in", value: "Austria" },
  { label: "Favorite medium", value: "Digital" },
];

const processSteps = [
  {
    title: "Sketching",
    description:
      "Every piece starts as loose thumbnails — chasing pose and energy before anything else.",
  },
  {
    title: "Lineart & Base Colors",
    description:
      "Clean lines go down first, then flat color blocks to lock in the palette early.",
  },
  {
    title: "Rendering & Light",
    description:
      "This is where a piece actually comes alive — shading, highlights, and mood.",
  },
];
</script>

<template>
  <!-- Intro — base tone -->
  <section class="relative">
    <div class="container-custom py-20 lg:py-32">
      <div class="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div><UiArtistPortrait /></div>

        <div>
          <p
            class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent-2"
          >
            About the Artist
          </p>

          <h1
            class="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl"
          >
            Hi, I'm In<span class="text-accent-2">Qu</span>
          </h1>

          <div
            class="mt-6 max-w-lg space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            <p>
              I've been drawing for as long as I can remember, but anime and
              webtoon art specifically pulled me in during my teens — there was
              something about the way a single panel could carry so much emotion
              that I got hooked and never looked back.
            </p>
            <p>
              These days I split my time between client commissions and working
              on Nutcases, a webtoon I co-create with my writing partner. I love
              designing characters with a little too much personality — the
              messier and more expressive, the better.
            </p>
            <p>
              When I'm not drawing, I'm probably still thinking about drawing.
              Coffee helps. So does chaos, apparently.
            </p>
          </div>

          <div class="mt-8">
            <UiQuickFacts :facts="quickFacts" align="left" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process / How I Work — raised tone -->
  <UiSectionBackground tone="raised" divider>
    <section class="relative">
      <div class="container-custom py-20 lg:py-28">
        <UiSectionTitle
          eyebrow="Behind the Art"
          title="How I Work"
          description="A quick look at what goes into a finished piece, from first sketch to final render."
        />

        <div class="mt-14 grid gap-8 sm:grid-cols-3">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="group rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_24px_50px_-24px_rgba(157,92,255,0.5)]"
          >
            <span class="font-display text-sm font-bold text-accent-2">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <h3
              class="mt-2 font-display text-lg font-bold tracking-tight text-text"
            >
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>

  <!-- Closing CTA — base tone -->
  <UiSectionBackground tone="base" divider>
    <section class="relative">
      <div class="container-custom py-20 text-center lg:py-28">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Want something drawn just for you?
        </h2>
        <p class="mx-auto mt-4 max-w-md text-base text-muted">
          I'd love to hear your idea — check out how commissions work and let's
          get started.
        </p>
        <div class="mt-8">
          <UiPrimaryButton
            label="View Commission Process"
            href="/commissions"
          />
        </div>
      </div>
    </section>
  </UiSectionBackground>
</template>
