/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'
    ,

  ],

  theme: {
    container: {
      center: true,
      padding: "10px"
    },
    extend: {
      fontFamily: {
        "IRANSans": "IRANSans",
        "Inter": "Inter",
        // "Inter-bold": "Inter-bold",
      },
      backgroundImage: {
        "flight": "url('/Ticket/flight.webp')",
        "blue_radial": `radial-gradient(
          103.88% 58.43% at 56.74% 50%,
          #0085ff 0%,
          #003465 100%
        )`
      },
      spacing: {
        '25': "100px",
        '50': "200px",
      },

    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    },
    // require('flowbite/plugin')
  ],
}