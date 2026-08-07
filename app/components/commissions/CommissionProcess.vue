<script lang="ts" setup>
const processSteps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Send your idea, references, character details, and any important requirements."
  },

  {
    number: "02",
    title: "Confirmation",
    description:
      "The final price and estimated timeline are discussed before starting."
  },

  {
    number: "03",
    title: "Sketch Approval",
    description:
      "The illustration begins after sketch approval. Up to 3 major revisions are included."
  },

  {
    number: "04",
    title: "Final Illustration",
    description:
      "The artwork is completed and prepared for delivery."
  },

  {
    number: "05",
    title: "Delivery",
    description:
      "You receive PNG, JPEG, and web-friendly versions through Google Drive."
  },
]
</script>

<template>
  <section class="py-24">

    <div class="container-custom">


      <h2 class="text-3xl font-semibold">
        Commission Process
      </h2>


      <div class="mt-12 space-y-8">

        <div
          v-for="step in processSteps"
          :key="step.number"
          class="flex gap-6"
        >

          <span class="text-violet-500 font-medium">
            {{ step.number }}
          </span>


          <div>

            <h3 class="font-semibold">
              {{ step.title }}
            </h3>


            <p class="mt-2 text-neutral-600">
              {{ step.description }}
            </p>

          </div>

        </div>

      </div>


    </div>


  </section>
</template>



<style>

</style>