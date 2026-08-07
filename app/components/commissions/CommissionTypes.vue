<script lang="ts" setup>
const commissionTypes = [
  {
    title: "Portrait Illustration",
    description:
      "Character-focused illustrations with a basic textured background or a flat color background.",

    options: [
      {
        name: "Bust Up",
        price: "$75 - $110",
        time: "2-3 weeks",
      },
      {
        name: "Half Body",
        price: "$110 - $150",
        time: "2-3 weeks",
      },
      {
        name: "Full Body",
        price: "$150 - $200",
        time: "3-4 weeks",
      },
    ],
  },

  {
    title: "Character Reference Sheet",

    description:
      "A complete character reference sheet with up to 3 illustrations with a basic textured background or flat color background.",

    options: [
      {
        name: "2 Bust Up Illustrations",
        price: "$200 - $300",
        time: "5-6 weeks",
      },
      {
        name: "1 Bust Up + 1 Half Body",
        price: "$270 - $400",
        time: "5-6 weeks",
      },
    ],
  },
];
</script>

<template>
  <section class="py-24">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Available Commissions</h2>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <article
          v-for="type in commissionTypes"
          :key="type.title"
          class="rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur"
        >
          <h3 class="text-2xl font-semibold">
            {{ type.title }}
          </h3>

          <p class="mt-4 text-neutral-600">
            {{ type.description }}
          </p>

          <div class="mt-8 space-y-4">
            <div
              v-for="option in type.options"
              :key="option.name"
              class="flex justify-between rounded-2xl bg-white/50 p-5"
            >
              <div>
                <p class="font-medium">
                  {{ option.name }}
                </p>

                <p class="text-sm text-neutral-500">
                  {{ option.time }}
                </p>
              </div>

              <p class="font-medium">
                {{ option.price }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style></style>
