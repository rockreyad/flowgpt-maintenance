/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e6e6e6",
        black: "#000",
        "gray-gray-400": "#a0aec0",
        gray: "#030303",
      },
      spacing: {},
      fontFamily: {
        "sf-pro": ["SF Pro Display", "sans-serif"],
        "poppins-s-regular": "Poppins",
      },
    },
    fontSize: {
      mid: "17px",
      sm: "14px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
