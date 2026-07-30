<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  message: "",
});

const startCommision = () => {
  // Handle form submission logic here
  console.log("Form submitted:", form.value);
};
</script>

<template>
  <Card class="bg-slate-900/90 border border-slate-800">
    <template #title>
      <div class="text-center text-3xl font-bold text-amber-400">
        Ready to order your commission?
      </div>
    </template>

    <template #content>
      <form class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-slate-300"> Name </label>

          <InputText v-model="form.name" placeholder="Your name" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-slate-300"> Email </label>

          <InputText
            v-model="form.email"
            type="email"
            placeholder="your@email.com"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-slate-300"> Commission idea </label>

          <Textarea
            v-model="form.message"
            rows="5"
            placeholder="Describe your character, design, or idea..."
          />
        </div>

        <div
          class="pt-4 justify-end flex max-[648px]:w-full max-[648px]:justify-center"
        >
          <Button
            label="Start a Commission"
            size="large"
            class="max-[648px]:w-full"
            @click="startCommision"
          />
        </div>
      </form>
    </template>
  </Card>
</template>
