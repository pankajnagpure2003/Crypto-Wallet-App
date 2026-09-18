// Central JS copy of the Tailwind color tokens, for places that need raw
// values (SVG charts, icon colors, status bar, navigation theme, etc.)
// Keep this in sync with tailwind.config.js -> theme.extend.colors

export const colors = {
  primary: "#347AF0",
  primaryDark: "#2A63C2",
  primaryLight: "#EAF1FE",

  success: "#75BF72",
  successLight: "#E9F6E8",

  danger: "#DF5060",
  dangerLight: "#FBEAEC",

  warning: "#FDB32A",
  warningLight: "#FFF6E3",

  midnight: "#0D1F3C",
  grayDark: "#3D4C63",
  gray: "#B5BBC9",
  grayLight: "#CFD2D8",

  surface: "#F4F6FB",
  border: "#E4E8F0",
  white: "#FFFFFF",
};

export default colors;
