const theme = {
  light: { ...require("daisyui/src/theming/themes")["light"] },
  dark: { ...require("daisyui/src/theming/themes")["dark"] },
};

export const creativeCodeTheme = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/creativecodeco/ui/lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {...theme},
  daisyui: {
    themes: [{...theme}],
  },
  plugins: [require("daisyui")],
};
