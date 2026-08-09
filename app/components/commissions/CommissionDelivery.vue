<script lang="ts" setup>
const delivery = [
  "PNG format",
  "JPEG format",
  "2K and 4K resolution",
  "350 DPI quality",
  "Web-friendly versions",
];
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">What You Receive</h2>
      <p class="mt-3 text-neutral-500">
        Every commission is delivered ready to use, however you need it.
      </p>

      <div
        class="rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur sm:p-10"
      >
        <ul class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="item in delivery"
            :key="item"
            class="flex items-center gap-3 rounded-2xl bg-white/50 p-4"
          >
            <span
              class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-500"
            >
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-white">
                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
              </svg>
            </span>
            <span class="font-medium text-zinc-800">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
