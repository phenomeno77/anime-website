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
        exampleImage: "/commissions/examples/bust-up.webp",
      },
      {
        name: "Half Body",
        price: "$110 - $150",
        time: "2-3 weeks",
        exampleImage: "/commissions/examples/half-body.webp",
      },
      {
        name: "Full Body",
        price: "$150 - $200",
        time: "3-4 weeks",
        exampleImage: "/commissions/examples/full-body.webp",
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
        exampleImage: "/commissions/examples/ref-sheet-bust-up.webp",
      },
      {
        name: "1 Bust Up + 1 Half Body",
        price: "$270 - $400",
        time: "5-6 weeks",
        exampleImage: "/commissions/examples/ref-sheet-mixed.webp",
      },
    ],
  },
];

const exampleDialogOpen = ref(false);
const activeExample = ref<{ name: string; exampleImage: string } | null>(null);

function openExample(option: { name: string; exampleImage?: string }) {
  if (!option.exampleImage) return;
  activeExample.value = {
    name: option.name,
    exampleImage: option.exampleImage,
  };
  exampleDialogOpen.value = true;
}

const dialogPt = {
  root: {
    class:
      "rounded-[2rem] overflow-hidden shadow-2xl bg-white w-[92vw] max-w-2xl",
  },
  mask: { class: "bg-zinc-900/70 backdrop-blur-sm" },
  header: { class: "hidden" },
  content: { class: "p-0" },
};
</script>

<template>
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Available Commissions</h2>

      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <article v-for="type in commissionTypes" :key="type.title">
          <h3 class="text-2xl font-semibold px-8">
            {{ type.title }}
          </h3>

          <p class="mt-4 px-8 text-neutral-600">
            {{ type.description }}
          </p>

          <div class="mt-8 space-y-4 px-8">
            <div
              v-for="option in type.options"
              :key="option.name"
              class="flex justify-between rounded-2xl bg-white/50 p-5"
            >
              <div>
                <p class="font-medium">
                  {{ option.name }}
                  <button
                    v-if="option.exampleImage"
                    type="button"
                    class="ml-1 text-sm font-normal text-violet-600 underline underline-offset-2 transition hover:text-violet-700 cursor-pointer"
                    @click="openExample(option)"
                  >
                    (see example)
                  </button>
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

    <!-- Example image dialog -->
    <Dialog
      v-model:visible="exampleDialogOpen"
      modal
      dismissable-mask
      unstyled
      :pt="dialogPt"
    >
      <div v-if="activeExample" class="relative">
        <button
          type="button"
          aria-label="Close"
          class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition hover:bg-white"
          @click="exampleDialogOpen = false"
        >
          ✕
        </button>

        <img
          :src="activeExample.exampleImage"
          :alt="`Example of ${activeExample.name}`"
          class="max-h-[75vh] w-full bg-zinc-50 object-contain"
        />

        <div class="p-5">
          <h3 class="text-lg font-bold text-zinc-900">
            {{ activeExample.name }} — Example
          </h3>
        </div>
      </div>
    </Dialog>
  </section>
</template>
