/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#E8F2ED',
        textGreen: '#4F9478',
        buttonBgGreen: '#1FE08C',
        buttonTextColor: '#0D1C14',
      },
    },
  },
  plugins: [],
};
