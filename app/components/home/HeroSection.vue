<script setup lang="ts"></script>

<template>
  <section class="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
    <div class="container-custom">
      <div class="grid items-center gap-8 lg:gap-16 md:grid-cols-2">
        <!-- LEFT SIDE -->

        <!-- LEFT CONTENT -->
        <div class="text-center lg:text-left">
          <!-- Eyebrow -->
          <div
            class="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600"
          >
            <span class="h-2 w-2 rounded-full bg-violet-500" />
            Anime Illustrator & Webtoon Creator
          </div>

          <!-- Heading -->
          <h1
            class="mx-auto max-w-md text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:mx-0 lg:max-w-xl lg:text-7xl"
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
            class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <UiPrimaryButton label="Start Commission" />

            <button
              class="cursor-pointer rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition duration-300 hover:-translate-y-1 hover:bg-zinc-50 active:translate-y-0"
            >
              View Portfolio
            </button>
          </div>

          <!-- Trust indicators -->
          <div
            class="mt-12 flex flex-wrap justify-center gap-8 text-center lg:justify-start lg:text-left"
          >
            <div>
              <strong class="block text-lg font-bold text-zinc-900">
                ◉ 100+
              </strong>

              <span class="text-sm text-zinc-500"> Custom artworks </span>
            </div>

            <div>
              <strong class="block text-lg font-bold text-zinc-900">
                ◉ Original
              </strong>

              <span class="text-sm text-zinc-500"> Webtoon stories </span>
            </div>

            <div>
              <strong class="block text-lg font-bold text-zinc-900">
                ◉ High Quality
              </strong>

              <span class="text-sm text-zinc-500"> Digital art </span>
            </div>
          </div>

          <div
            class="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a
              href="https://www.instagram.com/"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              Instagram
            </a>

            <a
              href="https://www.webtoon.com/"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              Webtoon
            </a>

            <a
              href="https://www.tiktok.com/"
              class="text-zinc-500 transition hover:text-violet-500"
            >
              TikTok
            </a>
          </div>
        </div>

        <!-- RIGHT SIDE -->

        <div class="relative flex justify-center">
          <!-- decorative glow -->

          <div
            class="absolute h-80 w-80 rounded-full bg-violet-300/30 blur-3xl lg:h-[450px] lg:w-[450px]"
          />

          <!-- artwork frame -->

          <!-- artwork frame -->

          <div
            class="group relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[3rem] border border-white/70 bg-gradient-to-br from-violet-100 via-white to-pink-100 shadow-xl"
          >
            <!-- inner border -->

            <div
              class="absolute inset-4 rounded-[2.5rem] border border-white/80"
            />

            <!-- decorative glow -->

            <div
              class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/30 blur-3xl"
            />

            <!-- placeholder content -->

            <div
              class="relative flex h-full flex-col items-center justify-center gap-5 text-center"
            >
              <!-- icon -->

              <div
                class="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-lg"
              >
                ✨
              </div>

              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500"
                >
                  Featured Artwork
                </p>

                <p class="mt-2 text-sm text-zinc-500">Illustration preview</p>
              </div>
            </div>

            <!-- corner decorations -->

            <div
              class="absolute left-8 top-8 h-3 w-3 rounded-full bg-violet-400"
            />

            <div
              class="absolute bottom-8 right-8 h-3 w-3 rounded-full bg-pink-400"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
