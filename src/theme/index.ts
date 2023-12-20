export const creativeCodeTheme = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/creativecodeco/ui/lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
