import { useIntersectionObserver } from "@vueuse/core"

export const useReveal = () => {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  if (import.meta.client) {
    useIntersectionObserver(
      target,
      ([entry]) => {
        if (!entry) return

        const ratio = entry.intersectionRatio

        // Reveal after 20% visible
        if (!isVisible.value && ratio > 0.2) {
          isVisible.value = true
        }

        // Hide only after almost completely gone
        if (isVisible.value && ratio < 0.05) {
          isVisible.value = false
        }
      },
      {
        threshold: [0, 0.05, 0.2],
      }
    )
  }

  return {
    target,
    isVisible,
  }
}