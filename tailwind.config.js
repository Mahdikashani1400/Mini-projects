/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", ,
  ],
  theme: {
    container: {
      center: true,
      padding: "10px"
    },
    extend: {
      fontFamily: {
        "IRANSans": "IRANSans"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    },
  ],
}