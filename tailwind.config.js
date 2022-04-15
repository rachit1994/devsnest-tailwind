const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
// module.exports = {
//   // content: [
//   //   "./pages/**/*.{js,ts,jsx,tsx}",
//   //   "./components/**/*.{js,ts,jsx,tsx}",
//   // ],
//   purge: [],
//   theme: {
//     extend: {
//       colors: {
//         "bookmark-purple": colors.purge,
//         "bookmark-red": colors.red,
//         "bookmark-blue": colors.blue,
//         "bookmark-grey": colors.grey,
//         "bookmark-white": colors.white,
//       },
//     },
//     fontFamily: {
//       Poppins: ["Poppins, sans-serif"],
//     },
//     container: {
//       center: true,
//       padding: "1rem",
//       screens: {
//         lg: "1124px",
//         xl: "1124px",
//         "2xl": "1124px",
//       },
//     },
//   },
//   plugins: [],
// };
