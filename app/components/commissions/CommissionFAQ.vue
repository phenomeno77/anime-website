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
  <section class="relative">
    <div class="container-custom py-12">
      <h2 class="font-display text-3xl font-bold tracking-tight text-text">
        Frequently Asked Questions
      </h2>
      <p class="mt-3 text-muted">
        Answers to the most common questions before you commission.
      </p>

      <Accordion class="faq-accordion mt-8">
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
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
  background: var(--color-surface);
}
.faq-accordion :deep(.p-accordionheader) {
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  color: var(--color-text);
  background: transparent;
}
.faq-accordion :deep(.p-accordionheader:hover) {
  background: rgba(255, 255, 255, 0.03);
}
.faq-accordion :deep(.p-accordionheader-toggle-icon) {
  color: var(--color-accent-2);
}
.faq-accordion :deep(.p-accordioncontent-content) {
  padding: 0 1.5rem 1.25rem;
  color: var(--color-muted);
  background: transparent;
}
</style>
