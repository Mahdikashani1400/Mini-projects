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
      backgroundImage: {
        "flight": "url('/Ticket/flight.webp')"
      },
      width: {
        '25': "100px",
        '50': "200px",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    },
  ],
}