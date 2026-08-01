<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  message: "",
  website: "", // Honeypot field (hidden from real users)
});

const descriptionMaxLength = 4000;

// Capture the timestamp when the component mounts
const formStartTime = ref(Date.now());

const isSubmitting = ref(false);
const statusMessage = ref("");
const isError = ref(false);

const startCommission = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    statusMessage.value = "Please complete all fields.";
    isError.value = true;
    return;
  }

  isSubmitting.value = true;
  statusMessage.value = "";
  isError.value = false;

  try {
    await $fetch("/api/commission", {
      method: "POST",
      body: {
        ...form.value,
        formStartTime: formStartTime.value,
      },
    });

    statusMessage.value = "Thank you! Your request has been sent.";

    // Reset form and timer
    form.value = { name: "", email: "", message: "", website: "" };
    formStartTime.value = Date.now();
  } catch (err: any) {
    isError.value = true;

    // Handle 429 Rate Limit Error specifically
    if (err.statusCode === 429 || err.response?.status === 429) {
      statusMessage.value =
        err.data?.message ||
        "You've already submitted a request! Please wait 5 minutes before retrying.";
    } else {
      statusMessage.value =
        err.data?.statusMessage || "Something went wrong. Please try again.";
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<template>
  <div class="flex w-full justify-center px-4 md:px-16 my-auto">
    <Card class="w-full !bg-[#15151A] !border !border-[#27272A] shadow-2xl">
      <template #title>
        <div
          class="text-center text-3xl font-bold text-[var(--manga-gold)] drop-shadow-[0_0_15px_rgba(212,160,23,0.2)]"
        >
          Ready to order your commission?
        </div>
      </template>

      <template #content>
        <form @submit.prevent="startCommission" class="flex flex-col gap-6">
          <div class="hidden" aria-hidden="true">
            <input
              v-model="form.website"
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-slate-300"> Name </label>

            <InputText
              v-model="form.name"
              placeholder="Your name"
              :disabled="isSubmitting"
              required
              class="!bg-[#101014] !border-[#27272A]"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-slate-300"> Email </label>

            <InputText
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              :disabled="isSubmitting"
              required
              class="!bg-[#101014] !border-[#27272A]"
            />
          </div>

          <div class="flex flex-col gap-1">
            <Textarea
              v-model="form.message"
              rows="5"
              auto-resize
              placeholder="Describe your character, design, or idea..."
              :disabled="isSubmitting"
              required
              :maxlength="descriptionMaxLength"
              class="!bg-[#101014] !border-[#27272A]"
            />

            <div class="text-right text-sm text-slate-500">
              {{ form.message.length }}/{{ descriptionMaxLength }}
            </div>
          </div>

          <div
            v-if="statusMessage"
            class="text-sm font-medium text-center"
            :class="isError ? 'text-red-400' : 'text-emerald-400'"
          >
            {{ statusMessage }}
          </div>

          <div
            class="pt-4 justify-end flex max-[648px]:w-full max-[648px]:justify-center"
          >
            <Button
              type="submit"
              label="Start a Commission"
              size="large"
              class="max-[648px]:w-full !bg-[var(--manga-accent)] !border-[var(--manga-accent)] hover:!bg-[#a30f35]"
              :loading="isSubmitting"
            />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>
