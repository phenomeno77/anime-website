export const useNavigationHeight = () => {
  const height = ref(0);

  const updateHeight = () => {
    const nav = document.getElementById("navigation-bar");

    if (nav) {
      height.value = nav.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--navigation-height",
        `${height.value}px`,
      );
    }
  };

  onMounted(() => {
    updateHeight();

    window.addEventListener("resize", updateHeight);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateHeight);
  });

  return {
    height,
  };
};
