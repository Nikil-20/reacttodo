/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileL: '425px',   // Custom breakpoint for Mobile-L
        tablet: '768px',    // Custom breakpoint for tablets
      },
    },
  },
  plugins: [],
}