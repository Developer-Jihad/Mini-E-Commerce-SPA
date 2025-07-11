"use client";

import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "light", // Can be 'light' or 'dark'
    primary: {
      main: "#7F00FF", // A vibrant purple
    },
    secondary: {
      main: "#f5a008", // A warm orange/yellow
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
      textTransform: "none", // Optional: prevent uppercase buttons
      fontWeight: 600,
    },
  },
  components: {
    // Example of customizing a specific component
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded buttons
        },
      },
    },
    
  },
});

export default theme;