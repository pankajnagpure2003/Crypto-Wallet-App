/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx}", "./src/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Design tokens pulled from the Wholet design system (Colors.png)
        primary: {
          DEFAULT: "#347AF0",
          dark: "#2A63C2",
          light: "#EAF1FE",
        },
        success: {
          DEFAULT: "#75BF72",
          light: "#E9F6E8",
        },
        danger: {
          DEFAULT: "#DF5060",
          light: "#FBEAEC",
        },
        warning: {
          DEFAULT: "#FDB32A",
          light: "#FFF6E3",
        },
        midnight: "#0D1F3C",
        graydark: "#3D4C63",
        gray: {
          DEFAULT: "#B5BBC9",
          light: "#CFD2D8",
        },
        surface: "#F4F6FB",
        border: "#E4E8F0",
      },
      fontFamily: {
        sans: ["System"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "42px", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "38px", fontWeight: "700" }],
        h3: ["26px", { lineHeight: "32px", fontWeight: "600" }],
        sublime: ["19px", { lineHeight: "26px", fontWeight: "600" }],
        paragraph: ["15px", { lineHeight: "22px", fontWeight: "400" }],
        link: ["15px", { lineHeight: "22px", fontWeight: "600" }],
        fineprint: ["13px", { lineHeight: "18px", fontWeight: "400" }],
      },
      borderRadius: {
        xl2: "24px",
      },
    },
  },
  plugins: [],
};
