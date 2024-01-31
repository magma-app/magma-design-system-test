<script setup lang="ts">
// NPM
import { PropType, ref } from "vue";

// Helpers
import { iconList } from "@/helpers/iconsListHelper";

// Props
const props = defineProps({
  icon: {
    type: String as PropType<typeof iconList[number]>,
    required: true,
    validator: (value: string) => iconList.includes(value),
  },
  size: {
    type: Number,
    default: undefined,
  },
  color: {
    type: String,
    default: undefined,
  },
  bgColor: {
    type: String,
    default: undefined,
  },
  hoverState: {
    type: Boolean,
    default: false,
  },
  hoverColor: {
    type: String,
    default: undefined,
  },
});

// Reactive variables
const hover = ref(false);

// Event listeners
const onHoverIn = () => {
  if (props.hoverState) {
    hover.value = true;
  }
};

const onHoverOut = () => {
  hover.value = false;
};
</script>

<template>
  <!-- TO DO: find a system to create dynamic tailwind css classes -->
  <div
    :class="[
      'flex items-center justify-center',
      { 'cursor-pointer': hover, 'rounded-full p-1.5': bgColor },
    ]"
    :style="{ backgroundColor: bgColor }"
    @mouseenter="onHoverIn"
    @mouseleave="onHoverOut"
  >
    <template v-if="icon === 'alert-circle'">
      <svg
        v-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1149_4076)">
          <path
            d="M8 5.33334V8.00001M8 10.6667H8.00667M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33334 11.6819 1.33334 8.00001C1.33334 4.31811 4.3181 1.33334 8 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1149_4076">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'alert-triangle'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_216_1715)">
          <path
            d="M5.99989 4.50001V6.50001M5.99989 8.50001H6.00489M5.14489 1.93001L0.909888 9.00001C0.822572 9.15122 0.776372 9.32266 0.775883 9.49727C0.775394 9.67188 0.820634 9.84358 0.907102 9.99527C0.993569 10.147 1.11825 10.2734 1.26874 10.3619C1.41923 10.4505 1.59029 10.4981 1.76489 10.5H10.2349C10.4095 10.4981 10.5805 10.4505 10.731 10.3619C10.8815 10.2734 11.0062 10.147 11.0927 9.99527C11.1791 9.84358 11.2244 9.67188 11.2239 9.49727C11.2234 9.32266 11.1772 9.15122 11.0899 9.00001L6.85489 1.93001C6.76575 1.78306 6.64025 1.66157 6.49049 1.57725C6.34072 1.49293 6.17176 1.44864 5.99989 1.44864C5.82802 1.44864 5.65905 1.49293 5.50929 1.57725C5.35953 1.66157 5.23402 1.78306 5.14489 1.93001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_216_1715">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6.00001V8.66668M8 11.3333H8.00667M6.86 2.57335L1.21333 12C1.09691 12.2016 1.03531 12.4302 1.03466 12.663C1.03401 12.8958 1.09433 13.1248 1.20962 13.327C1.32491 13.5293 1.49115 13.6978 1.6918 13.8159C1.89246 13.934 2.12053 13.9975 2.35333 14H13.6467C13.8795 13.9975 14.1075 13.934 14.3082 13.8159C14.5088 13.6978 14.6751 13.5293 14.7904 13.327C14.9057 13.1248 14.966 12.8958 14.9653 12.663C14.9647 12.4302 14.9031 12.2016 14.7867 12L9.14 2.57335C9.02115 2.37742 8.85381 2.21543 8.65413 2.103C8.45444 1.99058 8.22915 1.93152 8 1.93152C7.77084 1.93152 7.54555 1.99058 7.34587 2.103C7.14618 2.21543 6.97885 2.37742 6.86 2.57335Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'align-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14V2M2 8H11.3333M11.3333 8L6.66667 3.33333M11.3333 8L6.66667 12.6667"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'archive'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66667 5.33106C2.55733 5.32824 2.47793 5.32191 2.40655 5.30771C1.87763 5.2025 1.46416 4.78904 1.35896 4.26012C1.33334 4.13132 1.33334 3.97644 1.33334 3.66667C1.33334 3.3569 1.33334 3.20201 1.35896 3.07321C1.46416 2.54429 1.87763 2.13083 2.40655 2.02562C2.53535 2 2.69023 2 3 2H13C13.3098 2 13.4647 2 13.5935 2.02562C14.1224 2.13083 14.5358 2.54429 14.641 3.07321C14.6667 3.20201 14.6667 3.3569 14.6667 3.66667C14.6667 3.97644 14.6667 4.13132 14.641 4.26012C14.5358 4.78904 14.1224 5.2025 13.5935 5.30771C13.5221 5.32191 13.4427 5.32824 13.3333 5.33106M6.66667 8.66667H9.33334M2.66667 5.33333H13.3333V10.8C13.3333 11.9201 13.3333 12.4802 13.1153 12.908C12.9236 13.2843 12.6176 13.5903 12.2413 13.782C11.8135 14 11.2534 14 10.1333 14H5.86667C4.74656 14 4.18651 14 3.75869 13.782C3.38236 13.5903 3.0764 13.2843 2.88466 12.908C2.66667 12.4802 2.66667 11.9201 2.66667 10.8V5.33333Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-circle-broken-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1284_4541)">
          <path
            d="M2.22526 4.66668C3.37796 2.67401 5.53244 1.33334 8.00005 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00005 14.6667C5.53244 14.6667 3.37796 13.326 2.22526 11.3333M8 10.6667L10.6667 8.00001M10.6667 8.00001L8 5.33334M10.6667 8.00001H1.33334"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1284_4541">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'arrow-down'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.33334V12.6667M8 12.6667L12.6667 8.00001M8 12.6667L3.33334 8.00001"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-down-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66666 4.66666L11.3333 11.3333M11.3333 11.3333V4.66666M11.3333 11.3333H4.66666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-left'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 7.99998H3.33334M3.33334 7.99998L8 12.6666M3.33334 7.99998L8 3.33331"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-right'">
      <svg
        v-if="size === 14"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.91663 6.99999H11.0833M11.0833 6.99999L6.99996 2.91666M11.0833 6.99999L6.99996 11.0833"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33334 7.99998H12.6667M12.6667 7.99998L8 3.33331M12.6667 7.99998L8 12.6666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-up'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12.6666V3.33331M8 3.33331L3.33334 7.99998M8 3.33331L12.6667 7.99998"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'arrow-up-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66666 11.3334L11.3333 4.66669M11.3333 4.66669H4.66666M11.3333 4.66669V11.3334"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'award'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.726 10.0044L5 14L8 12.6842L11 14L10.274 10M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'bell'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_216_1635)">
          <path
            d="M4.67698 10.5C5.02954 10.8112 5.49266 11 5.99989 11C6.50711 11 6.97023 10.8112 7.3228 10.5M8.99989 4C8.99989 3.20435 8.68382 2.44129 8.12121 1.87868C7.5586 1.31607 6.79554 1 5.99989 1C5.20424 1 4.44118 1.31607 3.87857 1.87868C3.31596 2.44129 2.99989 3.20435 2.99989 4C2.99989 5.54509 2.61012 6.60298 2.17472 7.30271C1.80745 7.89294 1.62382 8.18805 1.63055 8.27038C1.63801 8.36154 1.65732 8.3963 1.73078 8.45079C1.79712 8.5 2.09618 8.5 2.69431 8.5H9.30546C9.90359 8.5 10.2027 8.5 10.269 8.45079C10.3425 8.3963 10.3618 8.36154 10.3692 8.27038C10.376 8.18805 10.1923 7.89294 9.82506 7.30271C9.38965 6.60298 8.99989 5.54509 8.99989 4Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_216_1635">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.23612 14C6.70621 14.4149 7.3237 14.6666 8 14.6666C8.6763 14.6666 9.2938 14.4149 9.76389 14M12 5.33331C12 4.27245 11.5786 3.25503 10.8284 2.50489C10.0783 1.75474 9.06087 1.33331 8 1.33331C6.93914 1.33331 5.92172 1.75474 5.17158 2.50489C4.42143 3.25503 4 4.27245 4 5.33331C4 7.39344 3.48032 8.80395 2.89978 9.73692C2.41009 10.5239 2.16524 10.9174 2.17422 11.0272C2.18416 11.1487 2.20991 11.195 2.30785 11.2677C2.39631 11.3333 2.79506 11.3333 3.59257 11.3333H12.4074C13.2049 11.3333 13.6037 11.3333 13.6922 11.2677C13.7901 11.195 13.8158 11.1487 13.8258 11.0272C13.8348 10.9174 13.5899 10.5239 13.1002 9.73692C12.5197 8.80395 12 7.39344 12 5.33331Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'bookmark'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 14L8 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47381 2.64057 3.72386 2.39052C3.97391 2.14048 4.31305 2 4.66667 2H11.3333C11.687 2 12.0261 2.14048 12.2761 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'calendar'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_420_4795)">
          <path
            d="M8 1V3M4 1V3M1.5 5H10.5M2.5 2H9.5C10.0523 2 10.5 2.44772 10.5 3V10C10.5 10.5523 10.0523 11 9.5 11H2.5C1.94772 11 1.5 10.5523 1.5 10V3C1.5 2.44772 1.94772 2 2.5 2Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_420_4795">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 1.33331V3.99998M5.33333 1.33331V3.99998M2 6.66665H14M3.33333 2.66665H12.6667C13.403 2.66665 14 3.2636 14 3.99998V13.3333C14 14.0697 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0697 2 13.3333V3.99998C2 3.2636 2.59695 2.66665 3.33333 2.66665Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'check'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 4L6 11.3333L2.66666 8"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 4L6 11.3333L2.66666 8"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'check-circle'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_216_305)">
          <path
            d="M11 5.53999V5.99999C10.9994 7.0782 10.6503 8.12733 10.0047 8.99091C9.35908 9.85448 8.45164 10.4862 7.41768 10.7919C6.38372 11.0977 5.27863 11.0609 4.26723 10.6873C3.25584 10.3136 2.39233 9.62304 1.80548 8.71853C1.21863 7.81401 0.939896 6.74403 1.01084 5.66815C1.08178 4.59228 1.4986 3.56816 2.19914 2.74853C2.89968 1.9289 3.84639 1.35768 4.89809 1.12007C5.9498 0.882448 7.05013 0.991162 8.035 1.42999M11 1.99999L6 7.00499L4.5 5.50499"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_216_305">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_29_265)">
          <path
            d="M14.6667 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89023 14.3893C8.51162 14.7969 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4187 1.25319 8.99205 1.34778 7.55755C1.44237 6.12305 1.99813 4.75756 2.93218 3.66473C3.86623 2.57189 5.12852 1.81027 6.53079 1.49344C7.93306 1.17662 9.40017 1.32157 10.7133 1.90668M14.6667 2.66668L8 9.34001L6 7.34001"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_29_265">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'chevron-down'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'chevron-left'">
      <svg
        v-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12L6 8L10 4"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'chevron-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'chevron-up'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10L8 6L4 10"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'chevron-selector-vertical'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66666 9.99999L7.99999 13.3333L11.3333 9.99999M4.66666 5.99999L7.99999 2.66666L11.3333 5.99999"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'clipboard'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 2.66668H12C12.3536 2.66668 12.6928 2.80715 12.9428 3.0572C13.1928 3.30725 13.3333 3.64639 13.3333 4.00001V13.3333C13.3333 13.687 13.1928 14.0261 12.9428 14.2762C12.6928 14.5262 12.3536 14.6667 12 14.6667H3.99999C3.64637 14.6667 3.30723 14.5262 3.05718 14.2762C2.80713 14.0261 2.66666 13.687 2.66666 13.3333V4.00001C2.66666 3.64639 2.80713 3.30725 3.05718 3.0572C3.30723 2.80715 3.64637 2.66668 3.99999 2.66668H5.33332M5.99999 1.33334H9.99999C10.3682 1.33334 10.6667 1.63182 10.6667 2.00001V3.33334C10.6667 3.70153 10.3682 4.00001 9.99999 4.00001H5.99999C5.6318 4.00001 5.33332 3.70153 5.33332 3.33334V2.00001C5.33332 1.63182 5.6318 1.33334 5.99999 1.33334Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'clock'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14_151)">
          <path
            d="M8.00001 4.00001V8.00001L10.6667 9.33334M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00001C1.33334 4.31811 4.31811 1.33334 8.00001 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_151">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'close'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3L3 9M3 3L9 9"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'close-circle'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_623_6932)">
          <path
            d="M7.5 4.5L4.5 7.5M4.5 4.5L7.5 7.5M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_623_6932">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1278_4537)">
          <path
            d="M10 6.00001L6.00001 10M6.00001 6.00001L10 10M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00001C1.33334 4.31811 4.31811 1.33334 8.00001 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1278_4537">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'code-01'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 12L14.6667 8L10.6667 4M5.33334 4L1.33334 8L5.33334 12"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'copy'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1028_3519)">
          <path
            d="M3.33334 9.99998C2.71209 9.99998 2.40146 9.99998 2.15643 9.89849C1.82973 9.76316 1.57016 9.50359 1.43484 9.17689C1.33334 8.93186 1.33334 8.62123 1.33334 7.99998V3.46665C1.33334 2.71991 1.33334 2.34654 1.47867 2.06133C1.6065 1.81044 1.81047 1.60647 2.06136 1.47864C2.34657 1.33331 2.71994 1.33331 3.46668 1.33331H8.00001C8.62126 1.33331 8.93189 1.33331 9.17692 1.43481C9.50362 1.57013 9.76319 1.8297 9.89852 2.1564C10 2.40143 10 2.71206 10 3.33331M8.13334 14.6666H12.5333C13.2801 14.6666 13.6534 14.6666 13.9387 14.5213C14.1895 14.3935 14.3935 14.1895 14.5214 13.9386C14.6667 13.6534 14.6667 13.28 14.6667 12.5333V8.13331C14.6667 7.38658 14.6667 7.01321 14.5214 6.72799C14.3935 6.47711 14.1895 6.27314 13.9387 6.1453C13.6534 5.99998 13.2801 5.99998 12.5333 5.99998H8.13334C7.38661 5.99998 7.01324 5.99998 6.72802 6.1453C6.47714 6.27314 6.27317 6.47711 6.14533 6.72799C6.00001 7.01321 6.00001 7.38658 6.00001 8.13331V12.5333C6.00001 13.28 6.00001 13.6534 6.14533 13.9386C6.27317 14.1895 6.47714 14.3935 6.72802 14.5213C7.01324 14.6666 7.38661 14.6666 8.13334 14.6666Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1028_3519">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'database'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 3.33331C14 4.43788 11.3137 5.33331 8 5.33331C4.68629 5.33331 2 4.43788 2 3.33331M14 3.33331C14 2.22874 11.3137 1.33331 8 1.33331C4.68629 1.33331 2 2.22874 2 3.33331M14 3.33331V12.6666C14 13.7733 11.3333 14.6666 8 14.6666C4.66667 14.6666 2 13.7733 2 12.6666V3.33331M14 7.99998C14 9.10665 11.3333 9.99998 8 9.99998C4.66667 9.99998 2 9.10665 2 7.99998"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'dataflow'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 13.3333H11.2C10.0799 13.3333 9.51984 13.3333 9.09202 13.1153C8.71569 12.9236 8.40973 12.6176 8.21799 12.2413C8 11.8135 8 11.2534 8 10.1333V5.86665C8 4.74654 8 4.18649 8.21799 3.75867C8.40973 3.38234 8.71569 3.07638 9.09202 2.88463C9.51984 2.66665 10.0799 2.66665 11.2 2.66665H11.3333M11.3333 13.3333C11.3333 14.0697 11.9303 14.6666 12.6667 14.6666C13.403 14.6666 14 14.0697 14 13.3333C14 12.5969 13.403 12 12.6667 12C11.9303 12 11.3333 12.5969 11.3333 13.3333ZM11.3333 2.66665C11.3333 3.40303 11.9303 3.99998 12.6667 3.99998C13.403 3.99998 14 3.40303 14 2.66665C14 1.93027 13.403 1.33331 12.6667 1.33331C11.9303 1.33331 11.3333 1.93027 11.3333 2.66665ZM4.66667 7.99998L11.3333 7.99998M4.66667 7.99998C4.66667 8.73636 4.06971 9.33331 3.33333 9.33331C2.59695 9.33331 2 8.73636 2 7.99998C2 7.2636 2.59695 6.66665 3.33333 6.66665C4.06971 6.66665 4.66667 7.2636 4.66667 7.99998ZM11.3333 7.99998C11.3333 8.73636 11.9303 9.33331 12.6667 9.33331C13.403 9.33331 14 8.73636 14 7.99998C14 7.2636 13.403 6.66665 12.6667 6.66665C11.9303 6.66665 11.3333 7.2636 11.3333 7.99998Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'download'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10L8 2"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'edit'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13.3333H14M11 2.33334C11.2652 2.06813 11.6249 1.91913 12 1.91913C12.1857 1.91913 12.3696 1.95571 12.5412 2.02678C12.7128 2.09785 12.8687 2.20202 13 2.33334C13.1313 2.46466 13.2355 2.62057 13.3066 2.79215C13.3776 2.96373 13.4142 3.14762 13.4142 3.33334C13.4142 3.51906 13.3776 3.70296 13.3066 3.87454C13.2355 4.04612 13.1313 4.20202 13 4.33334L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33334Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'edit-02'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_935_3470)">
          <path
            d="M7.33334 2.66666H4.53334C3.41324 2.66666 2.85319 2.66666 2.42536 2.88464C2.04904 3.07639 1.74308 3.38235 1.55133 3.75867C1.33334 4.1865 1.33334 4.74655 1.33334 5.86666V11.4667C1.33334 12.5868 1.33334 13.1468 1.55133 13.5746C1.74308 13.951 2.04904 14.2569 2.42536 14.4487C2.85319 14.6667 3.41324 14.6667 4.53334 14.6667H10.1333C11.2534 14.6667 11.8135 14.6667 12.2413 14.4487C12.6176 14.2569 12.9236 13.951 13.1154 13.5746C13.3333 13.1468 13.3333 12.5868 13.3333 11.4667V8.66666M5.33333 10.6667H6.44969C6.77581 10.6667 6.93887 10.6667 7.09232 10.6298C7.22837 10.5972 7.35843 10.5433 7.47772 10.4702C7.61228 10.3877 7.72758 10.2724 7.95818 10.0418L14.3333 3.66666C14.8856 3.11437 14.8856 2.21894 14.3333 1.66666C13.7811 1.11437 12.8856 1.11437 12.3333 1.66665L5.95817 8.04182C5.72756 8.27242 5.61226 8.38772 5.52981 8.52228C5.4567 8.64157 5.40283 8.77163 5.37017 8.90768C5.33333 9.06113 5.33333 9.22419 5.33333 9.55031V10.6667Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_935_3470">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'equal'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33334 6H12.6667M3.33334 10H12.6667"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'eye'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.61342 8.47543C1.52262 8.33167 1.47723 8.25979 1.45182 8.14892C1.43273 8.06565 1.43273 7.93431 1.45182 7.85104C1.47723 7.74017 1.52262 7.66829 1.61341 7.52453C2.36369 6.33654 4.59693 3.33331 8.00027 3.33331C11.4036 3.33331 13.6369 6.33654 14.3871 7.52453C14.4779 7.66829 14.5233 7.74017 14.5487 7.85104C14.5678 7.93431 14.5678 8.06565 14.5487 8.14892C14.5233 8.25979 14.4779 8.33167 14.3871 8.47543C13.6369 9.66342 11.4036 12.6666 8.00027 12.6666C4.59693 12.6666 2.36369 9.66342 1.61342 8.47543Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.00027 9.99998C9.10484 9.99998 10.0003 9.10455 10.0003 7.99998C10.0003 6.89541 9.10484 5.99998 8.00027 5.99998C6.8957 5.99998 6.00027 6.89541 6.00027 7.99998C6.00027 9.10455 6.8957 9.99998 8.00027 9.99998Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'file-attachment'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 4.66665V4.53331C13.3333 3.41321 13.3333 2.85316 13.1153 2.42533C12.9236 2.04901 12.6176 1.74305 12.2413 1.5513C11.8135 1.33331 11.2534 1.33331 10.1333 1.33331H5.86666C4.74655 1.33331 4.1865 1.33331 3.75868 1.5513C3.38235 1.74305 3.07639 2.04901 2.88464 2.42533C2.66666 2.85316 2.66666 3.41321 2.66666 4.53331V11.4666C2.66666 12.5868 2.66666 13.1468 2.88464 13.5746C3.07639 13.951 3.38235 14.2569 3.75868 14.4487C4.1865 14.6666 4.74655 14.6666 5.86666 14.6666H8.33332M12 12V8.33331C12 7.78103 12.4477 7.33331 13 7.33331C13.5523 7.33331 14 7.78103 14 8.33331V12C14 13.1045 13.1046 14 12 14C10.8954 14 9.99999 13.1045 9.99999 12V9.33331"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'file-check'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33332 1.513V4.26669C9.33332 4.64006 9.33332 4.82675 9.40599 4.96935C9.4699 5.0948 9.57189 5.19678 9.69733 5.2607C9.83994 5.33336 10.0266 5.33336 10.4 5.33336H13.1537M5.99999 10.6666L7.33332 12L10.3333 8.99998M9.33332 1.33331H5.86666C4.74655 1.33331 4.1865 1.33331 3.75868 1.5513C3.38235 1.74305 3.07639 2.04901 2.88464 2.42533C2.66666 2.85316 2.66666 3.41321 2.66666 4.53331V11.4666C2.66666 12.5868 2.66666 13.1468 2.88464 13.5746C3.07639 13.951 3.38235 14.2569 3.75868 14.4487C4.1865 14.6666 4.74655 14.6666 5.86666 14.6666H10.1333C11.2534 14.6666 11.8135 14.6666 12.2413 14.4487C12.6176 14.2569 12.9236 13.951 13.1153 13.5746C13.3333 13.1468 13.3333 12.5868 13.3333 11.4666V5.33331L9.33332 1.33331Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'file-text'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33332 1.33331H3.99999C3.64637 1.33331 3.30723 1.47379 3.05718 1.72384C2.80713 1.97389 2.66666 2.31302 2.66666 2.66665V13.3333C2.66666 13.6869 2.80713 14.0261 3.05718 14.2761C3.30723 14.5262 3.64637 14.6666 3.99999 14.6666H12C12.3536 14.6666 12.6928 14.5262 12.9428 14.2761C13.1928 14.0261 13.3333 13.6869 13.3333 13.3333V5.33331M9.33332 1.33331L13.3333 5.33331M9.33332 1.33331L9.33332 5.33331L13.3333 5.33331M10.6667 8.66665H5.33332M10.6667 11.3333H5.33332M6.66666 5.99998H5.33332"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'file-plus'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 6.99998V4.53331C13.3333 3.41321 13.3333 2.85316 13.1153 2.42533C12.9236 2.04901 12.6176 1.74305 12.2413 1.5513C11.8135 1.33331 11.2534 1.33331 10.1333 1.33331H5.86666C4.74655 1.33331 4.1865 1.33331 3.75868 1.5513C3.38235 1.74305 3.07639 2.04901 2.88464 2.42533C2.66666 2.85316 2.66666 3.41321 2.66666 4.53331V11.4666C2.66666 12.5868 2.66666 13.1468 2.88464 13.5746C3.07639 13.951 3.38235 14.2569 3.75868 14.4487C4.1865 14.6666 4.74655 14.6666 5.86666 14.6666H7.99999M9.33332 7.33331H5.33332M6.66666 9.99998H5.33332M10.6667 4.66665H5.33332M12 14V12M12 12V9.99998M12 12H9.99999M12 12H14"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'file-upload'">
      <svg
        v-if="size === 20"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 10.4167V5.66666C16.6667 4.26653 16.6667 3.56646 16.3942 3.03168C16.1545 2.56128 15.7721 2.17882 15.3017 1.93914C14.7669 1.66666 14.0668 1.66666 12.6667 1.66666H7.33334C5.93321 1.66666 5.23315 1.66666 4.69837 1.93914C4.22796 2.17882 3.84551 2.56128 3.60583 3.03168C3.33334 3.56646 3.33334 4.26653 3.33334 5.66666V14.3333C3.33334 15.7335 3.33334 16.4335 3.60583 16.9683C3.84551 17.4387 4.22796 17.8212 4.69837 18.0608C5.23315 18.3333 5.93317 18.3333 7.33323 18.3333H10.4167M11.6667 9.16666H6.66668M8.33334 12.5H6.66668M13.3333 5.83332H6.66668M12.5 15.8333L15 18.3333M15 18.3333L17.5 15.8333M15 18.3333V13.3333"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3333 8.33331V4.53331C13.3333 3.41321 13.3333 2.85316 13.1153 2.42533C12.9236 2.04901 12.6176 1.74305 12.2413 1.5513C11.8135 1.33331 11.2534 1.33331 10.1333 1.33331H5.86666C4.74655 1.33331 4.1865 1.33331 3.75868 1.5513C3.38235 1.74305 3.07639 2.04901 2.88464 2.42533C2.66666 2.85316 2.66666 3.41321 2.66666 4.53331V11.4666C2.66666 12.5868 2.66666 13.1468 2.88464 13.5746C3.07639 13.951 3.38235 14.2569 3.75868 14.4487C4.1865 14.6666 4.74652 14.6666 5.86656 14.6666H8.33332M9.33332 7.33331H5.33332M6.66666 9.99998H5.33332M10.6667 4.66665H5.33332M9.99999 12.6666L12 14.6666M12 14.6666L14 12.6666M12 14.6666V10.6666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'flag'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7.5C2 7.5 2.5 7 4 7C5.5 7 6.5 8 8 8C9.5 8 10 7.5 10 7.5V1.5C10 1.5 9.5 2 8 2C6.5 2 5.5 1 4 1C2.5 1 2 1.5 2 1.5V7.5ZM2 7.5V11"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.33"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66669 10C2.66669 10 3.33335 9.33334 5.33335 9.33334C7.33335 9.33334 8.66669 10.6667 10.6667 10.6667C12.6667 10.6667 13.3334 10 13.3334 10V2.00001C13.3334 2.00001 12.6667 2.66668 10.6667 2.66668C8.66669 2.66668 7.33335 1.33334 5.33335 1.33334C3.33335 1.33334 2.66669 2.00001 2.66669 2.00001V10ZM2.66669 10V14.6667"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'gift'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_274_1881)">
          <path
            d="M13.3333 8.00001V14.6667H2.66665V8.00001M7.99998 14.6667V4.66668M7.99998 4.66668H4.99998C4.55795 4.66668 4.13403 4.49108 3.82147 4.17852C3.50891 3.86596 3.33331 3.44204 3.33331 3.00001C3.33331 2.55798 3.50891 2.13406 3.82147 1.8215C4.13403 1.50894 4.55795 1.33334 4.99998 1.33334C7.33331 1.33334 7.99998 4.66668 7.99998 4.66668ZM7.99998 4.66668H11C11.442 4.66668 11.8659 4.49108 12.1785 4.17852C12.4911 3.86596 12.6666 3.44204 12.6666 3.00001C12.6666 2.55798 12.4911 2.13406 12.1785 1.8215C11.8659 1.50894 11.442 1.33334 11 1.33334C8.66665 1.33334 7.99998 4.66668 7.99998 4.66668ZM1.33331 4.66668H14.6666V8.00001H1.33331V4.66668Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_274_1881">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'help-circle'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_733_3458)">
          <path
            d="M6.05998 6.00001C6.21672 5.55446 6.52608 5.17875 6.93328 4.93943C7.34048 4.70012 7.81924 4.61264 8.28476 4.69248C8.75028 4.77233 9.17252 5.01436 9.4767 5.3757C9.78087 5.73703 9.94735 6.19436 9.94665 6.66668C9.94665 8.00001 7.94665 8.66668 7.94665 8.66668M7.99998 11.3333H8.00665M14.6666 8.00001C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00001C1.33331 4.31811 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.31811 14.6666 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_733_3458">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'hourglass'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99998 12.3333H9.99998M4.39998 1.33334H11.6C11.9733 1.33334 12.16 1.33334 12.3026 1.40601C12.4281 1.46992 12.5301 1.57191 12.594 1.69735C12.6666 1.83996 12.6666 2.02664 12.6666 2.40001V3.78302C12.6666 4.10914 12.6666 4.2722 12.6298 4.42565C12.5971 4.5617 12.5433 4.69176 12.4702 4.81106C12.3877 4.94561 12.2724 5.06091 12.0418 5.29151L10.0876 7.24576C9.82355 7.50977 9.69154 7.64178 9.64208 7.794C9.59858 7.92789 9.59858 8.07213 9.64208 8.20602C9.69154 8.35824 9.82355 8.49025 10.0876 8.75426L12.0418 10.7085C12.2724 10.9391 12.3877 11.0544 12.4702 11.189C12.5433 11.3083 12.5971 11.4383 12.6298 11.5744C12.6666 11.7278 12.6666 11.8909 12.6666 12.217V13.6C12.6666 13.9734 12.6666 14.1601 12.594 14.3027C12.5301 14.4281 12.4281 14.5301 12.3026 14.594C12.16 14.6667 11.9733 14.6667 11.6 14.6667H4.39998C4.02661 14.6667 3.83993 14.6667 3.69732 14.594C3.57188 14.5301 3.46989 14.4281 3.40598 14.3027C3.33331 14.1601 3.33331 13.9734 3.33331 13.6V12.217C3.33331 11.8909 3.33331 11.7278 3.37015 11.5744C3.40282 11.4383 3.45669 11.3083 3.52979 11.189C3.61225 11.0544 3.72755 10.9391 3.95815 10.7085L5.9124 8.75426C6.17641 8.49025 6.30842 8.35824 6.35787 8.20602C6.40138 8.07213 6.40138 7.92789 6.35787 7.794C6.30842 7.64178 6.17641 7.50977 5.9124 7.24576L3.95815 5.29151C3.72755 5.06091 3.61225 4.94561 3.52979 4.81106C3.45669 4.69176 3.40282 4.5617 3.37015 4.42565C3.33331 4.2722 3.33331 4.10914 3.33331 3.78302V2.40001C3.33331 2.02664 3.33331 1.83996 3.40598 1.69735C3.46989 1.57191 3.57188 1.46992 3.69732 1.40601C3.83993 1.33334 4.02661 1.33334 4.39998 1.33334Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'image'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14ZM3.33333 14L10.6667 6.66667L14 10M6.66667 5.66667C6.66667 6.21895 6.21895 6.66667 5.66667 6.66667C5.11438 6.66667 4.66667 6.21895 4.66667 5.66667C4.66667 5.11438 5.11438 4.66667 5.66667 4.66667C6.21895 4.66667 6.66667 5.11438 6.66667 5.66667Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'inbox'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6666 7.99999H10.6666L9.33331 9.99999H6.66665L5.33331 7.99999H1.33331M14.6666 7.99999V12C14.6666 12.3536 14.5262 12.6928 14.2761 12.9428C14.0261 13.1928 13.6869 13.3333 13.3333 13.3333H2.66665C2.31302 13.3333 1.97389 13.1928 1.72384 12.9428C1.47379 12.6928 1.33331 12.3536 1.33331 12V7.99999M14.6666 7.99999L12.3666 3.40666C12.2563 3.18451 12.0861 2.99757 11.8753 2.86684C11.6645 2.73612 11.4214 2.66679 11.1733 2.66666H4.82665C4.57859 2.66679 4.33549 2.73612 4.12468 2.86684C3.91386 2.99757 3.7437 3.18451 3.63331 3.40666L1.33331 7.99999"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'info'">
      <svg
        v-if="size === 14"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_185_4118)">
          <path
            d="M7.00008 9.33332V6.99999M7.00008 4.66666H7.00591M12.8334 6.99999C12.8334 10.2216 10.2217 12.8333 7.00008 12.8333C3.77842 12.8333 1.16675 10.2216 1.16675 6.99999C1.16675 3.77833 3.77842 1.16666 7.00008 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_185_4118">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_20_174)">
          <path
            d="M7.99998 10.6667V8.00001M7.99998 5.33334H8.00665M14.6666 8.00001C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00001C1.33331 4.31811 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.31811 14.6666 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_20_174">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'layers'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_289_2100)">
          <path
            d="M1.33331 11.3333L7.99998 14.6666L14.6666 11.3333M1.33331 7.99998L7.99998 11.3333L14.6666 7.99998M7.99998 1.33331L1.33331 4.66665L7.99998 7.99998L14.6666 4.66665L7.99998 1.33331Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_289_2100">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'link'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_31_222)">
          <path
            d="M6.66668 8.66666C6.95298 9.04942 7.31825 9.36612 7.73771 9.59529C8.15717 9.82446 8.62102 9.96074 9.09778 9.99489C9.57454 10.029 10.0531 9.96024 10.5009 9.79318C10.9487 9.62613 11.3554 9.36471 11.6933 9.02666L13.6933 7.02666C14.3005 6.39799 14.6365 5.55598 14.6289 4.68199C14.6213 3.808 14.2708 2.97196 13.6527 2.35394C13.0347 1.73591 12.1987 1.38535 11.3247 1.37775C10.4507 1.37016 9.60868 1.70614 8.98001 2.31333L7.83334 3.45333M9.33334 7.33333C9.04704 6.95058 8.68177 6.63388 8.26231 6.4047C7.84285 6.17553 7.37901 6.03925 6.90224 6.00511C6.42548 5.97096 5.94695 6.03975 5.49911 6.20681C5.05127 6.37387 4.6446 6.63528 4.30668 6.97333L2.30668 8.97333C1.69948 9.602 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.6461C2.96531 14.2641 3.80135 14.6147 4.67534 14.6222C5.54933 14.6298 6.39134 14.2939 7.02001 13.6867L8.16001 12.5467"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_222">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'lightbulb'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2326_100)">
          <path
            d="M6.66665 11.7724V13.3333C6.66665 14.0697 7.2636 14.6666 7.99998 14.6666C8.73636 14.6666 9.33331 14.0697 9.33331 13.3333V11.7724M7.99998 1.33331V1.99998M1.99998 7.99998H1.33331M3.66665 3.66665L3.26658 3.26658M12.3333 3.66665L12.7335 3.26658M14.6666 7.99998H14M12 7.99998C12 10.2091 10.2091 12 7.99998 12C5.79084 12 3.99998 10.2091 3.99998 7.99998C3.99998 5.79084 5.79084 3.99998 7.99998 3.99998C10.2091 3.99998 12 5.79084 12 7.99998Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2326_100">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'loading'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_623_6937)">
          <path
            d="M6 1.125V2.375M6 9V11M2.875 6H1.125M10.625 6H9.875M9.22855 9.22855L8.875 8.875M9.33211 2.70789L8.625 3.415M2.46079 9.53921L3.875 8.125M2.56434 2.60434L3.625 3.665"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_623_6937">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1.5V3.16667M8 12V14.6667M3.83333 8H1.5M14.1667 8H13.1667M12.3047 12.3047L11.8333 11.8333M12.4428 3.61052L11.5 4.55333M3.28105 12.719L5.16667 10.8333M3.41912 3.47245L4.83333 4.88667"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'log-out'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8L6 8"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'mail'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6666 4.00002C14.6666 3.26669 14.0666 2.66669 13.3333 2.66669H2.66665C1.93331 2.66669 1.33331 3.26669 1.33331 4.00002M14.6666 4.00002V12C14.6666 12.7334 14.0666 13.3334 13.3333 13.3334H2.66665C1.93331 13.3334 1.33331 12.7334 1.33331 12V4.00002M14.6666 4.00002L7.99998 8.66669L1.33331 4.00002"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'menu'">
      <svg
        v-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21M3 6H21M3 18H21"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8H14M2 4H14M2 12H14"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'message-circle'">
      <svg
        v-if="size === 14"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 6.70835C12.252 7.47827 12.0721 8.23778 11.725 8.92502C11.3134 9.74853 10.6807 10.4412 9.89768 10.9254C9.11467 11.4097 8.21231 11.6663 7.29167 11.6667C6.52174 11.6687 5.76223 11.4888 5.075 11.1417L1.75 12.25L2.85833 8.92502C2.51121 8.23778 2.33133 7.47827 2.33333 6.70835C2.33369 5.78771 2.59036 4.88535 3.07459 4.10234C3.55882 3.31933 4.25148 2.6866 5.075 2.27502C5.76223 1.92789 6.52174 1.74801 7.29167 1.75002H7.58333C8.7992 1.8171 9.94761 2.33029 10.8087 3.19135C11.6697 4.05241 12.1829 5.20081 12.25 6.41668V6.70835Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'message-circle-02'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_376_2459)">
          <path
            d="M4.06289 7.48584C4.02145 7.2188 3.99995 6.94522 3.99995 6.66665C3.99995 3.72113 6.40348 1.33331 9.36838 1.33331C12.3333 1.33331 14.7368 3.72113 14.7368 6.66665C14.7368 7.33203 14.6141 7.96895 14.3901 8.55632C14.3435 8.6783 14.3203 8.7393 14.3097 8.78692C14.2992 8.8341 14.2952 8.8673 14.2941 8.91561C14.2929 8.96438 14.2995 9.0181 14.3128 9.12553L14.5811 11.3057C14.6102 11.5417 14.6247 11.6597 14.5855 11.7455C14.5511 11.8206 14.49 11.8803 14.414 11.913C14.3274 11.9503 14.2097 11.933 13.9745 11.8985L11.8509 11.5873C11.7401 11.571 11.6846 11.5629 11.6341 11.5632C11.5842 11.5634 11.5496 11.5671 11.5007 11.5774C11.4513 11.5878 11.3882 11.6114 11.262 11.6587C10.6731 11.8793 10.0349 12 9.36838 12C9.08958 12 8.81575 11.9789 8.54842 11.9382M5.0877 14.6666C7.0643 14.6666 8.66665 13.025 8.66665 11C8.66665 8.97494 7.0643 7.33331 5.0877 7.33331C3.1111 7.33331 1.50875 8.97494 1.50875 11C1.50875 11.407 1.5735 11.7986 1.69301 12.1645C1.74353 12.3191 1.76879 12.3964 1.77708 12.4493C1.78574 12.5044 1.78726 12.5354 1.78403 12.5911C1.78095 12.6445 1.76759 12.7048 1.74088 12.8255L1.33331 14.6666L3.32985 14.394C3.43882 14.3791 3.49331 14.3717 3.54089 14.372C3.59099 14.3723 3.61758 14.375 3.66672 14.3848C3.71338 14.3941 3.78275 14.4186 3.92149 14.4676C4.28704 14.5966 4.67938 14.6666 5.0877 14.6666Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_376_2459">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'minus'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33331 8H12.6666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'monitor'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33331 14H10.6666M7.99998 11.3333V14M4.53331 11.3333H11.4666C12.5868 11.3333 13.1468 11.3333 13.5746 11.1153C13.951 10.9236 14.2569 10.6176 14.4487 10.2413C14.6666 9.81349 14.6666 9.25344 14.6666 8.13333V5.2C14.6666 4.0799 14.6666 3.51984 14.4487 3.09202C14.2569 2.71569 13.951 2.40973 13.5746 2.21799C13.1468 2 12.5868 2 11.4666 2H4.53331C3.41321 2 2.85316 2 2.42533 2.21799C2.04901 2.40973 1.74305 2.71569 1.5513 3.09202C1.33331 3.51984 1.33331 4.0799 1.33331 5.2V8.13333C1.33331 9.25344 1.33331 9.81349 1.5513 10.2413C1.74305 10.6176 2.04901 10.9236 2.42533 11.1153C2.85316 11.3333 3.41321 11.3333 4.53331 11.3333Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'more-horizontal'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00002 8.66665C8.36821 8.66665 8.66669 8.36817 8.66669 7.99998C8.66669 7.63179 8.36821 7.33331 8.00002 7.33331C7.63183 7.33331 7.33335 7.63179 7.33335 7.99998C7.33335 8.36817 7.63183 8.66665 8.00002 8.66665Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.6667 8.66665C13.0349 8.66665 13.3334 8.36817 13.3334 7.99998C13.3334 7.63179 13.0349 7.33331 12.6667 7.33331C12.2985 7.33331 12 7.63179 12 7.99998C12 8.36817 12.2985 8.66665 12.6667 8.66665Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33335 8.66665C3.70154 8.66665 4.00002 8.36817 4.00002 7.99998C4.00002 7.63179 3.70154 7.33331 3.33335 7.33331C2.96516 7.33331 2.66669 7.63179 2.66669 7.99998C2.66669 8.36817 2.96516 8.66665 3.33335 8.66665Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'more-vertical'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99998 8.66669C8.36817 8.66669 8.66665 8.36821 8.66665 8.00002C8.66665 7.63183 8.36817 7.33335 7.99998 7.33335C7.63179 7.33335 7.33331 7.63183 7.33331 8.00002C7.33331 8.36821 7.63179 8.66669 7.99998 8.66669Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99998 4.00002C8.36817 4.00002 8.66665 3.70154 8.66665 3.33335C8.66665 2.96516 8.36817 2.66669 7.99998 2.66669C7.63179 2.66669 7.33331 2.96516 7.33331 3.33335C7.33331 3.70154 7.63179 4.00002 7.99998 4.00002Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99998 13.3334C8.36817 13.3334 8.66665 13.0349 8.66665 12.6667C8.66665 12.2985 8.36817 12 7.99998 12C7.63179 12 7.33331 12.2985 7.33331 12.6667C7.33331 13.0349 7.63179 13.3334 7.99998 13.3334Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'paperclip'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_123_362)">
          <path
            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97018 4.3867 9.71999L10.0467 4.06665"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_362">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'passport'">
      <svg
        v-if="size === 20"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33331 13.3334H11.6666M7.33331 18.3334H12.6666C14.0668 18.3334 14.7668 18.3334 15.3016 18.0609C15.772 17.8212 16.1545 17.4387 16.3942 16.9683C16.6666 16.4336 16.6666 15.7335 16.6666 14.3334V5.66669C16.6666 4.26656 16.6666 3.56649 16.3942 3.03171C16.1545 2.56131 15.772 2.17885 15.3016 1.93917C14.7668 1.66669 14.0668 1.66669 12.6666 1.66669H7.33331C5.93318 1.66669 5.23312 1.66669 4.69834 1.93917C4.22793 2.17885 3.84548 2.56131 3.6058 3.03171C3.33331 3.56649 3.33331 4.26656 3.33331 5.66669V14.3334C3.33331 15.7335 3.33331 16.4336 3.6058 16.9683C3.84548 17.4387 4.22793 17.8212 4.69834 18.0609C5.23312 18.3334 5.93318 18.3334 7.33331 18.3334ZM12.5 7.50002C12.5 8.88073 11.3807 10 9.99998 10C8.61927 10 7.49998 8.88073 7.49998 7.50002C7.49998 6.11931 8.61927 5.00002 9.99998 5.00002C11.3807 5.00002 12.5 6.11931 12.5 7.50002Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66669 10.6666H9.33335M5.86669 14.6666H10.1334C11.2535 14.6666 11.8135 14.6666 12.2413 14.4487C12.6177 14.2569 12.9236 13.951 13.1154 13.5746C13.3334 13.1468 13.3334 12.5868 13.3334 11.4666V4.53331C13.3334 3.41321 13.3334 2.85316 13.1154 2.42533C12.9236 2.04901 12.6177 1.74305 12.2413 1.5513C11.8135 1.33331 11.2535 1.33331 10.1334 1.33331H5.86669C4.74658 1.33331 4.18653 1.33331 3.75871 1.5513C3.38238 1.74305 3.07642 2.04901 2.88467 2.42533C2.66669 2.85316 2.66669 3.41321 2.66669 4.53331V11.4666C2.66669 12.5868 2.66669 13.1468 2.88467 13.5746C3.07642 13.951 3.38238 14.2569 3.75871 14.4487C4.18653 14.6666 4.74658 14.6666 5.86669 14.6666ZM10 5.99998C10 7.10455 9.10459 7.99998 8.00002 7.99998C6.89545 7.99998 6.00002 7.10455 6.00002 5.99998C6.00002 4.89541 6.89545 3.99998 8.00002 3.99998C9.10459 3.99998 10 4.89541 10 5.99998Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'pause'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1110_3523)">
          <path
            d="M6.33331 10V6.00001M9.66665 10V6.00001M14.6666 8.00001C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00001C1.33331 4.31811 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.31811 14.6666 8.00001Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1110_3523">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'phone'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_443_3358)">
          <path
            d="M14.6666 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.6301 13.2133 14.6133C11.1619 14.3904 9.19131 13.6894 7.45998 12.5667C5.84919 11.5431 4.48353 10.1775 3.45998 8.56668C2.33329 6.82748 1.63214 4.84734 1.41331 2.78668C1.39665 2.60233 1.41856 2.41652 1.47764 2.2411C1.53673 2.06567 1.63169 1.90447 1.75649 1.76776C1.88128 1.63105 2.03318 1.52182 2.2025 1.44703C2.37183 1.37224 2.55487 1.33352 2.73998 1.33335H4.73998C5.06351 1.33016 5.37717 1.44473 5.62248 1.6557C5.8678 1.86667 6.02803 2.15964 6.07331 2.48001C6.15772 3.12006 6.31428 3.7485 6.53998 4.35335C6.62967 4.59196 6.64908 4.85129 6.59591 5.1006C6.54274 5.34991 6.41922 5.57875 6.23998 5.76001L5.39331 6.60668C6.34235 8.27571 7.72428 9.65764 9.39331 10.6067L10.24 9.76001C10.4212 9.58077 10.6501 9.45725 10.8994 9.40408C11.1487 9.35091 11.408 9.37032 11.6466 9.46001C12.2515 9.68571 12.8799 9.84227 13.52 9.92668C13.8438 9.97237 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6666 11.28Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_443_3358">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'plus'">
      <svg
        v-if="size === 40"
        width="40"
        height="40"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99998 3.33334V12.6667M3.33331 8.00001H12.6666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99998 3.33334V12.6667M3.33331 8.00001H12.6666"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'qr-code'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66667 8.00001H8V11.3333M2.00667 8.00001H2M5.34 11.3333H5.33333M8.00667 14H8M14.0067 8.00001H14M2 11.3333H3M10.3333 8.00001H11.6667M2 14H5.33333M8 1.33334V5.33334M11.7333 14H12.9333C13.3067 14 13.4934 14 13.636 13.9273C13.7614 13.8634 13.8634 13.7614 13.9273 13.636C14 13.4934 14 13.3067 14 12.9333V11.7333C14 11.36 14 11.1733 13.9273 11.0307C13.8634 10.9052 13.7614 10.8033 13.636 10.7393C13.4934 10.6667 13.3067 10.6667 12.9333 10.6667H11.7333C11.36 10.6667 11.1733 10.6667 11.0307 10.7393C10.9052 10.8033 10.8032 10.9052 10.7393 11.0307C10.6667 11.1733 10.6667 11.36 10.6667 11.7333V12.9333C10.6667 13.3067 10.6667 13.4934 10.7393 13.636C10.8032 13.7614 10.9052 13.8634 11.0307 13.9273C11.1733 14 11.36 14 11.7333 14ZM11.7333 5.33334H12.9333C13.3067 5.33334 13.4934 5.33334 13.636 5.26068C13.7614 5.19677 13.8634 5.09478 13.9273 4.96934C14 4.82673 14 4.64005 14 4.26668V3.06668C14 2.69331 14 2.50662 13.9273 2.36402C13.8634 2.23858 13.7614 2.13659 13.636 2.07267C13.4934 2.00001 13.3067 2.00001 12.9333 2.00001H11.7333C11.36 2.00001 11.1733 2.00001 11.0307 2.07267C10.9052 2.13659 10.8032 2.23858 10.7393 2.36402C10.6667 2.50662 10.6667 2.69331 10.6667 3.06668V4.26668C10.6667 4.64005 10.6667 4.82673 10.7393 4.96934C10.8032 5.09478 10.9052 5.19677 11.0307 5.26068C11.1733 5.33334 11.36 5.33334 11.7333 5.33334ZM3.06667 5.33334H4.26667C4.64004 5.33334 4.82672 5.33334 4.96933 5.26068C5.09477 5.19677 5.19676 5.09478 5.26067 4.96934C5.33333 4.82673 5.33333 4.64005 5.33333 4.26668V3.06668C5.33333 2.69331 5.33333 2.50662 5.26067 2.36402C5.19676 2.23858 5.09477 2.13659 4.96933 2.07267C4.82672 2.00001 4.64004 2.00001 4.26667 2.00001H3.06667C2.6933 2.00001 2.50661 2.00001 2.36401 2.07267C2.23856 2.13659 2.13658 2.23858 2.07266 2.36402C2 2.50662 2 2.69331 2 3.06668V4.26668C2 4.64005 2 4.82673 2.07266 4.96934C2.13658 5.09478 2.23856 5.19677 2.36401 5.26068C2.50661 5.33334 2.6933 5.33334 3.06667 5.33334Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'refresh-cw'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_409_7312)">
          <path
            d="M10.5 5C10.5 5 9.49751 3.63411 8.68308 2.81912C7.86866 2.00413 6.7432 1.5 5.5 1.5C3.01472 1.5 1 3.51472 1 6C1 8.48528 3.01472 10.5 5.5 10.5C7.55155 10.5 9.28244 9.12714 9.82412 7.25M10.5 5V2M10.5 5H7.5"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_409_7312">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6.66667C14 6.66667 12.6633 4.84548 11.5774 3.75883C10.4915 2.67218 8.99091 2 7.33331 2C4.0196 2 1.33331 4.68629 1.33331 8C1.33331 11.3137 4.0196 14 7.33331 14C10.0687 14 12.3766 12.1695 13.0988 9.66667M14 6.66667V2.66667M14 6.66667H9.99998"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'search'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'settings'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_193_1263)">
          <path
            d="M8.00002 9.99999C9.10459 9.99999 10 9.10456 10 7.99999C10 6.89542 9.10459 5.99999 8.00002 5.99999C6.89545 5.99999 6.00002 6.89542 6.00002 7.99999C6.00002 9.10456 6.89545 9.99999 8.00002 9.99999Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9334 9.99999C12.8446 10.2011 12.8181 10.4241 12.8574 10.6404C12.8966 10.8566 12.9997 11.0562 13.1534 11.2133L13.1934 11.2533C13.3173 11.3772 13.4157 11.5242 13.4828 11.6861C13.5499 11.8479 13.5844 12.0214 13.5844 12.1967C13.5844 12.3719 13.5499 12.5454 13.4828 12.7072C13.4157 12.8691 13.3173 13.0162 13.1934 13.14C13.0695 13.264 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.531 12.25 13.531C12.0748 13.531 11.9013 13.4965 11.7394 13.4294C11.5776 13.3623 11.4305 13.264 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7648 10.2544 12.7912 10.0534 12.88C9.85617 12.9645 9.68801 13.1048 9.56956 13.2837C9.45111 13.4625 9.38754 13.6721 9.38669 13.8867V14C9.38669 14.3536 9.24621 14.6928 8.99616 14.9428C8.74611 15.1928 8.40698 15.3333 8.05335 15.3333C7.69973 15.3333 7.36059 15.1928 7.11055 14.9428C6.8605 14.6928 6.72002 14.3536 6.72002 14V13.94C6.71486 13.7193 6.64343 13.5053 6.51503 13.3258C6.38662 13.1463 6.20718 13.0095 6.00002 12.9333C5.79894 12.8446 5.57589 12.8181 5.35963 12.8573C5.14336 12.8965 4.94381 12.9996 4.78669 13.1533L4.74669 13.1933C4.62286 13.3173 4.4758 13.4156 4.31394 13.4827C4.15208 13.5498 3.97857 13.5844 3.80335 13.5844C3.62813 13.5844 3.45463 13.5498 3.29277 13.4827C3.1309 13.4156 2.98385 13.3173 2.86002 13.1933C2.73605 13.0695 2.63771 12.9224 2.57061 12.7606C2.50351 12.5987 2.46897 12.4252 2.46897 12.25C2.46897 12.0748 2.50351 11.9013 2.57061 11.7394C2.63771 11.5775 2.73605 11.4305 2.86002 11.3067L2.90002 11.2667C3.05371 11.1095 3.15681 10.91 3.19602 10.6937C3.23524 10.4775 3.20876 10.2544 3.12002 10.0533C3.03551 9.85614 2.89519 9.68798 2.71633 9.56953C2.53747 9.45108 2.32788 9.38751 2.11335 9.38666H2.00002C1.6464 9.38666 1.30726 9.24618 1.05721 8.99613C0.807163 8.74608 0.666687 8.40695 0.666687 8.05332C0.666687 7.6997 0.807163 7.36056 1.05721 7.11051C1.30726 6.86047 1.6464 6.71999 2.00002 6.71999H2.06002C2.28068 6.71483 2.49469 6.6434 2.67422 6.515C2.85375 6.38659 2.9905 6.20715 3.06669 5.99999C3.15543 5.79891 3.1819 5.57586 3.14269 5.3596C3.10348 5.14333 3.00038 4.94378 2.84669 4.78666L2.80669 4.74666C2.68272 4.62283 2.58437 4.47577 2.51727 4.31391C2.45018 4.15205 2.41564 3.97854 2.41564 3.80332C2.41564 3.6281 2.45018 3.4546 2.51727 3.29274C2.58437 3.13087 2.68272 2.98382 2.80669 2.85999C2.93052 2.73602 3.07757 2.63768 3.23943 2.57058C3.4013 2.50348 3.5748 2.46894 3.75002 2.46894C3.92524 2.46894 4.09874 2.50348 4.26061 2.57058C4.42247 2.63768 4.56952 2.73602 4.69335 2.85999L4.73335 2.89999C4.89047 3.05368 5.09003 3.15678 5.30629 3.19599C5.52256 3.23521 5.74561 3.20873 5.94669 3.11999H6.00002C6.1972 3.03548 6.36537 2.89516 6.48382 2.7163C6.60227 2.53744 6.66583 2.32785 6.66669 2.11332V1.99999C6.66669 1.64637 6.80716 1.30723 7.05721 1.05718C7.30726 0.807132 7.6464 0.666656 8.00002 0.666656C8.35364 0.666656 8.69278 0.807132 8.94283 1.05718C9.19288 1.30723 9.33335 1.64637 9.33335 1.99999V2.05999C9.33421 2.27451 9.39778 2.48411 9.51623 2.66297C9.63468 2.84183 9.80284 2.98215 10 3.06666C10.2011 3.1554 10.4241 3.18187 10.6404 3.14266C10.8567 3.10345 11.0562 3.00035 11.2134 2.84666L11.2534 2.80666C11.3772 2.68269 11.5242 2.58434 11.6861 2.51724C11.848 2.45014 12.0215 2.41561 12.1967 2.41561C12.3719 2.41561 12.5454 2.45014 12.7073 2.51724C12.8691 2.58434 13.0162 2.68269 13.14 2.80666C13.264 2.93049 13.3623 3.07754 13.4294 3.2394C13.4965 3.40127 13.5311 3.57477 13.5311 3.74999C13.5311 3.92521 13.4965 4.09871 13.4294 4.26058C13.3623 4.42244 13.264 4.56949 13.14 4.69332L13.1 4.73332C12.9463 4.89044 12.8432 5.09 12.804 5.30626C12.7648 5.52253 12.7913 5.74558 12.88 5.94666V5.99999C12.9645 6.19717 13.1049 6.36533 13.2837 6.48379C13.4626 6.60224 13.6722 6.6658 13.8867 6.66666H14C14.3536 6.66666 14.6928 6.80713 14.9428 7.05718C15.1929 7.30723 15.3334 7.64637 15.3334 7.99999C15.3334 8.35361 15.1929 8.69275 14.9428 8.9428C14.6928 9.19285 14.3536 9.33332 14 9.33332H13.94C13.7255 9.33418 13.5159 9.39774 13.337 9.5162C13.1582 9.63465 13.0179 9.80281 12.9334 9.99999Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_193_1263">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'share'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8609 8.40495C14.0237 8.26545 14.105 8.1957 14.1348 8.1127C14.161 8.03985 14.161 7.96017 14.1348 7.88732C14.105 7.80432 14.0237 7.73457 13.8609 7.59507L8.21375 2.75466C7.9336 2.51453 7.79353 2.39446 7.67493 2.39152C7.57186 2.38896 7.47341 2.43425 7.40828 2.51416C7.33333 2.60612 7.33333 2.79061 7.33333 3.15959V6.0231C5.91021 6.27207 4.60773 6.99318 3.63981 8.07592C2.58455 9.25635 2.00082 10.784 2 12.3673V12.7753C2.69956 11.9326 3.573 11.251 4.56051 10.7773C5.43113 10.3596 6.37228 10.1122 7.33333 10.047V12.8404C7.33333 13.2094 7.33333 13.3939 7.40828 13.4859C7.47341 13.5658 7.57186 13.6111 7.67493 13.6085C7.79353 13.6056 7.9336 13.4855 8.21375 13.2454L13.8609 8.40495Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'slash'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_623_6952)">
          <path
            d="M2.465 2.465L9.535 9.535M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_623_6952">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_143_692)">
          <path
            d="M3.28665 3.28665L12.7133 12.7133M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_692">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'slash-divider'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 14.5L11 1.5"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'slider'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_320_2117)">
          <path
            d="M2.66669 14V9.33333M2.66669 6.66667V2M8.00002 14V8M8.00002 5.33333V2M13.3334 14V10.6667M13.3334 8V2M0.666687 9.33333H4.66669M6.00002 5.33333H10M11.3334 10.6667H15.3334"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_320_2117">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'star'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1123_3023)">
          <path
            d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1123_3023">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99998 1.33331L10.06 5.50665L14.6666 6.17998L11.3333 9.42665L12.12 14.0133L7.99998 11.8466L3.87998 14.0133L4.66665 9.42665L1.33331 6.17998L5.93998 5.50665L7.99998 1.33331Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'star-02'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1010_3523)">
          <path
            d="M2.99998 14.6666V11.3333M2.99998 4.66665V1.33331M1.33331 2.99998H4.66665M1.33331 13H4.66665M8.66665 1.99998L7.51053 5.00589C7.32252 5.49471 7.22852 5.73912 7.08233 5.9447C6.95277 6.12691 6.79358 6.28611 6.61137 6.41567C6.40578 6.56185 6.16137 6.65585 5.67255 6.84386L2.66665 7.99998L5.67255 9.1561C6.16137 9.34411 6.40578 9.43811 6.61137 9.58429C6.79358 9.71385 6.95277 9.87305 7.08233 10.0553C7.22852 10.2608 7.32252 10.5053 7.51053 10.9941L8.66665 14L9.82276 10.9941C10.0108 10.5053 10.1048 10.2608 10.251 10.0553C10.3805 9.87305 10.5397 9.71385 10.7219 9.58429C10.9275 9.43811 11.1719 9.34411 11.6607 9.1561L14.6666 7.99998L11.6607 6.84386C11.1719 6.65585 10.9275 6.56185 10.7219 6.41567C10.5397 6.28611 10.3805 6.12691 10.251 5.9447C10.1048 5.73912 10.0108 5.49471 9.82276 5.00589L8.66665 1.99998Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1010_3523">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'tag'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1380_4541)">
          <path
            d="M5.33331 5.33331H5.33998M1.33331 3.46665L1.33331 6.44966C1.33331 6.77578 1.33331 6.93884 1.37015 7.09229C1.40282 7.22834 1.45669 7.35839 1.52979 7.47769C1.61225 7.61225 1.72755 7.72755 1.95815 7.95815L7.07057 13.0706C7.8626 13.8626 8.25862 14.2586 8.71528 14.407C9.11696 14.5375 9.54966 14.5375 9.95135 14.407C10.408 14.2586 10.804 13.8626 11.5961 13.0706L13.0706 11.5961C13.8626 10.804 14.2586 10.408 14.407 9.95135C14.5375 9.54966 14.5375 9.11696 14.407 8.71528C14.2586 8.25862 13.8626 7.8626 13.0706 7.07057L7.95815 1.95815C7.72755 1.72755 7.61225 1.61225 7.47769 1.52979C7.35839 1.45669 7.22834 1.40282 7.09229 1.37015C6.93884 1.33331 6.77578 1.33331 6.44966 1.33331L3.46665 1.33331C2.71991 1.33331 2.34654 1.33331 2.06133 1.47864C1.81044 1.60647 1.60647 1.81044 1.47864 2.06133C1.33331 2.34654 1.33331 2.71991 1.33331 3.46665ZM5.66665 5.33331C5.66665 5.51741 5.51741 5.66665 5.33331 5.66665C5.14922 5.66665 4.99998 5.51741 4.99998 5.33331C4.99998 5.14922 5.14922 4.99998 5.33331 4.99998C5.51741 4.99998 5.66665 5.14922 5.66665 5.33331Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1380_4541">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'toggle'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 11.3334H4.66665C2.8257 11.3334 1.33331 9.84097 1.33331 8.00002C1.33331 6.15907 2.8257 4.66669 4.66665 4.66669H11.3333M11.3333 11.3334C13.1743 11.3334 14.6666 9.84097 14.6666 8.00002C14.6666 6.15907 13.1743 4.66669 11.3333 4.66669M11.3333 11.3334C9.49236 11.3334 7.99998 9.84097 7.99998 8.00002C7.99998 6.15907 9.49236 4.66669 11.3333 4.66669"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'trash'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 3.99998H3.33333M3.33333 3.99998H14M3.33333 3.99998L3.33333 13.3333C3.33333 13.6869 3.47381 14.0261 3.72386 14.2761C3.97391 14.5262 4.31304 14.6666 4.66667 14.6666H11.3333C11.687 14.6666 12.0261 14.5262 12.2761 14.2761C12.5262 14.0261 12.6667 13.6869 12.6667 13.3333V3.99998M5.33333 3.99998V2.66665C5.33333 2.31302 5.47381 1.97389 5.72386 1.72384C5.97391 1.47379 6.31304 1.33331 6.66667 1.33331H9.33333C9.68696 1.33331 10.0261 1.47379 10.2761 1.72384C10.5262 1.97389 10.6667 2.31302 10.6667 2.66665V3.99998M6.66667 7.33331V11.3333M9.33333 7.33331V11.3333"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'upload'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_339_2098)">
          <path
            d="M10.6666 10.6667L7.99997 8.00001M7.99997 8.00001L5.33331 10.6667M7.99997 8.00001L7.99997 14M13.5933 12.26C14.2435 11.9055 14.7572 11.3446 15.0532 10.6658C15.3492 9.98692 15.4108 9.22883 15.2281 8.51114C15.0454 7.79344 14.629 7.15702 14.0444 6.70231C13.4599 6.2476 12.7405 6.0005 12 6.00001H11.16C10.9582 5.2195 10.5821 4.4949 10.0599 3.88067C9.5378 3.26644 8.8832 2.77858 8.14537 2.45375C7.40754 2.12892 6.60567 1.97558 5.80005 2.00526C4.99443 2.03495 4.20602 2.24688 3.49409 2.62512C2.78216 3.00336 2.16525 3.53808 1.68972 4.18906C1.2142 4.84005 0.892434 5.59037 0.748627 6.38361C0.60482 7.17684 0.64271 7.99236 0.859449 8.76885C1.07619 9.54534 1.46613 10.2626 1.99997 10.8667"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_339_2098">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'user'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3334 14V12.6667C13.3334 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33335C4.62611 10 3.94783 10.281 3.44774 10.781C2.94764 11.2811 2.66669 11.9594 2.66669 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47278 7.33333 8.00002 7.33333C6.52726 7.33333 5.33335 6.13943 5.33335 4.66667C5.33335 3.19391 6.52726 2 8.00002 2C9.47278 2 10.6667 3.19391 10.6667 4.66667Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'user-right'">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6666 14L14.6666 12M14.6666 12L12.6666 10M14.6666 12H10.6666M7.99998 10.3333H4.99998C4.0696 10.3333 3.60442 10.3333 3.22588 10.4482C2.37362 10.7067 1.70667 11.3736 1.44814 12.2259C1.33331 12.6044 1.33331 13.0696 1.33331 14M9.66665 5C9.66665 6.65685 8.3235 8 6.66665 8C5.00979 8 3.66665 6.65685 3.66665 5C3.66665 3.34315 5.00979 2 6.66665 2C8.3235 2 9.66665 3.34315 9.66665 5Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>

    <template v-if="icon === 'users'">
      <svg
        v-if="size === 12"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_708_814)">
          <path
            d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H2.5C1.96957 7.5 1.46086 7.71071 1.08579 8.08579C0.710714 8.46086 0.5 8.96957 0.5 9.5V10.5M11.5 10.5V9.5C11.4997 9.05686 11.3522 8.62639 11.0807 8.27616C10.8092 7.92593 10.4291 7.67578 10 7.565M8 1.565C8.43021 1.67515 8.81152 1.92535 9.08382 2.27616C9.35612 2.62696 9.50392 3.05841 9.50392 3.5025C9.50392 3.94659 9.35612 4.37804 9.08382 4.72884C8.81152 5.07965 8.43021 5.32985 8 5.44M6.5 3.5C6.5 4.60457 5.60457 5.5 4.5 5.5C3.39543 5.5 2.5 4.60457 2.5 3.5C2.5 2.39543 3.39543 1.5 4.5 1.5C5.60457 1.5 6.5 2.39543 6.5 3.5Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_708_814">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_143_686)">
          <path
            d="M11.3334 14V12.6667C11.3334 11.9594 11.0524 11.2811 10.5523 10.781C10.0522 10.281 9.37393 10 8.66669 10H3.33335C2.62611 10 1.94783 10.281 1.44774 10.781C0.947639 11.2811 0.666687 11.9594 0.666687 12.6667V14M15.3334 14V12.6667C15.3329 12.0758 15.1363 11.5018 14.7743 11.0349C14.4123 10.5679 13.9054 10.2344 13.3334 10.0867M10.6667 2.08667C11.2403 2.23353 11.7487 2.56713 12.1118 3.03487C12.4748 3.50261 12.6719 4.07789 12.6719 4.67C12.6719 5.26211 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25333M8.66669 4.66667C8.66669 6.13943 7.47278 7.33333 6.00002 7.33333C4.52726 7.33333 3.33335 6.13943 3.33335 4.66667C3.33335 3.19391 4.52726 2 6.00002 2C7.47278 2 8.66669 3.19391 8.66669 4.66667Z"
            :stroke="
              color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_686">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </template>

    <template v-if="icon === 'users-plus'">
      <svg
        v-if="size === 24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 21V15M16 18H22M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6666 14V10M10.6666 12H14.6666M7.99998 10H5.33331C4.0908 10 3.46955 10 2.97949 10.203C2.32608 10.4736 1.80695 10.9928 1.5363 11.6462C1.33331 12.1362 1.33331 12.7575 1.33331 14M10.3333 2.19384C11.3106 2.58943 12 3.54754 12 4.66667C12 5.78579 11.3106 6.7439 10.3333 7.13949M8.99998 4.66667C8.99998 6.13943 7.80607 7.33333 6.33331 7.33333C4.86055 7.33333 3.66665 6.13943 3.66665 4.66667C3.66665 3.19391 4.86055 2 6.33331 2C7.80607 2 8.99998 3.19391 8.99998 4.66667Z"
          :stroke="
            color ? (hover && hoverColor ? hoverColor : color) : '#1C1F27'
          "
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </div>
</template>
