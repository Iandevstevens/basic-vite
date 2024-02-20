/** @type {import('tailwindcss').Config} */
export default {
  content: ["../**/src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f8ce02",
          dull: "#b59600",
        },
      },
    },
  },
  plugins: [],
};
