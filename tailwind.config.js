/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      anton: "var(--anton)",
      poppins: "var(--poppins)",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(121deg, rgba(255,255,255,0.56) 0%, rgba(152,151,151,0) 102.2%)",
        "custom-url": "url('/images/background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
