/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: "#18181B",
        modalBg: "#1B2430",
        link: "#a904ff",
        modalBgEntyre: "rgba(0, 0, 0, 0.32)",
        cartBorder: "#4B5563",
        facebook: "#1D4ED8",
        google: "#bf392d",
      },
      textShadow: {
        custom: "2px 2px 5px #610094", // створений клас
      },
    },
  },
};
