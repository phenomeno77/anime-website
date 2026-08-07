<script setup lang="ts">
const flipped = ref(false);
const isMobile = ref(false);

let mql: MediaQueryList | null = null;

function updateIsMobile() {
  if (mql) isMobile.value = mql.matches;
}

function toggleFlip() {
  if (isMobile.value) {
    flipped.value = !flipped.value;
  }
}

const reveal = useReveal();

onMounted(() => {
  mql = window.matchMedia("(max-width: 767px)");
  updateIsMobile();
  mql.addEventListener("change", updateIsMobile);
});

onUnmounted(() => {
  mql?.removeEventListener("change", updateIsMobile);
});

const stats = [
  {
    icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2Z",
    value: "100+",
    label: "Custom artworks",
  },
  {
    icon: "M12 3c-3 2-6 3-9 3v6c0 5 3.5 8 9 9 5.5-1 9-4 9-9V6c-3 0-6-1-9-3Z",
    value: "Original",
    label: "Webtoon stories",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5Zm0 8-8.5-4.25v6.5L12 17l8.5-4.75v-6.5L12 10Zm-8.5 3.75V19L12 23l8.5-4v-5.25L12 18 3.5 13.75Z",
    value: "High Quality",
    label: "Digital art",
  },
];
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
    <!-- Background layer — scoped to Hero -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-3xl"
      />
      <div
        class="absolute right-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-pink-300/30 blur-3xl"
      />
      <div
        class="absolute bottom-[-150px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl"
      />
    </div>

    <div class="container-custom max-w-7xl">
      <div
        :ref="reveal.target"
        class="grid items-center gap-8 md:grid-cols-2 lg:gap-16"
        :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
      >
        <!-- LEFT CONTENT -->
        <div class="animate-up text-center lg:text-left">
          <!-- Heading -->
          <h1
            class="mx-auto max-w-md text-4xl font-bold leading-tight tracking-tight text-violet-400 sm:text-5xl lg:mx-0 lg:max-w-xl lg:text-7xl"
          >
            Your Characters
            <span
              class="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
            >
              Beautifully
            </span>
            Illustrated.
          </h1>

          <!-- Description -->
          <p
            class="mx-auto mt-8 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Bringing your ideas to life through custom anime portraits, original
            characters and webtoon illustrations made with passion and attention
            to detail.
          </p>

          <!-- Buttons -->
          <div
            class="animate-scale mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <UiPrimaryButton label="Start Commission" href="/contact" />

            <NuxtLink
              to="/portfolio"
              class="rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition duration-300 hover:-translate-y-1 hover:bg-zinc-50 active:translate-y-0"
            >
              View Portfolio
            </NuxtLink>
          </div>

          <!-- Trust indicators -->
          <div
            class="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 lg:justify-start"
          >
            <template v-for="(stat, index) in stats" :key="stat.value">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 shadow-md shadow-violet-500/25"
                >
                  <svg viewBox="0 0 24 24" class="h-5 w-5 fill-white">
                    <path :d="stat.icon" />
                  </svg>
                </div>
                <div class="text-left">
                  <strong
                    class="block bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-lg font-bold text-transparent"
                  >
                    {{ stat.value }}
                  </strong>
                  <span class="text-sm text-zinc-500">{{ stat.label }}</span>
                </div>
              </div>
              <div
                v-if="index < stats.length - 1"
                class="mx-2 hidden h-10 w-px bg-zinc-200 sm:block"
                aria-hidden="true"
              />
            </template>
          </div>

          <!-- Eyebrow + Social links -->
          <div
            class="mt-10 flex flex-col items-center gap-4 min-[470px]:flex-row min-[470px]:justify-center lg:justify-start"
          >
            <!-- Eyebrow -->
            <div
              class="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 p-[1px]"
            >
              <div
                class="inline-flex h-8 items-center gap-2 rounded-full bg-violet-50 px-4 text-sm font-medium text-violet-600"
              >
                <span class="relative flex h-2 w-2">
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75"
                  />
                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-violet-500"
                  />
                </span>
                Anime Illustrator & Webtoon Creator
              </div>
            </div>

            <!-- Divider between eyebrow and icons -->
            <div
              class="hidden h-6 w-px bg-zinc-200 min-[470px]:block"
              aria-hidden="true"
            />

            <!-- Social icons row -->
            <div class="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="h-8 w-8 transition duration-300 hover:-translate-y-1"
              >
                <UiIconsIconInstagram class="h-full w-full" />
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                class="h-8 w-8 transition duration-300 hover:-translate-y-1"
              >
                <UiIconsIconTiktok class="h-full w-full" />
              </a>

              <a
                href="https://www.webtoon.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WEBTOON"
                class="h-8 w-8 transition duration-300 hover:-translate-y-1"
              >
                <UiIconsIconWebtoon class="h-full w-full" />
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE - Artwork -->
        <div
          class="animate-drop relative flex h-full items-center justify-center"
        >
          <div class="relative w-full max-w-xl">
            <!-- Back card — static, desktop only, pure depth cue -->
            <div
              class="pointer-events-none absolute -right-6 -bottom-6 hidden aspect-[4/5] w-[85%] -rotate-6 lg:block"
              aria-hidden="true"
            >
              <NuxtImg
                src="/hero/hero-section-hidden-card.webp"
                alt=""
                class="h-full w-full rounded-[2rem] object-cover opacity-40 shadow-lg blur-[1px]"
                width="800"
                height="1000"
                format="webp"
                quality="70"
                loading="lazy"
              />
            </div>

            <!-- Front card — flip/tilt artwork -->
            <div
              class="group relative z-10 aspect-[4/5] w-full"
              role="button"
              tabindex="0"
              aria-label="Flip artwork"
              @click="toggleFlip"
              @keydown.enter.space.prevent="toggleFlip"
            >
              <!-- Desktop -->
              <div
                class="hidden h-full w-full transition duration-700 md:block md:group-hover:[transform:perspective(1000px)_rotateY(8deg)_rotateX(4deg)]"
              >
                <NuxtImg
                  src="/hero/hero-section.webp"
                  alt="Featured artwork"
                  class="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-xl transition duration-700 md:group-hover:scale-105 md:group-hover:rotate-2"
                  width="800"
                  height="1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 576px"
                  format="webp"
                  quality="85"
                  loading="eager"
                  fetchpriority="high"
                  preload
                />
                <NuxtImg
                  src="/hero/hero-section-hover.webp"
                  alt="Featured artwork hover"
                  class="absolute inset-0 h-full w-full rounded-[2rem] object-cover opacity-0 shadow-xl transition duration-700 md:group-hover:opacity-100 md:group-hover:scale-105 md:group-hover:-rotate-2"
                  width="800"
                  height="1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 576px"
                  format="webp"
                  quality="85"
                  loading="lazy"
                />
              </div>

              <!-- Mobile (tap to flip) -->
              <div
                class="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl md:hidden"
                style="perspective: 1000px"
              >
                <div
                  class="relative h-full w-full transition-transform duration-700"
                  :class="flipped ? '[transform:rotateY(180deg)]' : ''"
                  style="transform-style: preserve-3d"
                >
                  <NuxtImg
                    src="/hero/hero-section.webp"
                    alt="Featured artwork"
                    class="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                    width="800"
                    height="1000"
                    format="webp"
                    quality="85"
                    loading="eager"
                    style="backface-visibility: hidden"
                  />
                  <NuxtImg
                    src="/hero/hero-section-hover.webp"
                    alt="Featured artwork hover"
                    class="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                    width="800"
                    height="1000"
                    format="webp"
                    quality="85"
                    loading="lazy"
                    style="
                      backface-visibility: hidden;
                      transform: rotateY(180deg);
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
