import { watch } from "vue";
import { createI18n } from "vue-i18n";
import FloatingVue from "floating-vue";
import { setup } from "@storybook/vue3";
import type { Decorator, Preview } from "@storybook/vue3";
import { withDesign } from "storybook-addon-designs";

import en from "../src/locales/en";
import fr from "../src/locales/fr";

// CSS
import "@/assets/floating-vue.css";

// Configure vue-i18n
const i18n = createI18n({
  allowComposition: true,
  fallbackLocale: "en",
  legacy: false,
  locale: "en",
  messages: { en, fr },
  silentTranslationWarn: true,
});

// Configure vue-i18n
setup((app) => {
  app.use(i18n);
  app.use(FloatingVue);
});

const withLocale: Decorator = (Story, context) => {
  watch(
    () => context.globals.locale,
    (newLocale) => (i18n.global.locale.value = newLocale),
    { immediate: true }
  );

  return {
    components: { Story },

    template: `<story />`,
  };
};

const preview: Preview = {
  decorators: [withLocale, withDesign],
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", left: "🇺🇸", title: "English" },
          { value: "fr", left: "🇫🇷", title: "Français" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

import "../src/assets/tailwind.css";

export default preview;
