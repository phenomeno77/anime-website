<script lang="ts" setup>
const faq = [
  {
    question: "Are the listed prices final?",

    answer:
      "Prices may change depending on complexity, additional details, and project requirements.",
  },

  {
    question: "How many revisions are included?",

    answer:
      "A maximum of 3 major revisions are included unless changes are caused by the artist. Additional revisions may require extra fees.",
  },

  {
    question: "Can I request a custom commission?",

    answer: "Yes. Custom orders are available depending on the project.",
  },

  {
    question: "How long does delivery take?",

    answer:
      "Turnaround depends on the commission type and starts after sketch approval.",
  },
];
</script>

<template>
  <section class="py-24">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Frequently Asked Questions</h2>

      <div class="mt-10 space-y-8">
        <article v-for="item in faq" :key="item.question">
          <h3 class="font-semibold">
            {{ item.question }}
          </h3>

          <p class="mt-2 text-neutral-600">
            {{ item.answer }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style></style>
