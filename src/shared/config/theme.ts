import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#dc004e",
          },
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
        }
      : {
          primary: {
            main: "#64b5f6",
          },
          secondary: {
            main: "#4db6ac",
          },
          background: {
            default: "#1e1e1e",
            paper: "#2a2a2a",
          },
          text: {
            primary: "#f5f5f5",
            secondary: grey[400],
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export const lightThemeColors = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  primary: "#1976d2",
  secondary: "#dc004e",
  sectionBackground: "#f8f9fa",
  headerFooterBg: "#ffffff",
  headerFooterBorder: "#e0e0e0",
  buttonTextColor: "#ffffff",
  cardBackground: "#ffffff",
  cardShadow: "rgba(0, 0, 0, 0.08)",
  gradientTextStart: "#f44336",
  gradientTextEnd: "#1976d2",
  inputFocusBorder: "#1976d2",
  inputFocusShadow: "rgba(25, 118, 210, 0.25)",
};

export const darkThemeColors = {
  body: "#1e1e1e",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#2a2a2a",
  primary: "#64b5f6",
  secondary: "#4db6ac",
  sectionBackground: "#333333",
  headerFooterBg: "#2a2a2a",
  headerFooterBorder: "#424242",
  buttonTextColor: "#ffffff",
  cardBackground: "#2a2a2a",
  cardShadow: "rgba(255, 255, 255, 0.08)",
  gradientTextStart: "#64b5f6",
  gradientTextEnd: "#4db6ac",
  inputFocusBorder: "#64b5f6",
  inputFocusShadow: "rgba(100, 181, 246, 0.3)",
};

export const getCurrentThemeColors = (mode: PaletteMode) => {
  return mode === "light" ? lightThemeColors : darkThemeColors;
};
