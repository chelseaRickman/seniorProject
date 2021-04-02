// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // https://github.com/tailwindlabs/tailwindcss-forms
  // plugins: [require("@tailwindcss/forms")],
}
