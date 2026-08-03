export const useReveal = () => {
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  useIntersectionObserver(
    target,
    ([entry]) => {
      isVisible.value = entry?.isIntersecting ?? false;
    },
    {
      threshold: 0.1,
    },
  );

  return {
    target,
    isVisible,
  };
};
