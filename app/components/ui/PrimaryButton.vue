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
  group
  relative
  inline-flex
  cursor-pointer
  items-center
  justify-center
  gap-2
  overflow-hidden
  rounded-full
  bg-gradient-to-br
  from-accent-2
  to-accent
  px-7
  py-3.5
  text-sm
  font-semibold
  text-white
  shadow-[0_8px_30px_-8px_var(--color-glow)]
  transition-all
  duration-300
  ease-smooth
  hover:-translate-y-0.5
  hover:shadow-[0_14px_40px_-8px_var(--color-glow)]
  active:translate-y-0
  disabled:cursor-not-allowed
  disabled:opacity-60
  disabled:hover:translate-y-0
  disabled:hover:shadow-[0_8px_30px_-8px_var(--color-glow)]
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
    <span class="relative z-10">{{ label }}</span>
  </a>

  <NuxtLink v-else-if="href" :to="href" :class="buttonClasses">
    <span class="relative z-10">{{ label }}</span>
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
  >
    <svg
      v-if="loading"
      class="relative z-10 h-4 w-4 animate-spin"
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
    <span class="relative z-10">{{ loading ? loadingLabel : label }}</span>
  </button>
</template>
