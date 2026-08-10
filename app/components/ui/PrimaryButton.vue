<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string;
    label: string;
    isExternal?: boolean;
    loading?: boolean;
    loadingLabel?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    isExternal: false,
    loading: false,
    disabled: false,
    type: "button",
    loadingLabel: "Sending...",
  },
);

const buttonClasses = `
  inline-flex
  cursor-pointer
  items-center
  justify-center
  gap-2
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
  disabled:cursor-not-allowed
  disabled:opacity-60
  disabled:hover:translate-y-0
`;
</script>

<template>
  <a
    v-if="href && isExternal"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
  >
    {{ label }}
  </a>

  <NuxtLink v-else-if="href" :to="href" :class="buttonClasses">
    {{ label }}
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
  >
    <svg
      v-if="loading"
      class="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z"
      />
    </svg>
    {{ loading ? loadingLabel : label }}
  </button>
</template>
