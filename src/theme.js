import { createTheme } from "@mui/material";
import { cyan, yellow, pink, amber } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
      light: cyan[100],
      dark: cyan[800],
    },
    secondary: {
      main: yellow[500],
      light: yellow[200],
      dark: yellow[800],
    },
    tertiary: {
      main: amber[500],
      light: amber[200],
      dark: amber[800],
    },
    fourth: {
      main: pink[500],
      light: pink[100],
      dark: pink[700],
    },
  },
});
