"use client";

import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7F00FF", 
    },
    secondary: {
      main: "#f5a008",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1c1c1e",
      secondary: "#636366",
    },
  },
  typography: {
    
    fontFamily: "var(--font-paragraph)", 
    h1: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
    },
    button: {
      textTransform: "none", 
      fontWeight: 600,
    },
  },
  components: {
    
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, 
        },
      },
    },
    
  },
});

export default theme;