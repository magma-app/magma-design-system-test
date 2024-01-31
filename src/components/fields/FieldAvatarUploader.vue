<script setup lang="ts">
// NPM
import { PropType, ref } from "vue";

// Components
import BaseIcon from "@/components/bases/BaseIcon.vue";
import FieldLabel from "@/components/fields/FieldLabel.vue";

// Props
defineProps({
  accept: {
    type: String,
    default: "image/*",
  },
  cta: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  locale: {
    type: String,
    default: "en",
  },
  modelValue: {
    type: File as PropType<File | null | undefined>,
    default: null,
  },
  previewUrl: {
    type: String,
    default: undefined,
  },
  fallback: {
    type: String,
    default: "",
  },
  placeholderIcon: {
    type: String,
    default: "user",
  },
  required: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Object,
    default: null,
  },
});

// Reactive variables
const root = ref<HTMLInputElement>();
const previewImage = ref("");

// Event emitters
const emit = defineEmits(["change", "update:modelValue"]);

// Event listeners
const onImageChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;

  if (fileInput && fileInput.files) {
    let file: File | null = null;

    file = fileInput.files[0];

    if (file) {
      previewImage.value = URL.createObjectURL(file);
    }

    emit("update:modelValue", file);
    emit("change", file);
  }
};
</script>

<template>
  <div ref="root">
    <div v-if="label || description" class="mb-3">
      <div v-if="label" class="flex items-start">
        <FieldLabel :for="id" :label="label" />

        <span
          v-if="required"
          class="ml-1 inline-block align-top text-mgm-txt-sm font-medium text-foreground-brand-default"
        >
          *
        </span>
      </div>

      <FieldLabel v-if="description" :label="description" description />
    </div>

    <div class="flex w-full items-center">
      <div
        class="mr-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-background-subtle"
      >
        <img
          v-if="previewImage || previewUrl"
          class="h-full w-full object-cover"
          :src="previewImage || previewUrl"
          alt="avatar"
        />

        <span
          v-else-if="fallback"
          class="text-mgm-txt-sm font-semibold uppercase text-foreground-default"
        >
          {{ fallback }}
        </span>

        <BaseIcon v-else :icon="placeholderIcon" color="#5F6C85" />
      </div>

      <button type="button">
        <input
          :id="id"
          class="sr-only"
          :accept="accept"
          tabindex="-1"
          type="file"
          @change="onImageChange"
        />

        <label
          class="box-border cursor-pointer rounded-3xl border border-border-subtle px-[15px] py-[9px] text-mgm-txt-sm font-medium text-foreground-default shadow-[0_1px_2px_rgba(28,31,39,0.05)] hover:border-border-default hover:text-foreground-emphasis focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#F1F5F9] disabled:border-background-subtle disabled:text-foreground-subtle"
          :for="id"
          @click.stop
        >
          {{ cta }}
        </label>
      </button>
    </div>

    <FieldLabel
      v-if="validation && validation.$errors?.length"
      class="mt-1"
      :label="validation.$errors[0]?.$message"
      error
    />
  </div>
</template>
