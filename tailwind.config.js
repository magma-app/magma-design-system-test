/* eslint-env node */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "mgm-txt-xs": ["12px", "16px"],
        "mgm-txt-sm": ["14px", "20px"],
        "mgm-txt-md": ["16px", "24px"],
        "mgm-txt-lg": ["18px", "28px"],
        "mgm-txt-xl": ["20px", "32px"],
        "mgm-dspl-xs": ["24px", "32px"],
        "mgm-dspl-sm": ["30px", "48px"],
        "mgm-dspl-md": ["36px", "56px"],
        "mgm-dspl-lg": [
          "48px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.48px",
          },
        ],
        "mgm-dspl-xl": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.6px",
          },
        ],
        "mgm-dspl-2xl": [
          "72px",
          {
            lineHeight: "88px",
            letterSpacing: "-0.72px",
          },
        ],
      },
      colors: {
        ////////////////
        // Background //
        ////////////////
        // Neutral
        "background-default": "#ffffff",
        "background-subtle": "#f1f5f9",
        "background-subtle-hover": "#F8FAFC",
        "background-emphasis": "#0e1014",
        // Brand
        "background-brand-emphasis": "#444ce7",
        "background-brand-emphasis-hover": "#3538cd",
        "background-brand-disabled": "#a4bcfd",
        "background-brand-default": "#eef4ff",
        "background-brand-default-hover": "#E0EAFF",
        // Success
        "background-success-default": "#ecfdf3",
        // Warning
        "background-warning-default": "#fffaeb",
        // Danger
        "background-danger-default": "#fef3f2",
        "background-danger-subtle": "#FEE4E2",
        "background-danger-emphasis": "#d92d20",
        "background-danger-emphasis-hover": "#b42318",
        "background-danger-disabled": "#fda29b",
        ////////////////
        // Foreground //
        ////////////////
        // Neutral
        "foreground-on-emphasis": "#ffffff",
        "foreground-subtle": "#94a3b8",
        "foreground-default": "#5f6c85",
        "foreground-emphasis": "#1c1f27",
        // Brand
        "foreground-brand-default": "#444ce7",
        "foreground-brand-hover": "#3538cd",
        "foreground-brand-emphasis": "#2D31A6",
        // Success
        "foreground-success-default": "#03874c",
        // Warning
        "foreground-warning-default": "#b25504",
        // Danger
        "foreground-danger-default": "#d92d20",
        ////////////
        // Border //
        ////////////
        // Neutral
        "border-default": "#cbd5e1",
        "border-subtle": "#e2e8f0",
        "border-on-emphasis": "#ffffff",
        // Brand
        "border-brand-default": "#C7D7FE",
        "border-brand-emphasis": "#444ce7",
        // Success
        "border-success-default": "#BCF6D1",
        "border-success-emphasis": "#03874c",
        // Warning
        "border-warning-default": "#FCEBB1",
        "border-warning-emphasis": "#b25504",
        // Danger
        "border-danger-default": "#fecdca",
        "border-danger-emphasis": "#d92d20",
      },
    },
  },
  plugins: [],
};
