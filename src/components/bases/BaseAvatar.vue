<script setup lang="ts">
// NPM
import { PropType } from "vue";

// Props
defineProps({
  type: {
    type: String as PropType<"single" | "group">,
    default: "single",
  },
  size: {
    type: String as PropType<
      "2xs" | "xs" | "sm" | "sd" | "md" | "lg" | "xl" | "2xl" | "full"
    >,
    default: "sd",
  },
  shape: {
    type: String as PropType<"squared" | "rounded" | "circle">,
    default: "circle",
  },
  border: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: null,
  },
  fallback: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  groupAvatarsUrls: {
    type: Array as PropType<
      {
        url: string;
        tooltip?: string;
      }[]
    >,
    default: () => [],
  },
  groupCustomSize: {
    type: String as PropType<"sm" | "sd">,
    default: "sm",
  },
  groupCustomTotalUsers: {
    type: String,
    default: null,
  },
  plus: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-if="type === 'single'"
    :class="[
      'overflow-hidden',
      {
        'h-4 w-4': size === '2xs',
        'h-5 w-5': size === 'xs',
        'h-6 w-6': size === 'sm',
        'h-8 w-8': size === 'sd',
        'h-10 w-10': size === 'md',
        'h-12 w-12': size === 'lg',
        'h-16 w-16': size === 'xl',
        'h-[120px] w-[120px]': size === '2xl',
        'w-full': size === 'full',
        'rounded-full': shape === 'circle',
        'rounded-none': shape === 'squared',
        'rounded-[5px]': shape === 'rounded',
        'border-2 border-border-on-emphasis': border,
      },
    ]"
  >
    <img v-if="src" class="h-full w-full object-cover" :alt="alt" :src="src" />

    <div
      v-else
      :class="[
        'flex h-full w-full items-center justify-center bg-background-subtle font-semibold uppercase text-foreground-default',
        {
          'text-mgm-txt-xs': size === 'xs' || size === 'sm' || size === 'sd',
          'text-mgm-txt-sm': size === 'md' || size === 'lg' || size === 'xl',
          'text-mgm-dspl-xs': size === '2xl' || size === 'full',
        },
      ]"
    >
      <span class="uppercase"> {{ fallback }}</span>
    </div>
  </div>

  <div
    v-else-if="type === 'group'"
    class="flex items-center space-x-2 text-foreground-emphasis"
  >
    <div class="flex flex-shrink-0 -space-x-1">
      <div
        v-if="plus"
        :class="[
          'flex items-center justify-center rounded-full  bg-background-subtle text-[10px] font-semibold text-foreground-default ring-[1.5px] ring-border-on-emphasis',
          {
            'h-6 w-6': groupCustomSize === 'sm',
            'h-8 w-8': groupCustomSize === 'sd',
          },
        ]"
      >
        +
      </div>

      <BaseAvatar
        v-for="(groupAvatarUrl, groupAvatarUrlIndex) in groupAvatarsUrls"
        :key="groupAvatarUrlIndex"
        v-tooltip="groupAvatarUrl.tooltip"
        class="ring-2 ring-border-on-emphasis"
        :src="groupAvatarUrl.url"
        :size="groupCustomSize"
      />

      <div
        v-if="
          groupCustomTotalUsers &&
          (parseInt(groupCustomTotalUsers) > groupAvatarsUrls?.length ||
            groupCustomTotalUsers === '0')
        "
        :class="[
          'flex max-w-none items-center justify-center rounded-full bg-background-subtle p-1 pr-2 text-center text-[10px] font-semibold text-foreground-default ring-2 ring-border-on-emphasis',
          {
            'h-6 w-6': groupCustomSize === 'sm',
            'h-8 w-8': groupCustomSize === 'sd',
          },
        ]"
      >
        <span
          v-if="parseInt(groupCustomTotalUsers) > groupAvatarsUrls?.length"
          class="flex-shrink-0"
        >
          +{{ parseInt(groupCustomTotalUsers) - groupAvatarsUrls?.length }}
        </span>

        <span v-else-if="groupCustomTotalUsers === '0'">
          {{ groupCustomTotalUsers }}
        </span>
      </div>
    </div>
  </div>
</template>
