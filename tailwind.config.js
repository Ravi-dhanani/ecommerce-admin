/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      colors: ({ colors }) => ({
        ...colors,
        primary: "#660033",
        secondary: "#007C89",
        neutral: colors.gray,
        light: colors.white,
        disabled: colors.slate[400],
        dark: colors.slate[800],
        success: colors.green[500],
        error: colors.red[500],
        info: colors.sky[500],
        warning: colors.amber[500],
      }),
      boxShadow: {
        myShadow: "0px 5px 2px 2px rgba(0,0,0)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false,
//   theme: {
//     extend: {
//       screens: {
//         xs: "300px",
//         sm: "576px",
//         md: "768px",
//         lg: "992px",
//         xl: "1200px",
//       },
//       colors: ({ colors }) => ({
//         ...colors,
//         primary: "#397be6",
//         secondary: "#007C89",
//         neutral: colors.gray,
//         light: colors.white,
//         disabled: colors.slate[400],
//         dark: colors.slate[800],
//         success: colors.green[500],
//         error: colors.red[500],
//         info: colors.sky[500],
//         warning: colors.amber[500],
//       }),
//       boxShadow: {
//         myShadow: "0px 5px 2px 2px rgba(0,0,0)",
//       },
//     },
//   },

//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
