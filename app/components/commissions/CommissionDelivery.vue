<script lang="ts" setup>
const delivery = [
  "PNG format",
  "JPEG format",
  "2K and 4K resolution",
  "350 DPI quality",
  "Web-friendly versions",
]
</script>


<template>
 <section class="py-24">

    <div class="container-custom">


      <h2 class="text-3xl font-semibold">
        What You Receive
      </h2>


      <ul class="mt-8 space-y-3">

        <li
          v-for="item in delivery"
          :key="item"
        >
          ✓ {{ item }}
        </li>

      </ul>


    </div>


  </section>
</template>


<style>

</style>