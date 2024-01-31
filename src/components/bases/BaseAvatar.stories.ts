// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import BaseAvatarComponent from "./BaseAvatar.vue";

// Meta configuration for the storybook, including the component and title
const meta: Meta<typeof BaseAvatarComponent> = {
  title: "Components/BaseAvatar",

  component: BaseAvatarComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    type: {
      control: "select",
      options: ["single", "groupa"],
      description:
        "Determines if the avatar is for a single user or a group of users.",
    },
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "sd", "md", "lg", "xl", "2xl", "full"],
      description: "Sets the size of the avatar.",
    },
    shape: {
      control: "select",
      options: ["squared", "rounded", "circle"],
      description: "Sets the shape of the avatar.",
    },
    border: {
      control: "boolean",
      description: "Determines if the avatar has a border.",
    },
    src: {
      control: "text",
      description: "The source URL for the avatar image.",
    },
    fallback: {
      control: "text",
      description: "Fallback text to display if there is no image.",
    },
    alt: {
      control: "text",
      description: "Alternative text for the avatar image for accessibility.",
    },
    groupAvatarsUrls: {
      control: "object",
      description: "An array of objects representing the avatars for a group.",
    },
    groupCustomSize: {
      control: "select",
      options: ["sm", "sd"],
      description:
        "Custom size for group avatars, choosing between small and medium sizes.",
    },
    groupCustomTotalUsers: {
      control: "text",
      description:
        "String representing the total number of users in a group on the right.",
    },
    plus: {
      control: "boolean",
      description: "Determines if we show the '+' sign on the left.",
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
const Template: StoryObj<typeof BaseAvatarComponent> = (args) => ({
  components: { BaseAvatarComponent },
  setup() {
    return { args };
  },
  template: '<BaseAvatarComponent v-bind="args" />',
});

// Single Circle Story
export const SingleCircle = Template.bind({});
SingleCircle.args = {
  type: "single",
  src: "https://picsum.photos/200/300",
};

// Single Rounded Story
export const SingleRounded2xl = Template.bind({});
SingleRounded2xl.args = {
  type: "single",
  shape: "rounded",
  size: "2xl",
  src: "https://picsum.photos/200/300",
};

// Single Squared Story
export const SingleSquaredFull = Template.bind({});
SingleSquaredFull.args = {
  type: "single",
  shape: "squared",
  size: "full",
  src: "https://picsum.photos/200/300",
};

// Group Story
export const Group = Template.bind({});
Group.args = {
  type: "group",
  groupAvatarsUrls: [
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/200/300",
    },
  ],
  groupCustomTotalUsers: "1000",
  groupCustomSize: "sd",
  plus: true,
};
