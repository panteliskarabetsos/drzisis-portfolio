// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
<<<<<<< HEAD
=======
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
>>>>>>> 806809b (Fix nested repository issue)
      },
    },
  },
  plugins: [],
};
