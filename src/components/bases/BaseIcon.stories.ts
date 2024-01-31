// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import BaseIconComponent from "./BaseIcon.vue";

// Helpers
import { iconList } from "@/helpers/iconsListHelper";

// Meta configuration for the storybook, including the component and title
const meta: Meta<typeof BaseIconComponent> = {
  title: "Components/BaseIcon",

  component: BaseIconComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    icon: {
      control: "select",
      options: iconList,
      description: "Determines which icon to display.",
    },
    size: {
      control: "number",
      description:
        "Determines the size of the icon (not all sizes are available, available sizes per icon available in component).",
    },
    color: {
      control: "color",
      description: "Determines the color of the icon.",
    },
    bgColor: {
      control: "color",
      description: "Determines the background color of the icon.",
    },
    hoverState: {
      control: "boolean",
      description: "Determines if the icon should have a hover state.",
    },
    hoverColor: {
      control: "color",
      description: "Determines the hover color of the icon.",
    },
  },

  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com",
        name: "Figma Design",
      },
    ],
  },
};

export default meta;

// Base template function for creating stories
const Template: StoryObj<typeof BaseIconComponent> = (args) => ({
  components: { BaseIconComponent },

  setup() {
    return { args };
  },

  template: `
    <BaseIconComponent v-bind="args" :class="['w-fit', {'border-8 border-[#FEF3F2]': args.bgColor, 'border rounded-full p-2 border-[#94A3B8]': args.hoverState}]" />
  `,
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  icon: "alert-circle",
  size: 24,
  color: "#03874C",
};

// Background Story
export const Background = Template.bind({});
Background.args = {
  icon: "slash",
  size: 24,
  color: "#B25504",
  bgColor: "#FEE4E2",
};

// Hover Story
export const Hover = Template.bind({});
Hover.args = {
  icon: "close",
  color: "#94A3B8",
  hoverState: true,
  hoverColor: "#5F6C85",
};
