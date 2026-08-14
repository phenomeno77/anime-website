<script setup lang="ts">
useSeoMeta({
  title: "Commissions",
  description:
    "Commission custom anime art from InQu — portraits and character reference sheets from $75. Pricing, process, usage rights, and FAQ.",
});
</script>

<template>
  <UiAmbientBackground>
    <CommissionsCommissionHero />

    <UiSectionBackground tone="raised" divider>
      <CommissionsCommissionTypes />
    </UiSectionBackground>

    <UiSectionBackground tone="base" divider>
      <CommissionsCommissionAddons />
    </UiSectionBackground>

    <UiSectionBackground tone="raised" divider>
      <CommissionsCommissionProcess />
    </UiSectionBackground>

    <UiSectionBackground tone="base" divider>
      <CommissionsCommissionDelivery />
    </UiSectionBackground>

    <UiSectionBackground tone="raised" divider>
      <CommissionsCommissionRights />
    </UiSectionBackground>

    <UiSectionBackground tone="base" divider>
      <CommissionsCommissionFAQ />
    </UiSectionBackground>

    <CommissionsCommissionCTA />
  </UiAmbientBackground>
</template>
