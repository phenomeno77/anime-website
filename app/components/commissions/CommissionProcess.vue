<script lang="ts" setup>
const processSteps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Send your idea, references, character details, and any important requirements.",
  },
  {
    number: "02",
    title: "Confirmation",
    description:
      "The final price and estimated timeline are discussed before starting.",
  },
  {
    number: "03",
    title: "Sketch Approval",
    description:
      "The illustration begins after sketch approval. Up to 3 major revisions are included.",
  },
  {
    number: "04",
    title: "Final Illustration",
    description: "The artwork is completed and prepared for delivery.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "You receive PNG, JPEG, and web-friendly versions through Google Drive.",
  },
];

const willDraw = [
  "OCs, fanart & LGBTQ+ characters",
  "Simple armor / sci-fi elements",
  "Humanoids & nekomimi",
  "Blood / light gore",
  "Artistic nudity & light NSFW",
];

const wontDraw = [
  "Background-focused pieces",
  "Full mecha",
  "Full-on furry",
  "Extreme gore / body horror",
  "Anything offensive",
];
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Commission Process</h2>
      <p class="mt-3 text-neutral-500">
        From first message to finished file — here's what to expect.
      </p>

      <div
        class="rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur sm:p-10"
      >
        <!-- Steps -->
        <div class="relative">
          <!-- Continuous connecting line, behind all badges -->
          <div
            class="absolute left-[22px] top-[22px] bottom-[22px] w-px bg-gradient-to-b from-pink-300 via-zinc-300 to-transparent"
            aria-hidden="true"
          />

          <div
            v-for="(step, index) in processSteps"
            :key="step.number"
            class="relative flex gap-6 pb-10 last:pb-0"
          >
            <!-- Badge -->
            <div
              class="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-violet-500 bg-white text-sm font-bold text-violet-600"
            >
              {{ step.number }}
            </div>

            <!-- Content -->
            <div class="pt-2">
              <h3 class="text-lg font-semibold text-zinc-900">
                {{ step.title }}
              </h3>
              <p class="mt-1.5 text-neutral-600">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Will Draw / Won't Draw -->
        <div class="mt-12 border-t border-white/60 pt-10">
          <h3 class="text-2xl font-semibold text-zinc-900">What I Draw</h3>
          <p class="mt-2 text-neutral-600">
            A quick reference before you send your idea — saves us both a round
            trip.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <!-- Will draw -->
            <div
              class="rounded-2xl border border-violet-100 bg-violet-50/50 p-6"
            >
              <span
                class="inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-violet-500">
                  <path
                    d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                  />
                </svg>
                Will draw
              </span>

              <ul class="mt-4 space-y-2.5">
                <li
                  v-for="item in willDraw"
                  :key="item"
                  class="flex items-start gap-2 text-sm text-neutral-700"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Won't draw -->
            <div class="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6">
              <span
                class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-zinc-400">
                  <path
                    d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z"
                  />
                </svg>
                Won't draw
              </span>

              <ul class="mt-4 space-y-2.5">
                <li
                  v-for="item in wontDraw"
                  :key="item"
                  class="flex items-start gap-2 text-sm text-neutral-500"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-6 text-sm text-neutral-500">
            Payment (PayPal invoice) is due after sketch approval. Full terms in
            the
            <NuxtLink
              to="/terms-of-service"
              class="font-medium text-violet-600 underline underline-offset-2"
            >
              Terms of Service </NuxtLink
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
