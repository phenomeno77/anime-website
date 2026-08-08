<script lang="ts" setup>
const addons = [
  "Additional props / complexity: +$15 - $200",
  "Additional props, chibis, expressions: +$5 - $60",
  "Couple illustrations: +80% of initial price",
  "Custom shots and backgrounds: discussed per request",
  "Rush delivery: +$50 - $100",
  "NSFW requests: additional fees depending on complexity",
  "Custom orders are available upon request",
];
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Additional Options</h2>

      <ul class="mt-8 space-y-4">
        <li v-for="item in addons" :key="item" class="text-neutral-700">
          ✦ {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style></style>
