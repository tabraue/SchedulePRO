/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.jsx"],
  theme: {
      colors: {
        "blue-calypso": "#357b8d", // MAIN bg & main buttons & text
        "blue-glacier": "#70b8c2", // dialogs or modals bg
        "white-sand": "#f5f5f5", // MAIN bg & txt
        "green-vista": "#8bd0b0", // action buttons bg (icons on it)
        "green-paradiso": "#2d7b6d", // icon buttons
        "green-bay": "#5ea68f", // confirm or yes buttons
        "red-chestnut": "#b8424e", // delete or cancel
        "yellow-sandy": "#f2a154", // signup
        black: "#000000", // logout
        "yellow-legend": "#F9C97B", // morning
        "orange-legend": "#D68E61", // evening
        "blue-legend": "#6c86a7", // night
        "green-legend": "#7FA76C", // day off
        "purple-legend": "#A76CA1", // holiday
        "red-legend": "#AC5252", // sick
        'gray-l': "#D9D9D9",
      },
      screens: {
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px to max-width 767px)

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px to max-width 1023px)

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px  to max-width 1279px)

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px  to max-width 1535px)

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px and higher)
      },
      height: {
        '128': '38rem'
      }
  },
  plugins: [require("flowbite/plugin")],
};
