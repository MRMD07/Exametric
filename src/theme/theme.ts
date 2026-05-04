import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    typography: {
      fontFamily: "Oswald, sans-serif",
      
      body1: { fontFamily: "Inter, sans-serif" },
      body2: { fontFamily: "Inter, sans-serif" },
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#000000" },
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#000000",
            },
          }
        : {
            primary: { main: "#ffffff" },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
            },
          }),
    },
  });