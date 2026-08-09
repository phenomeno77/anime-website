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
  <section class="py-20 lg:py-28">
    <div class="container-custom">
      <div class="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div><UiArtistPortrait /></div>

        <div>
          <p
            class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500"
          >
            About the Artist
          </p>

          <h1
            class="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
          >
            Hi, I'm InQu
          </h1>

          <div
            class="prose prose-zinc mt-6 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8"
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

  <!-- Process / How I Work -->
  <UiSectionBackground variant="lavender">
    <section class="py-20 lg:py-28">
      <div class="container-custom">
        <UiSectionTitle
          eyebrow="Behind the Art"
          title="How I Work"
          description="A quick look at what goes into a finished piece, from first sketch to final render."
        />

        <div class="mt-14 grid gap-8 sm:grid-cols-3">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="rounded-2xl border border-zinc-200 bg-white/70 p-6 text-center"
          >
            <span class="text-sm font-semibold text-violet-500">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <h3 class="mt-2 text-lg font-bold text-zinc-900">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>

  <!-- Closing CTA -->
  <section class="py-20 lg:py-28">
    <div class="container-custom text-center">
      <h2 class="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Want something drawn just for you?
      </h2>
      <p class="mx-auto mt-4 max-w-md text-base text-zinc-500">
        I'd love to hear your idea — check out how commissions work and let's
        get started.
      </p>
      <div class="mt-8">
        <UiPrimaryButton label="View Commission Process" href="/commissions" />
      </div>
    </div>
  </section>
</template>
