/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",
        veryDarkBlue: "hsl(234, 12%, 34%)",
        grayishBlue: "hsl(229, 6%, 66%)",
        veryLightGray: " hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
