// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import FieldAvatarUploaderComponent from "./FieldAvatarUploader.vue";

// Helpers
import { iconList } from "@/helpers/iconsListHelper";

// Meta configuration for the storybook, including the component and title
const meta: Meta<typeof FieldAvatarUploaderComponent> = {
  title: "Components/FieldAvatarUploader",

  component: FieldAvatarUploaderComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    accept: {
      control: "select",
      optons: [
        // All image types (default)
        "image/*",
        // Specific MIME type for images
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/bmp",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        // Specific file extensions for images
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".svg",
        ".tiff",
        ".webp",
      ],
      description:
        "The type of files that can be accepted (default is any image).",
    },
    cta: {
      control: "text",
      description: "Text for the upload call-to-action button.",
    },
    id: {
      control: "text",
      description: "Unique identifier for the input element.",
    },
    label: {
      control: "text",
      description: "Label text for the uploader.",
    },
    description: {
      control: "text",
      description: "Description text below the label.",
    },
    locale: {
      control: "select",
      options: ["en", "fr"],
      description: "Language of the labels (e.g., 'en', 'fr').",
    },
    modelValue: {
      control: "object",
      description: "The current file selected by the user.",
    },
    previewUrl: {
      control: "text",
      description: "URL of the preview image.",
    },
    fallback: {
      control: "text",
      description:
        "Fallback text displayed instead of the placeholder icon when no image is selected.",
    },
    placeholderIcon: {
      control: "select",
      options: iconList,
      description: "Icon displayed when no image is selected.",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required or not.",
    },
    validation: {
      control: "object",
      description: "Object for validation rules and messages.",
    },
  },

  parameters: {
    design: [
      {
        type: "link",
        url: "https://www.notion.so/magmacrew/Avatar-uploader-93e1d03b1f144f5c82733562dfb15c6e",
        name: "Notion Documentation",
      },
      {
        type: "link",
        url: "https://www.notion.so/magmacrew/Avatar-uploader-93e1d03b1f144f5c82733562dfb15c6e",
        name: "Notion Documentation",
      },
    ],
  },
};

export default meta;

// Base template function for creating stories
const Template: StoryObj<typeof FieldAvatarUploaderComponent> = (args) => ({
  components: { FieldAvatarUploaderComponent },

  setup() {
    return { args };
  },

  template: `
    <FieldAvatarUploaderComponent v-bind="args" />
  `,
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  cta: "Upload",
  id: "avatar",
  label: "Label",
  description: "Description",
  locale: "en",
  required: true,
};

// Fallback Story
export const Fallback = Template.bind({});
Fallback.args = {
  cta: "Upload",
  id: "avatar",
  label: "Label",
  description: "Description",
  fallback: "JD",
  locale: "en",
  required: true,
};

// Preview Story
export const preview = Template.bind({});
preview.args = {
  cta: "Upload",
  id: "avatar",
  label: "Label",
  description: "Description",
  previewUrl: "https://picsum.photos/200/300",
  locale: "en",
  required: true,
};
