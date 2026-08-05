<script setup lang="ts">
defineProps<{
  href?: string;
  label: string;
}>();

const buttonClasses = `
  inline-flex
  cursor-pointer
  items-center
  justify-center
  rounded-xl
  bg-violet-500
  px-7
  py-3.5
  text-sm
  font-semibold
  text-white
  shadow-lg
  shadow-violet-500/20
  transition
  hover:-translate-y-1
  hover:bg-violet-600
  active:translate-y-0
`;
</script>
<template>
  <NuxtLink v-if="href" :to="href" :class="buttonClasses">
    {{ label }}
  </NuxtLink>

  <button v-else :class="buttonClasses">
    {{ label }}
  </button>
</template>
