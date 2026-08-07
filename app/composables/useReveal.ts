import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export const useReveal = () => {
  const target = ref<HTMLElement | null>(null);

  const isVisible = ref(false);

  if (import.meta.client) {
    useIntersectionObserver(
      target,

      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          isVisible.value = true;
        } else {
          isVisible.value = false;
        }
      },

      {
        threshold: 0.1,
      },
    );
  }

  return {
    target,
    isVisible,
  };
};
