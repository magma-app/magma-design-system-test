<script setup lang="ts">
// NPM
import { onMounted, PropType, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

// Components
import BaseIcon from "@/components/bases/BaseIcon.vue";
import FieldLabel from "@/components/fields/FieldLabel.vue";

// Props
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  role: {
    type: String as PropType<
      "color-picker" | "default" | "email" | "link" | "search"
    >,
    default: "default",
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: [String, Number],
    default: null,
  },
  locale: {
    type: String,
    default: "en",
  },
  label: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Object,
    default: null,
  },
  validationDisabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  customColor: {
    type: String,
    default: null,
  },
  customRgbColor: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  customIcon: {
    type: String,
    default: null,
  },
  suffix: {
    type: String,
    default: null,
  },
  noRoundedBottom: {
    type: Boolean,
    default: false,
  },
});

// Translations
const { t } = useI18n();

// Reactive variables
const root = ref<HTMLInputElement>();
const focused = ref(false);

// Event emitters
const emit = defineEmits([
  "blur",
  "change",
  "focus",
  "submit",
  "update:modelValue",
]);

// Lifecycle hooks
onMounted(() => updateTextInput());

// Watchers
watch(
  () => props.modelValue,
  () => {
    updateTextInput();
  }
);

// Event listeners
const onTextBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (props.modelValue?.length === 0) {
    focused.value = false;
  }

  emit("blur", target.value, props.id);
};

const onTextFocus = (event: Event) => {
  const target = event.target as HTMLInputElement;

  focused.value = true;

  emit("focus", target.value, props.id);
};

const onTextInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  let value = target.value;

  // Alterations for email to remove spaces
  if (props.role === "email") {
    value = value.replace(/\s/g, "");
    target.value = value;
  }

  emit("change", value, props.id);
  emit("update:modelValue", value, props.id);
};

const onTextKeypress = (event: KeyboardEvent) => {
  if (event.code == "Enter") {
    emit("submit", props.id);
  }
};

const onTextReset = () => {
  emit("update:modelValue", "", props.id);
};

// Methods
const updateTextInput = () => {
  if (root.value) {
    const inputElement = root.value.querySelector("input");

    if (inputElement) {
      if (props.role === "link") {
        inputElement.value = props.modelValue.replace("https://", "");
      } else {
        inputElement.value = props.modelValue;
      }
    }
  }
};
</script>

<template>
  <div ref="root">
    <div v-if="label || description" class="mb-1.5">
      <div v-if="label" class="flex items-start">
        <FieldLabel :id="`${id}`" :label="label" />

        <span
          v-if="required"
          :class="[
            'ml-1 text-mgm-txt-sm font-medium',
            { 'text-foreground-brand-default': !customColor },
          ]"
          :style="{ color: customColor }"
        >
          *
        </span>
      </div>

      <FieldLabel v-if="description" :label="description" description />
    </div>

    <div
      :class="{
        relative: role === 'search' || customIcon || icon,
        'relative flex rounded-[4.16px] shadow-sm':
          suffix || ['color-picker', 'link'].includes(role),
      }"
    >
      <span
        v-if="role === 'link'"
        class="inline-flex items-center rounded-l-[4.16px] border border-r-0 border-border-default bg-background-subtle-hover px-3 text-foreground-default shadow-sm sm:text-mgm-txt-sm"
      >
        https://
      </span>

      <BaseIcon
        v-if="icon || role === 'search'"
        class="absolute bottom-0 left-4 top-0"
        :icon="icon ? icon : 'search'"
        color="#5F6C85"
      />

      <div
        v-if="customIcon"
        class="absolute bottom-0 left-0 top-0 flex h-full items-center"
      >
        <img class="ml-3 h-5 w-5" :src="customIcon" />
      </div>

      <input
        :id="`${id}`"
        :class="[
          'box-border block w-full rounded-[4.16px] py-[9px] text-mgm-txt-sm font-normal text-foreground-emphasis shadow-[0px_1px_2px_rgba(28,31,39,0.05)] outline-0 placeholder:text-foreground-subtle',
          validation?.$errors?.length
            ? 'border-[0.68px] border-border-danger-emphasis focus:border-border-danger-emphasis focus:shadow-[0px_1px_2px_rgba(28,31,39,0.05)] focus:ring-border-danger-emphasis'
            : 'border-[0.83px] border-border-default',
          customIcon || icon ? 'px-10' : 'px-2.5',
          customIcon || role === 'search' || icon ? 'pl-10' : 'pl-2.5',
          customIcon || icon ? 'py-2 pr-10' : 'py-2 pr-2.5',
          {
            'focus:border-border-brand-emphasis focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_2px_#C7D7FE] focus:ring-border-brand-emphasis':
              !customColor && !validation?.$errors?.length,
            '!rounded-l-none': role === 'link',
            '!rounded-r-none': suffix,
            '!rounded-b-none': noRoundedBottom,
            invisible: role === 'color-picker',
          },
        ]"
        :style="{
          borderColor:
            customColor && focused && !validation?.$errors?.length
              ? customColor
              : undefined,
          boxShadow:
            customColor && focused && !validation?.$errors?.length
              ? `0px 1px 2px rgba(${customRgbColor}, 0.05), 0px 0px 0px 2px rgba(${customRgbColor}, 0.2)`
              : undefined,
        }"
        :autocomplete="autocomplete"
        :disabled="disabled"
        :name="`${id}`"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        @blur="onTextBlur"
        @focus="onTextFocus"
        @input="onTextInput"
        @keypress="onTextKeypress"
      />

      <BaseIcon
        v-if="role === 'search' && focused && modelValue?.length > 0"
        class="absolute bottom-0 right-4 top-0"
        color="#444CE7"
        icon="close"
        @click="onTextReset()"
      />

      <span
        v-if="suffix"
        class="inline-flex items-center rounded-r-[4.16px] border border-l-0 border-border-default bg-background-subtle-hover px-3 text-foreground-default shadow-sm sm:text-mgm-txt-sm"
      >
        {{ suffix }}
      </span>

      <label
        v-if="role === 'color-picker'"
        :for="`${id}`"
        class="absolute flex min-h-[28px] h-full w-full"
      >
        <div
          class="z-10 block w-full rounded-[4.16px] rounded-r-none border border-border-default bg-background-subtle-hover px-0 py-0 shadow-sm outline-border-brand-emphasis focus:border-border-brand-emphasis focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_2px_#C7D7FE] focus:ring-border-brand-emphasis"
          :style="{ backgroundColor: props.modelValue }"
        ></div>

        <div
          class="inline-flex w-80 items-center justify-center rounded-r-[4.16px] border border-l-0 border-border-default bg-background-subtle-hover px-3 text-mgm-txt-sm text-foreground-default shadow-sm hover:bg-background-subtle focus:border-border-default focus:outline-none focus:ring-1 focus:ring-border-default"
        >
          <BaseIcon
            class="pr-2"
            icon="tag"
            color="#5F6C85"
            aria-hidden="true"
          />
          {{ t("color") }}
        </div>
      </label>
    </div>

    <FieldLabel
      v-if="
        ((validation && validation.$errors?.length > 0) || errorMessage) &&
        !validationDisabled
      "
      class="mt-[3px]"
      :label="validation.$errors[0]?.$message || errorMessage"
      error
    />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "color": "Pick a color"
  },
  "fr": {
    "color": "Choisir une couleur"
  }
}
</i18n>
