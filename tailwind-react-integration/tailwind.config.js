/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all components for class names
  darkMode: "class", // Enables dark mode via a CSS class (.dark)
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
