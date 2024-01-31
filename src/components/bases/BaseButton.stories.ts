// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import BaseButtonComponent from "./BaseButton.vue";
import BaseIcon from "@/components/bases/BaseIcon.vue"; // Adjust path as necessary

const meta: Meta<typeof BaseButtonComponent> = {
  title: "Components/BaseButton",

  component: BaseButtonComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    customColor: {
      control: "color",
      description: "Custom color for the button.",
    },
    customRgbColor: {
      control: "text",
      description: "Custom RGB color for the button.",
    },
    danger: {
      control: "boolean",
      description: "Sets the button to a danger style.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button.",
    },
    icon: {
      control: "text",
      description: "Icon name for the button.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Sets the size of the button.",
    },
    state: {
      control: "select",
      options: ["prmr", "scdr", "trtr"],
      description:
        "Sets the state (style) of the button: primary, secondary, or tertiary.",
    },
    text: {
      control: "text",
      description: "The text to display inside the button.",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Sets the button html tag type.",
    },
  },

  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com",
        name: "Figma Design",
      },
      {
        type: "link",
        url: "https://www.notion.so",
        name: "Notion Documentation",
      },
    ],
  },
};

export default meta;

// Base template function for creating stories
const Template: StoryObj<typeof BaseButtonComponent> = (args) => ({
  components: { BaseButtonComponent, BaseIcon },

  setup() {
    return { args };
  },

  template: `
    <BaseButtonComponent v-bind="args" />
  `,
});

// Primary Small Stories

//// Primary Small with Icon Story
export const PrimaryIconSM = Template.bind({});
PrimaryIconSM.args = {
  text: "Primary Small with Icon",
  size: "sm",
  icon: "check",
};

//// Danger Primary Small Story
export const PrimaryDangerSM = Template.bind({});
PrimaryDangerSM.args = {
  text: "Primary Danger Small",
  size: "sm",
  danger: true,
};

//// Disabled Primary Small Story
export const PrimaryDisabledSM = Template.bind({});
PrimaryDisabledSM.args = {
  text: "Primary Disabled Small",
  size: "sm",
  disabled: true,
};

// Secondary Medium Stories

//// Secondary Medium  with Icon Story
export const SecondaryIconMD = Template.bind({});
SecondaryIconMD.args = {
  text: "Secondary Medium with Icon",
  size: "md",
  state: "scdr",
  icon: "plus",
};

//// Danger Secondary Medium
export const SecondaryDangerMD = Template.bind({});
SecondaryDangerMD.args = {
  text: "Secondary Danger Medium",
  size: "md",
  state: "scdr",
  danger: true,
};

//// Disabled Secondary Medium
export const SecondaryDisabledMD = Template.bind({});
SecondaryDisabledMD.args = {
  text: "Secondary Disabled Medium",
  size: "md",
  state: "scdr",
  disabled: true,
};

// Tertiary Large Stories

//// Tertiary Large with Icon Story
export const TertiaryIconLG = Template.bind({});
TertiaryIconLG.args = {
  text: "Tertiary Large with Icon",
  size: "lg",
  state: "trtr",
  icon: "slash",
};

//// Tertiary Danger Large Story
export const TertiaryDangerLG = Template.bind({});
TertiaryDangerLG.args = {
  text: "Tertiary Danger Large",
  size: "lg",
  state: "trtr",
  danger: true,
};

// Custom Color Extra-large Stories

//// Primary Custom Color Extra-large with Icon Story
export const PrimaryCustomColorIconXL = Template.bind({});
PrimaryCustomColorIconXL.args = {
  text: "Primary Custom Color Extra-large with Icon",
  size: "xl",
  customColor: "#206b2d",
  customRgbColor: "32, 107, 45",
  icon: "trash",
};
