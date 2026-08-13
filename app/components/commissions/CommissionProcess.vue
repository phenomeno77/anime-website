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
  <section class="relative">
    <div class="container-custom py-12">
      <h2 class="font-display text-3xl font-bold tracking-tight text-text">
        Commission Process
      </h2>
      <p class="mt-3 text-muted">
        From first message to finished file — here's what to expect.
      </p>

      <div class="mt-8 rounded-3xl border border-border bg-surface p-8 sm:p-10">
        <!-- Steps -->
        <div class="relative">
          <div
            class="absolute bottom-[22px] left-[22px] top-[22px] w-px bg-gradient-to-b from-accent-2 via-border to-transparent"
            aria-hidden="true"
          />

          <div
            v-for="step in processSteps"
            :key="step.number"
            class="relative flex gap-6 pb-10 last:pb-0"
          >
            <div
              class="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface font-display text-sm font-bold text-accent-2"
            >
              {{ step.number }}
            </div>

            <div class="pt-2">
              <h3
                class="font-display text-lg font-bold tracking-tight text-text"
              >
                {{ step.title }}
              </h3>
              <p class="mt-1.5 text-muted">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Will / Won't -->
        <div class="mt-12 border-t border-border pt-10">
          <h3 class="font-display text-2xl font-bold tracking-tight text-text">
            What I Draw
          </h3>
          <p class="mt-2 text-muted">
            A quick reference before you send your idea — saves us both a round
            trip.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <!-- Will draw -->
            <div
              class="rounded-2xl border border-accent/20 bg-accent/[0.06] p-6"
            >
              <span
                class="inline-flex items-center gap-2 text-sm font-bold text-accent-2"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-accent-2">
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
                  class="flex items-start gap-2 text-sm text-text/80"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-2"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Won't draw -->
            <div class="rounded-2xl border border-border bg-white/[0.02] p-6">
              <span
                class="inline-flex items-center gap-2 text-sm font-bold text-muted"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-muted">
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
                  class="flex items-start gap-2 text-sm text-muted"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted/50"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-6 text-sm text-muted">
            Payment (PayPal invoice) is due after sketch approval. Full terms in
            the
            <NuxtLink
              to="/terms-of-service"
              class="font-medium text-accent-2 underline underline-offset-2 hover:text-glow"
            >
              Terms of Service</NuxtLink
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
