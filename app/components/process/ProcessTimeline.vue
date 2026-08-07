<script setup lang="ts">
import ProcessStep from "./ProcessStep.vue";

defineProps<{
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}>();
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <ProcessStep
      v-for="(step, index) in steps"
      :key="step.number"
      v-bind="step"
      :is-last="index === steps.length - 1"
    />
  </div>
</template>
