/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        duo: "540px",
        pro:"430px",
        pro7:"912px",
        tab:"768px",
        tablg:"1024px",
        laptop:"1280px",
      },
    },
  },
  plugins: [],
};

