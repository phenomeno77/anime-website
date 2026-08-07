<template>
  <section
    class="
      relative
      isolate
      overflow-hidden
    "
  >

    <!-- Ambient background -->
    <div
      class="
        pointer-events-none
        absolute
        inset-0
        -z-10
        overflow-hidden
      "
      aria-hidden="true"
    >

      <div
        class="
          absolute
          left-[-200px]
          top-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-300/30
          blur-3xl
        "
      />

      <div
        class="
          absolute
          right-[-200px]
          top-[300px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-300/30
          blur-3xl
        "
      />

      <div
        class="
          absolute
          bottom-[-150px]
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-sky-300/20
          blur-3xl
        "
      />

    </div>


    <!-- Content -->
    <div class="relative">
      <slot />
    </div>

  </section>
</template>