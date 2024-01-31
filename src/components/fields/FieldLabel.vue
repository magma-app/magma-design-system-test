<script setup lang="ts">
// Props
defineProps({
  description: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <label
    :for="id"
    class="block"
    :class="{
      'text-mgm-txt-sm font-medium text-foreground-emphasis':
        !error && !description,
      'text-mgm-txt-xs font-normal text-foreground-default': description,
      'text-mgm-txt-xs font-medium text-foreground-danger-default': error,
    }"
  >
    {{ label }}
    <slot />
  </label>
</template>
