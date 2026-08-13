<script setup lang="ts">
const commissionTypes = [
  { value: "bust-up", label: "Bust-Up" },
  { value: "half-body", label: "Half-Body" },
  { value: "full-body", label: "Full-Body" },
  { value: "character-sheet", label: "Character Sheet" },
  { value: "other", label: "Other" },
];

const licenseTypes = [
  { value: "personal", label: "Personal Use" },
  { value: "commercial", label: "Commercial Use", note: "+ extra fee" },
];

const priorityOptions = [
  { value: "yes", label: "Yes!", note: "+ extra fee" },
  { value: "no", label: "No~" },
];

const form = ref({
  name: "",
  email: "",
  message: "",
  commissionType: "",
  licenseType: "",
  priority: "",
  website: "", // Honeypot
});

// Per-field validation errors
const fieldErrors = ref({
  commissionType: "",
  licenseType: "",
  priority: "",
});

function selectCommissionType(value: string) {
  form.value.commissionType = value;
  fieldErrors.value.commissionType = "";
}

function selectLicenseType(value: string) {
  form.value.licenseType = value;
  fieldErrors.value.licenseType = "";
}

function selectPriority(value: string) {
  form.value.priority = value;
  fieldErrors.value.priority = "";
}

const descriptionMaxLength = 4000;
const formStartTime = ref(Date.now());

const isSubmitting = ref(false);
const statusMessage = ref("");
const isError = ref(false);

function validate(): boolean {
  fieldErrors.value.commissionType = form.value.commissionType
    ? ""
    : "Please select a commission type.";
  fieldErrors.value.licenseType = form.value.licenseType
    ? ""
    : "Please select a license type.";
  fieldErrors.value.priority = form.value.priority
    ? ""
    : "Please select an option.";

  return (
    !fieldErrors.value.commissionType &&
    !fieldErrors.value.licenseType &&
    !fieldErrors.value.priority
  );
}

const startCommission = async () => {
  const selectionsValid = validate();

  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.message ||
    !selectionsValid
  ) {
    statusMessage.value = "Please complete all required fields.";
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

    form.value = {
      name: "",
      email: "",
      message: "",
      commissionType: "",
      licenseType: "",
      priority: "",
      website: "",
    };
    fieldErrors.value = { commissionType: "", licenseType: "", priority: "" };
    formStartTime.value = Date.now();
  } catch (err: any) {
    isError.value = true;

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
  <!-- Hero — base tone -->
  <section class="relative">
    <div class="container-custom py-20 text-center lg:py-32">
      <p class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2">
        Let's Create Something
      </p>

      <h1
        class="mt-6 font-display text-5xl font-bold tracking-tight text-text md:text-7xl"
      >
        Start a Commission
      </h1>

      <p
        class="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
      >
        Have an idea in mind? Tell me a little about it and I'll get back to you
        within a couple of days.
      </p>
    </div>
  </section>

  <UiSectionBackground tone="raised" divider>
    <section class="relative">
      <div class="container-custom py-12 lg:py-20">
        <div class="text-center mb-12">
          <h3 class="font-display text-2xl font-bold tracking-tight text-text">
            Commission Details
          </h3>

          <p class="mt-4 text-muted">
            A few details will help me understand what you're looking for and
            how I can bring it to life.
          </p>
        </div>

        <!-- Commission Form — raised tone -->

        <div class="mx-auto max-w-5xl">
          <div
            class="rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_60px_-32px_rgba(157,92,255,0.35)] sm:p-8 lg:p-10"
          >
            <form class="flex flex-col gap-8" @submit.prevent="startCommission">
              <!-- Honeypot -->
              <div class="hidden" aria-hidden="true">
                <input
                  v-model="form.website"
                  type="text"
                  name="website"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <!-- Name / Email -->
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-medium text-text"> Name </label>

                  <InputText
                    v-model="form.name"
                    placeholder="Your name"
                    :disabled="isSubmitting"
                    required
                    class="!rounded-xl !border-border !bg-background !text-bg placeholder:!text-muted"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm font-medium text-text"> Email </label>

                  <InputText
                    v-model="form.email"
                    type="email"
                    placeholder="your@email.com"
                    :disabled="isSubmitting"
                    required
                    class="!rounded-xl !border-border !bg-background !text-bg placeholder:!text-muted"
                  />
                </div>
              </div>

              <!-- Commission Type -->
              <div class="flex flex-col gap-3">
                <label class="text-sm font-medium text-text">
                  Commission Type
                  <span class="text-accent-2">*</span>
                </label>

                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <button
                    v-for="type in commissionTypes"
                    :key="type.value"
                    type="button"
                    :disabled="isSubmitting"
                    class="rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300"
                    :class="
                      form.commissionType === type.value
                        ? 'border-accent-2 bg-accent-2/10 text-accent-2 shadow-[0_0_24px_-12px_rgba(157,92,255,0.8)]'
                        : 'border-border bg-background text-muted hover:border-accent-2/40 hover:text-text'
                    "
                    @click="selectCommissionType(type.value)"
                  >
                    {{ type.label }}
                  </button>
                </div>

                <p
                  v-if="form.commissionType === 'other'"
                  class="text-xs text-muted"
                >
                  Please describe your custom request in the message below.
                </p>

                <p
                  v-if="fieldErrors.commissionType"
                  class="text-xs font-medium text-accent-2"
                >
                  {{ fieldErrors.commissionType }}
                </p>
              </div>

              <!-- License Type -->
              <div class="flex flex-col gap-3">
                <label class="text-sm font-medium text-text">
                  License Type
                  <span class="text-accent-2">*</span>
                </label>

                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="license in licenseTypes"
                    :key="license.value"
                    type="button"
                    :disabled="isSubmitting"
                    class="rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300"
                    :class="
                      form.licenseType === license.value
                        ? 'border-accent-2 bg-accent-2/10 text-accent-2 shadow-[0_0_24px_-12px_rgba(157,92,255,0.8)]'
                        : 'border-border bg-background text-muted hover:border-accent-2/40 hover:text-text'
                    "
                    @click="selectLicenseType(license.value)"
                  >
                    {{ license.label }}

                    <span
                      v-if="license.note"
                      class="mt-1 block text-xs font-normal text-muted"
                    >
                      {{ license.note }}
                    </span>
                  </button>
                </div>

                <p
                  v-if="fieldErrors.licenseType"
                  class="text-xs font-medium text-accent-2"
                >
                  {{ fieldErrors.licenseType }}
                </p>
              </div>

              <!-- Priority Slot -->
              <div class="flex flex-col gap-3">
                <label class="text-sm font-medium text-text">
                  Priority Slot
                  <span class="text-accent-2">*</span>
                </label>

                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="option in priorityOptions"
                    :key="option.value"
                    type="button"
                    :disabled="isSubmitting"
                    class="rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300"
                    :class="
                      form.priority === option.value
                        ? 'border-accent-2 bg-accent-2/10 text-accent-2 shadow-[0_0_24px_-12px_rgba(157,92,255,0.8)]'
                        : 'border-border bg-background text-muted hover:border-accent-2/40 hover:text-text'
                    "
                    @click="selectPriority(option.value)"
                  >
                    {{ option.label }}

                    <span
                      v-if="option.note"
                      class="mt-1 block text-xs font-normal text-muted"
                    >
                      {{ option.note }}
                    </span>
                  </button>
                </div>

                <p
                  v-if="fieldErrors.priority"
                  class="text-xs font-medium text-accent-2"
                >
                  {{ fieldErrors.priority }}
                </p>
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium text-text">
                  Describe Your Idea
                </label>

                <Textarea
                  v-model="form.message"
                  rows="6"
                  auto-resize
                  placeholder="Character details, references, style notes..."
                  :disabled="isSubmitting"
                  required
                  :maxlength="descriptionMaxLength"
                  class="!rounded-xl !border-border !bg-background !text-bg placeholder:!text-muted"
                />

                <div class="text-right text-xs text-muted">
                  {{ form.message.length }}/{{ descriptionMaxLength }}
                </div>
              </div>

              <!-- Terms -->
              <p class="text-xs leading-6 text-muted">
                Payment is accepted via PayPal invoice, due after sketch
                approval. By submitting, you agree to the
                <NuxtLink
                  to="/terms-of-service"
                  class="text-accent-2 underline underline-offset-2 transition-colors hover:text-text"
                >
                  Terms of Service </NuxtLink
                >.
              </p>

              <!-- Status -->
              <p
                v-if="statusMessage"
                class="text-center text-sm font-medium"
                :class="isError ? 'text-accent-2' : 'text-emerald-400'"
              >
                {{ statusMessage }}
              </p>

              <!-- Submit -->
              <div
                class="flex justify-center border-t border-border pt-8 sm:justify-end"
              >
                <UiPrimaryButton
                  label="Start a Commission"
                  type="submit"
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  class="w-full justify-center sm:w-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>

  <!-- Closing CTA — base tone -->
  <UiSectionBackground tone="base" divider>
    <section class="relative">
      <div class="container-custom py-20 text-center lg:py-28">
        <p class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2">
          Have Questions?
        </p>

        <h2
          class="mt-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Not sure what you need?
        </h2>

        <p class="mx-auto mt-4 max-w-md text-base leading-7 text-muted">
          That's completely fine. Send me a message and we can figure out the
          best direction for your project together.
        </p>

        <div class="mt-8">
          <UiPrimaryButton label="Get in Touch" href="/contact" />
        </div>
      </div>
    </section>
  </UiSectionBackground>
</template>
