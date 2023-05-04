import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ac0f5b",
    },
    background: {
      paper: "#27004d",
      default: "#4f42b5",
    },
    secondary: {
      main: "#0c8059",
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8095aa",
    },
    background: {
      paper: "#09626f",
      default: "#ffe4e1",
    },
    secondary: {
      main: "#0c8059",
    },
  },
});
