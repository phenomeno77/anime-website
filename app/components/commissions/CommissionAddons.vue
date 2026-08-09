<script lang="ts" setup>
const addons = [
  { label: "Additional props / complexity", price: "+$15 - $200" },
  { label: "Additional props, chibis, expressions", price: "+$5 - $60" },
  { label: "Couple illustrations", price: "+80% of initial price" },
  { label: "Custom shots and backgrounds", price: "Discussed per request" },
  { label: "Rush delivery", price: "+$50 - $100" },
  { label: "NSFW requests", price: "Depends on complexity" },
  { label: "Custom orders", price: "Available upon request" },
];
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Additional Options</h2>
      <p class="mt-3 text-neutral-500">
        Extras and adjustments that can be added to any commission.
      </p>

      <div
        class="rounded-3xl border border-white/40 bg-white/40 p-2 backdrop-blur"
      >
        <div
          v-for="(item, index) in addons"
          :key="item.label"
          class="flex items-center justify-between gap-4 rounded-2xl px-6 py-4"
          :class="index % 2 === 0 ? 'bg-white/50' : ''"
        >
          <div class="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4 flex-shrink-0 fill-violet-500"
            >
              <path
                d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"
              />
            </svg>
            <span class="text-neutral-700">{{ item.label }}</span>
          </div>

          <span class="whitespace-nowrap font-medium text-zinc-900">{{
            item.price
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
