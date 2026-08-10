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
  <section class="py-20 lg:py-28">
    <div>
      <UiSectionTitle
        eyebrow="Let's Create Something"
        title="Start a Commission"
        description="Fill out the details below and you'll hear back within a couple of days."
      />

      <div
        class="mx-auto mt-14 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-10"
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
              <label class="text-sm font-medium text-zinc-700">Name</label>
              <InputText
                v-model="form.name"
                placeholder="Your name"
                :disabled="isSubmitting"
                required
                class="!rounded-xl !border-zinc-200 !bg-zinc-50"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-zinc-700">Email</label>
              <InputText
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                :disabled="isSubmitting"
                required
                class="!rounded-xl !border-zinc-200 !bg-zinc-50"
              />
            </div>
          </div>

          <!-- Commission Type -->
          <div class="flex flex-col gap-3">
            <label class="text-sm font-medium text-zinc-700">
              Commission Type <span class="text-pink-500">*</span>
            </label>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <button
                v-for="type in commissionTypes"
                :key="type.value"
                type="button"
                :disabled="isSubmitting"
                class="rounded-xl border px-4 py-3 text-sm font-medium transition"
                :class="
                  form.commissionType === type.value
                    ? 'border-violet-500 bg-violet-50 text-violet-700'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-violet-200'
                "
                @click="selectCommissionType(type.value)"
              >
                {{ type.label }}
              </button>
            </div>
            <p
              v-if="form.commissionType === 'other'"
              class="text-xs text-zinc-400"
            >
              Please describe your custom request in the message below.
            </p>
            <p
              v-if="fieldErrors.commissionType"
              class="text-xs font-medium text-pink-600"
            >
              {{ fieldErrors.commissionType }}
            </p>
          </div>

          <!-- License Type -->
          <div class="flex flex-col gap-3">
            <label class="text-sm font-medium text-zinc-700">
              License Type <span class="text-pink-500">*</span>
            </label>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="license in licenseTypes"
                :key="license.value"
                type="button"
                :disabled="isSubmitting"
                class="rounded-xl border px-4 py-3 text-sm font-medium transition"
                :class="
                  form.licenseType === license.value
                    ? 'border-violet-500 bg-violet-50 text-violet-700'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-violet-200'
                "
                @click="selectLicenseType(license.value)"
              >
                {{ license.label }}
                <span
                  v-if="license.note"
                  class="block text-xs font-normal text-zinc-400"
                >
                  {{ license.note }}
                </span>
              </button>
            </div>
            <p
              v-if="fieldErrors.licenseType"
              class="text-xs font-medium text-pink-600"
            >
              {{ fieldErrors.licenseType }}
            </p>
          </div>

          <!-- Priority Slot -->
          <div class="flex flex-col gap-3">
            <label class="text-sm font-medium text-zinc-700">
              Priority Slot <span class="text-pink-500">*</span>
            </label>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="option in priorityOptions"
                :key="option.value"
                type="button"
                :disabled="isSubmitting"
                class="rounded-xl border px-4 py-3 text-sm font-medium transition"
                :class="
                  form.priority === option.value
                    ? 'border-violet-500 bg-violet-50 text-violet-700'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-violet-200'
                "
                @click="selectPriority(option.value)"
              >
                {{ option.label }}
                <span
                  v-if="option.note"
                  class="block text-xs font-normal text-zinc-400"
                >
                  {{ option.note }}
                </span>
              </button>
            </div>
            <p
              v-if="fieldErrors.priority"
              class="text-xs font-medium text-pink-600"
            >
              {{ fieldErrors.priority }}
            </p>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-zinc-700"
              >Describe your idea</label
            >
            <Textarea
              v-model="form.message"
              rows="5"
              auto-resize
              placeholder="Character details, references, style notes..."
              :disabled="isSubmitting"
              required
              :maxlength="descriptionMaxLength"
              class="!rounded-xl !border-zinc-200 !bg-zinc-50"
            />
            <div class="text-right text-xs text-zinc-400">
              {{ form.message.length }}/{{ descriptionMaxLength }}
            </div>
          </div>

          <p class="text-xs text-zinc-400">
            Payment is accepted via PayPal invoice, due after sketch approval.
            By submitting, you agree to the
            <NuxtLink
              to="/terms-of-service"
              class="text-violet-600 underline underline-offset-2"
            >
              Terms of Service </NuxtLink
            >.
          </p>

          <div
            v-if="statusMessage"
            class="text-center text-sm font-medium"
            :class="isError ? 'text-pink-600' : 'text-emerald-600'"
          >
            {{ statusMessage }}
          </div>

          <div class="flex justify-center sm:justify-end">
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
  </section>
</template>
