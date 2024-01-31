// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import FieldInputComponent from "./FieldInput.vue";

// Meta configuration for the storybook
const meta: Meta<typeof FieldInputComponent> = {
  title: "Components/FieldInput",
  component: FieldInputComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    modelValue: {
      control: "text",
      description: "The input value.",
    },
    role: {
      control: "select",
      options: ["color-picker", "default", "email", "link", "search"],
      description: "The role of the input field.",
    },
    id: {
      control: "text",
      description: "Unique identifier for the input element.",
    },
    type: {
      control: "select",
      options: [
        "text", // A basic text field
        "password", // A password field
        "email", // An email field, which can validate emails
        "number", // A field for numerical input
        "tel", // A telephone number input
        "url", // A URL input field
        "search", // A search field
        "date", // A date picker
        "datetime-local", // A date and time picker, without time zone
        "month", // A month and year picker
        "week", // A week and year picker
        "time", // A time picker
        "range", // A slider control to select a value from a range
        "color", // A color picker
        "file", // A file select control
      ],
      description: "The HTML input type.",
    },
    customColor: {
      control: "color",
      description: "Custom color for the input.",
    },
    customRgbColor: {
      control: "text",
      description: "Custom RGB color for additional styling.",
    },
    icon: {
      control: "text",
      description: "Icon to display inside the input.",
    },
    customIcon: {
      control: "text",
      description: "Custom icon URL.",
    },
    suffix: {
      control: "text",
      description: "Suffix to display inside the input.",
    },
    noRoundedBottom: {
      control: "boolean",
      description: "Removes the rounded bottom if set to true.",
    },
    locale: {
      control: "select",
      options: ["en", "fr"],
      description: "Language of the labels (e.g., 'en', 'fr').",
    },
    label: {
      control: "text",
      description: "Label text for the input.",
    },
    description: {
      control: "text",
      description: "Description text below the label.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input.",
    },
    autocomplete: {
      control: "text",
      description: "Autocomplete attribute for the input.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled or not.",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required or not.",
    },
    validation: {
      control: "object",
      description: "Object for validation rules and messages.",
    },
    validationDisabled: {
      control: "boolean",
      description: "Disables the validation message display.",
    },
    errorMessage: {
      control: "text",
      description: "Custom error message to display.",
    },
  },

  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/k5rNuTP8rOteWWK5Ajx2MF/%F0%9F%92%8E-Lapilli?type=design&node-id=2679%3A601",
        name: "Figma Design",
      },
      {
        type: "link",
        url: "https://www.notion.so/magmacrew/Text-field-c677633509b54eda9ab03ed89d50b3d4",
        name: "Notion Documentation",
      },
    ],
  },
};

export default meta;

// Base template function for creating stories
const Template: StoryObj<typeof FieldInputComponent> = (args) => ({
  components: { FieldInputComponent },
  setup() {
    return { args };
  },
  template: '<FieldInputComponent v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  id: "field-input",
  label: "Label",
  description: "Description",
  placeholder: "Placeholder",
  required: true,
};

// Variant Disabled Input
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  ...Default.args,
  disabled: true,
  placeholder: "This input is disabled",
};

// Variant with Custom Color
export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  customColor: "#206b2d",
  customRgbColor: "32, 107, 45",
};

// Variant with Custom Icon
export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Default.args,
  customIcon: "https://picsum.photos/200/300",
};

// Variant with Suffix
export const Suffix = Template.bind({});
Suffix.args = {
  ...Default.args,
  suffix: "Suffix",
};

// Variant for Link Input
export const LinkInput = Template.bind({});
LinkInput.args = {
  ...Default.args,
  role: "link",
  placeholder: "Enter URL",
};

// Variant for Search Input
export const SearchInput = Template.bind({});
SearchInput.args = {
  ...Default.args,
  role: "search",
  icon: "search",
  placeholder: "Search...",
};

// Variant for Color Picker
export const ColorPicker = Template.bind({});
ColorPicker.args = {
  ...Default.args,
  role: "color-picker",
};
