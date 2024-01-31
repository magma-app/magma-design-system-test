<script setup lang="ts">
// NPM
import { computed, PropType } from "vue";

// Components
import BaseIcon from "@/components/bases/BaseIcon.vue";

// Props
const props = defineProps({
  customColor: {
    type: String,
    default: null,
  },
  customRgbColor: {
    type: String,
    default: null,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg" | "xl">,
    default: "sm",
  },
  state: {
    type: String as PropType<"prmr" | "scdr" | "trtr">, // primary, secondary, tertiary
    default: "prmr",
  },
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: "button",
  },
});

// Computed
const iconColor = computed(() => {
  if (props.disabled) {
    if (props.state === "scdr") {
      if (props.danger) {
        return "#FDA29B";
      } else {
        return "#94A3B8";
      }
    } else if (props.state === "trtr") {
      if (props.danger) {
        return "#FDA29B";
      } else {
        return "#A4BCFD";
      }
    } else {
      return "#FFFFFF";
    }
  } else {
    if (props.state === "scdr") {
      if (props.danger) {
        return "#D92D20";
      } else {
        return "#5F6C85";
      }
    } else if (props.state === "trtr") {
      if (props.danger) {
        return "#D92D20";
      } else {
        return "#444CE7";
      }
    } else {
      return "#FFFFFF";
    }
  }
});
</script>

<template>
  <button
    :class="[
      'box-border rounded-3xl border text-mgm-txt-sm font-medium',
      {
        'flex items-center justify-center': icon,
        // size
        'px-[13px] py-[7px]': size === 'sm',
        'px-[15px] py-[9px]': size === 'md',
        'px-[17px] py-[11px]': size === 'lg',
        'px-[23px] py-[13px]': size === 'xl',
        // state primary
        'text-foreground-on-emphasis shadow-[0_1px_2px_rgba(28,31,39,0.05)]':
          state === 'prmr',
        'focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#C7D7FE]':
          state === 'prmr' && !danger,
        'border-border-brand-emphasis bg-background-brand-emphasis hover:border-foreground-brand-hover hover:bg-background-brand-emphasis-hover disabled:border-background-brand-disabled disabled:bg-background-brand-disabled':
          state === 'prmr' && !danger && !customColor,
        'border-border-danger-emphasis bg-background-danger-emphasis hover:border-background-danger-emphasis-hover hover:bg-background-danger-emphasis-hover focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#FECDCA] disabled:border-background-danger-disabled disabled:bg-background-danger-disabled':
          state === 'prmr' && danger,
        // state secondary
        'shadow-[0_1px_2px_rgba(28,31,39,0.05)]': state === 'scdr',
        'border-border-subtle text-foreground-default bg-background-default hover:border-border-default hover:text-foreground-emphasis focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#F1F5F9] disabled:border-background-subtle disabled:text-foreground-subtle':
          state === 'scdr' && !danger,
        'border-border-danger-default text-foreground-danger-default hover:border-background-danger-disabled hover:text-background-danger-emphasis-hover focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#FECDCA] disabled:border-background-danger-subtle disabled:text-background-danger-disabled':
          state === 'scdr' && danger,
        // state tertiary
        'border-transparent shadow-none': state === 'trtr',
        'text-foreground-brand-default hover:text-foreground-brand-hover focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#C7D7FE] disabled:text-background-brand-disabled':
          state === 'trtr' && !danger,
        ' text-foreground-danger-default hover:text-background-danger-emphasis-hover focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_3px_#FECDCA] disabled:text-background-danger-disabled':
          state === 'trtr' && danger,
        // custom color
        'hover:opacity-40': customColor,
      },
    ]"
    :style="{
      borderColor: customColor
        ? customColor && disabled
          ? 'transparent'
          : customColor
        : undefined,
      backgroundColor: customColor
        ? customColor && disabled
          ? `rgba(${customRgbColor}, 0.2)`
          : customColor
        : undefined,
    }"
    :disabled="disabled"
    :type="type"
  >
    <BaseIcon v-if="icon" class="mr-2" :color="iconColor" :icon="icon" />

    {{ text }}

    <slot />
  </button>
</template>
