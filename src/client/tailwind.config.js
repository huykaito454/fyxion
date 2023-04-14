module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1ed760",
        primary2: "#1ed760",
        secondary: "#1ed760",
        secondaryHover: "#1ed75fbe",
        secondary2: "#1ed760",
        bgGray: "#FAFAFA",
        bgPage: "#FCFCFD",
        grayCard: "#e4e6eb",
        grayCardHover: "#444654",
        textGray: "#8f8f8f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
