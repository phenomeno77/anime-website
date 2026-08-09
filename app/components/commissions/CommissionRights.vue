<script lang="ts" setup>
const rights = [
  {
    title: "Personal Use",
    allowed: [
      "Sharing the artwork online",
      "Using as icons, profile pictures, or personal covers",
    ],
    notAllowed: [
      "Commercial usage",
      "Reselling the artwork",
      "Claiming the artwork as your own",
      "Uploading artwork to AI generators",
    ],
  },
  {
    title: "Commercial Use",
    allowed: [
      "Merchandise",
      "Branding",
      "Streaming assets",
      "Website banners",
      "Promotional material",
    ],
    notAllowed: ["Copyright transfer", "Redistribution", "Reselling artwork"],
    note: "Commercial commissions require an additional licensing fee of +100% - 200% depending on usage.",
  },
];
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Usage Rights</h2>
      <p class="mt-3 text-neutral-500">
        What you can and can't do with your finished commission.
      </p>

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="right in rights"
          :key="right.title"
          class="rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur"
        >
          <h3 class="text-2xl font-semibold text-zinc-900">
            {{ right.title }}
          </h3>

          <h4
            class="mt-6 text-sm font-semibold uppercase tracking-wide text-violet-600"
          >
            Allowed
          </h4>
          <ul class="mt-3 space-y-2.5">
            <li
              v-for="item in right.allowed"
              :key="item"
              class="flex items-start gap-2 text-sm text-neutral-700"
            >
              <svg
                viewBox="0 0 24 24"
                class="mt-0.5 h-4 w-4 flex-shrink-0 fill-violet-500"
              >
                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <h4
            class="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-400"
          >
            Not Allowed
          </h4>
          <ul class="mt-3 space-y-2.5">
            <li
              v-for="item in right.notAllowed"
              :key="item"
              class="flex items-start gap-2 text-sm text-neutral-500"
            >
              <svg
                viewBox="0 0 24 24"
                class="mt-0.5 h-4 w-4 flex-shrink-0 fill-zinc-400"
              >
                <path
                  d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z"
                />
              </svg>
              {{ item }}
            </li>
          </ul>
          <p
            v-if="right.note"
            class="mt-6 rounded-xl bg-violet-50/70 p-4 text-sm text-violet-700"
          >
            {{ right.note }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
