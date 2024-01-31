/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: { max: "330px" },
    },
    colors: {
      sand: "#F3E3D7",
      blue: "#85E3FF",
      yellow: "#FFE78B",
      yellowStroke: "#F2D35B",
      blueStroke: "#78CCE5",
      greenStroke: "#85D4BE",
      sandStroke: "#E3D0C2",
      green: "#99F5DB",
      white: "#fff",
      black: "#473C38",
    },
  },
  plugins: [],
};
