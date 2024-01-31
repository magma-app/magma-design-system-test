// Types
import type { Meta, StoryObj } from "@storybook/vue3";

interface ColorsProps {
  colors: string[];
}

// Meta configuration for the storybook, including the component and title
const meta: Meta = {
  title: "Primitives/Colors",

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
const Template: StoryObj = (args: ColorsProps) => ({
  setup() {
    return {
      args: {
        colors: args.colors,
      },
    };
  },

  template: `<div class="flex flex-wrap">
    <div 
      v-for="(color, colorIndex) in args.colors" 
      :key="colorIndex" 
      :class="[
        color, 
        'h-20 w-40 flex items-center justify-center mr-4 mb-4 rounded-md p-2 text-foreground-emphasis',
        { 'text-foreground-on-emphasis': [
            'bg-background-emphasis', 
            'bg-background-brand-emphasis', 
            'bg-background-brand-emphasis-hover',
            'bg-background-danger-emphasis',
            'bg-background-danger-emphasis-hover',
            'bg-foreground-subtle',
            'bg-foreground-default',
            'bg-foreground-emphasis',
            'bg-foreground-brand-default',
            'bg-foreground-brand-hover',
            'bg-foreground-brand-emphasis',
            'bg-foreground-success-default',
            'bg-foreground-warning-default',
            'bg-foreground-danger-default',
            'bg-border-brand-emphasis',
            'bg-border-success-emphasis',
            'bg-border-warning-emphasis',
            'bg-border-danger-emphasis',
          ].includes(color)
        }
      ]">
      {{ color }}
    </div>
  </div>`,
});

// Background Colors Story
export const BackgroundColors = Template.bind({});
BackgroundColors.args = {
  colors: [
    "bg-background-default",
    "bg-background-subtle",
    "bg-background-subtle-hover",
    "bg-background-emphasis",
    "bg-background-brand-emphasis",
    "bg-background-brand-emphasis-hover",
    "bg-background-brand-disabled",
    "bg-background-brand-default",
    "bg-background-brand-default-hover",
    "bg-background-success-default",
    "bg-background-warning-default",
    "bg-background-danger-default",
    "bg-background-danger-subtle",
    "bg-background-danger-emphasis",
    "bg-background-danger-emphasis-hover",
    "bg-background-danger-disabled",
  ],
};

// Foreground Colors Story
export const ForegroundColors = Template.bind({});
ForegroundColors.args = {
  colors: [
    "bg-foreground-on-emphasis",
    "bg-foreground-subtle",
    "bg-foreground-default",
    "bg-foreground-emphasis",
    "bg-foreground-brand-default",
    "bg-foreground-brand-hover",
    "bg-foreground-brand-emphasis",
    "bg-foreground-success-default",
    "bg-foreground-warning-default",
    "bg-foreground-danger-default",
  ],
};

// Border Colors Story
export const BorderColors = Template.bind({});
BorderColors.args = {
  colors: [
    "bg-border-default",
    "bg-border-subtle",
    "bg-border-on-emphasis",
    "bg-border-brand-default",
    "bg-border-brand-emphasis",
    "bg-border-success-default",
    "bg-border-success-emphasis",
    "bg-border-warning-default",
    "bg-border-warning-emphasis",
    "bg-border-danger-default",
    "bg-border-danger-emphasis",
  ],
};
