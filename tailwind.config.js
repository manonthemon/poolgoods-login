/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'poolgoods-dark-blue': '#2C47E1', 
        'poolgoods-light-blue': '#8EC9FF',
        'gradient-start': '#4A63E0', 
        'gradient-end': '#2C47E1',
        'poolgoods-button-blue': '#6583F2',
      },
    },
  },
  plugins: [],
}