import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  // 👇 safelist MUST be inside the config object
  safelist: [
    'border-primary', 'border-secondary', 'border-accent',
    'text-primary', 'text-secondary', 'text-accent',
    'bg-primary', 'bg-secondary', 'bg-accent',
  ],

  plugins: [daisyui],

 daisyui: {
    themes: [
      {
        synthwave: {
          ...require("daisyui/src/theming/themes")["[data-theme=synthwave]"], // base
          "primary": "#ff007f",
          "secondary": "#00ffe0",
          "accent": "#f5f5f5",
          "neutral": "#222831",
          "base-100": "#1a1a2e",
          "info": "#00adb5",
          "success": "#4caf50",
          "warning": "#ffb400",
          "error": "#ff2e63",
        },
      },
      {
        valentine: {
          ...require("daisyui/src/theming/themes")["[data-theme=valentine]"],
          "primary": "#e91e63",
          "secondary": "#f48fb1",
          "accent": "#ffe6eb",
          "neutral": "#4a2c2a",
          "base-100": "#fff0f5",
          "info": "#64b5f6",
          "success": "#81c784",
          "warning": "#ffb74d",
          "error": "#e57373",
        },
      },
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["[data-theme=luxury]"],
          "primary": "#b78b4a",
          "secondary": "#a89f91",
          "accent": "#d4af37",
          "neutral": "#2a2a2a",
          "base-100": "#1c1c1c",
          "info": "#80d8ff",
          "success": "#a5d6a7",
          "warning": "#ffd54f",
          "error": "#ef5350",
        },
      },
    ],
  },
};
