<script setup lang="ts">
const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell me about your character, references, desired pose, mood, and any custom requests.",
  },
  {
    number: "02",
    title: "Sketch & Approval",
    description:
      "Receive an initial sketch with up to three major revisions included. Rendering begins once the sketch is approved.",
  },
  {
    number: "03",
    title: "Painting & Details",
    description:
      "Your illustration is carefully rendered with attention to colors, lighting, textures, and every finishing detail.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive PNG and JPEG files in both 2K and 4K resolution, along with web-friendly versions via Google Drive.",
  },
];

const infoCards = [
  {
    title: "Pricing",
    value: "From €75",
    description:
      "Portraits, character sheets, and custom commissions are available.",
  },
  {
    title: "Turnaround",
    value: "2–6 Weeks",
    description:
      "Delivery depends on commission type and begins after sketch approval.",
  },
  {
    title: "Custom Orders",
    value: "Available",
    description:
      "Need commercial work, a character sheet, or something unique? Let's discuss it.",
  },
];

const reveal = useReveal();
</script>

<template>
  <section class="relative">
    <div
      class="container-custom py-20 lg:py-32"
      :ref="reveal.target"
      :class="[reveal.isVisible.value ? 'show-element' : 'hide-element']"
    >
      <UiSectionTitle
        eyebrow="Commission Process"
        title="A clear, collaborative experience from start to finish."
        description="Every commission is handled with care, clear communication, and thoughtful collaboration so you always know what comes next."
        class="animate-drop"
      />

      <div class="mt-20 animate-up">
        <ProcessTimeline :steps="processSteps" />
      </div>

      <div class="mt-20 grid animate-scale gap-6 md:grid-cols-3">
        <ProcessInfoCard
          v-for="card in infoCards"
          :key="card.title"
          v-bind="card"
        />
      </div>

      <div class="mt-16 flex justify-center">
        <UiPrimaryButton label="View Commission Details" href="/commissions" />
      </div>
    </div>
  </section>
</template>
