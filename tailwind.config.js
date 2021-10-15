const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.fuchsia,
        gold: colors.yellow,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core")({
      colors: ["purple", "yellow"],
    }),
  ],
}
