/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        "roboto-slab": ["Roboto Slab"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
