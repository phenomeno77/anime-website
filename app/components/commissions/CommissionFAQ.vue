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
  <section class="py-12">
    <div class="container-custom">
      <h2 class="text-3xl font-semibold">Frequently Asked Questions</h2>
      <p class="mt-3 text-neutral-500">
        Answers to the most common questions before you commission.
      </p>

      <Accordion class="faq-accordion mt-4">
        <AccordionPanel
          v-for="(item, index) in faq"
          :key="item.question"
          :value="index"
        >
          <AccordionHeader>{{ item.question }}</AccordionHeader>
          <AccordionContent>
            <p>{{ item.answer }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>

<style scoped>
.faq-accordion :deep(.p-accordionpanel) {
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.faq-accordion :deep(.p-accordionheader) {
  font-weight: 600;
  padding: 1.25rem 1.5rem;
}

.faq-accordion :deep(.p-accordioncontent-content) {
  padding: 0 1.5rem 1.25rem;
}
</style>
