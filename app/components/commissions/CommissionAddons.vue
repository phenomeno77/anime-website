<script lang="ts" setup>
const addons = [
  { label: "Additional props / complexity", price: "+€15 - €200" },
  { label: "Additional props, chibis, expressions", price: "+€5 - €60" },
  { label: "Couple illustrations", price: "+80% of initial price" },
  { label: "Custom shots and backgrounds", price: "Discussed per request" },
  { label: "Rush delivery", price: "+€50 - €100" },
  { label: "NSFW requests", price: "Depends on complexity" },
  { label: "Custom orders", price: "Available upon request" },
];
</script>
<template>
  <section class="relative">
    <div class="container-custom py-12">
      <h2 class="font-display text-3xl font-bold tracking-tight text-text">
        Additional Options
      </h2>

      <p class="mt-3 text-muted">
        Extras and adjustments that can be added to any commission.
      </p>

      <div class="mt-8 rounded-3xl border border-border bg-surface p-2">
        <div
          v-for="(item, index) in addons"
          :key="item.label"
          class="flex flex-col gap-2 rounded-2xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
          :class="index % 2 === 0 ? 'bg-white/[0.03]' : ''"
        >
          <div class="flex min-w-0 items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              class="mt-1 h-4 w-4 flex-shrink-0 fill-accent-2"
              aria-hidden="true"
            >
              <path
                d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"
              />
            </svg>

            <span class="min-w-0 break-words text-sm text-muted sm:text-base">
              {{ item.label }}
            </span>
          </div>

          <span
            class="pl-7 text-sm font-medium text-text sm:whitespace-nowrap sm:pl-0 sm:text-base"
          >
            {{ item.price }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
