/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      anton: "var(--anton)",
      poppins: "var(--poppins)",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
