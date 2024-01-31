// NPM
import type { Meta, StoryObj } from "@storybook/vue3";

// Components
import FieldLabelComponent from "./FieldLabel.vue";

// Meta configuration for the storybook
const meta: Meta<typeof FieldLabelComponent> = {
  title: "Components/FieldLabel",
  component: FieldLabelComponent,

  // Define argTypes for control and documentation purposes
  argTypes: {
    label: {
      control: "text",
      description: "Text content of the label.",
    },
    description: {
      control: "boolean",
      description: "Determines if the label is a description.",
    },
    error: {
      control: "boolean",
      description: "Determines if the label represents an error state.",
    },
    id: {
      control: "text",
      description: "Unique identifier for the label.",
    },
  },
};

export default meta;

// Base template function for creating stories
const Template: StoryObj<typeof FieldLabelComponent> = (args) => ({
  components: { FieldLabelComponent },
  setup() {
    return { args };
  },
  template: '<FieldLabelComponent v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: "Label",
  id: "field-label",
};

// Description Variant
export const Description = Template.bind({});
Description.args = {
  ...Default.args,
  description: true,
  label: "Description Label",
};

// Error Variant
export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  error: true,
  label: "Error Label",
};
