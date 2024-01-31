// Types
import type { Meta, StoryObj } from "@storybook/vue3";

interface TypographyProps {
  text: string;
  class: string;
}

// Meta configuration for the storybook, including the component and title
const meta: Meta = {
  title: "Primitives/Typography",

  // Define argTypes for control and documentation purposes
  argTypes: {
    class: {
      control: "select",
      options: [
        "text-mgm-txt-xs",
        "text-mgm-txt-sm",
        "text-mgm-txt-md",
        "text-mgm-txt-lg",
        "text-mgm-txt-xl",
        "text-mgm-dspl-xs",
        "text-mgm-dspl-sm",
        "text-mgm-dspl-md",
        "text-mgm-dspl-lg",
        "text-mgm-dspl-xl",
        "text-mgm-dspl-2xl",
      ],
      description: "The tailwind custom css class to choose the typography",
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
const Template: StoryObj = (args: TypographyProps) => ({
  setup() {
    return {
      args: {
        text: args.text,
        class: args.class,
      },
    };
  },

  template: `<p :class="args.class">{{ args.text }}</p>`,
});

// Text XS Story
export const TextXS = Template.bind({});
TextXS.args = {
  text: "Text XS",
  class: "text-mgm-txt-xs",
};

// Text SM Story
export const TextSM = Template.bind({});
TextSM.args = {
  text: "Text SM",
  class: "text-mgm-txt-sm",
};

// Text MD Story
export const TextMD = Template.bind({});
TextMD.args = {
  text: "Text MD",
  class: "text-mgm-txt-md",
};

// Text LG Story
export const TextLG = Template.bind({});
TextLG.args = {
  text: "Text LG",
  class: "text-mgm-txt-lg",
};

// Text XL Story
export const TextXL = Template.bind({});
TextXL.args = {
  text: "Text XL",
  class: "text-mgm-txt-xl",
};

// Display XS Story
export const DisplayXS = Template.bind({});
DisplayXS.args = {
  text: "Display XS",
  class: "text-mgm-dspl-xs",
};

// Display SM Story
export const DisplaySM = Template.bind({});
DisplaySM.args = {
  text: "Display SM",
  class: "text-mgm-dspl-sm",
};

// Display MD Story
export const DisplayMD = Template.bind({});
DisplayMD.args = {
  text: "Display MD",
  class: "text-mgm-dspl-md",
};

// Display LG Story
export const DisplayLG = Template.bind({});
DisplayLG.args = {
  text: "Display LG",
  class: "text-mgm-dspl-lg",
};

// Display XL Story
export const DisplayXL = Template.bind({});
DisplayXL.args = {
  text: "Display XL",
  class: "text-mgm-dspl-xl",
};

// Display 2XL Story
export const Display2XL = Template.bind({});
Display2XL.args = {
  text: "Display 2XL",
  class: "text-mgm-dspl-2xl",
};
