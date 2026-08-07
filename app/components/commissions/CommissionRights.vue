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

    notAllowed: [
      "Copyright transfer",
      "Redistribution",
      "Reselling artwork",
    ],

    note:
      "Commercial commissions require an additional licensing fee of +100% - 200% depending on usage.",
  },
]
</script>

<template>
  <section class="py-24">

    <div class="container-custom grid gap-8 lg:grid-cols-2">


      <article
        v-for="right in rights"
        :key="right.title"
        class="rounded-3xl bg-white/40 p-8"
      >

        <h3 class="text-2xl font-semibold">
          {{ right.title }}
        </h3>


        <h4 class="mt-6 font-medium">
          Allowed
        </h4>


        <ul class="mt-3 space-y-2">

          <li
            v-for="item in right.allowed"
            :key="item"
          >
            ✓ {{ item }}
          </li>

        </ul>



        <h4 class="mt-6 font-medium">
          Not Allowed
        </h4>


        <ul class="mt-3 space-y-2">

          <li
            v-for="item in right.notAllowed"
            :key="item"
          >
            ✕ {{ item }}
          </li>

        </ul>


        <p
          v-if="right.note"
          class="mt-6 text-sm text-neutral-600"
        >
          {{ right.note }}
        </p>


      </article>


    </div>


  </section>

</template>


<style>

</style>