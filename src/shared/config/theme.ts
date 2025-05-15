import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

// Define the shape of your custom theme additions if any
// interface CustomThemeOptions {
//   // Example:
//   // status: {
//   //   danger: string;
//   // };
// }

// Augment the Palette interface
// declare module "@mui/material/styles/createPalette" {
//   interface Palette {
//     // customBackground?: PaletteColorOptions;
//   }
//   interface PaletteOptions {
//     // customBackground?: PaletteColorOptions;
//   }
// }

// Augment the Theme interface
// declare module "@mui/material/styles/createTheme" {
//   interface Theme extends CustomThemeOptions {}
//   interface ThemeOptions extends CustomThemeOptions {}
// }

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          primary: {
            main: "#1976d2", // MUI default blue
          },
          secondary: {
            main: "#dc004e", // MUI default pink/red
          },
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
          // Example of adding a custom color, ensure it's declared above if needed
          // customBackground: {
          //   main: '#f8f9fa', // For sections like CallToActionBlock
          // },
        }
      : {
          // Palette values for dark mode (graphite theme)
          primary: {
            main: "#64b5f6", // Light blue
          },
          secondary: {
            main: "#4db6ac", // Teal
          },
          background: {
            default: "#1e1e1e", // Deep dark grey
            paper: "#2a2a2a", // Slightly lighter for surfaces
          },
          text: {
            primary: "#f5f5f5", // Light grey / white
            secondary: grey[400],
          },
          // customBackground: {
          //   main: '#333333', // Darker section background
          // },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // You can define mode-specific typography if needed
  },
  // You can also customize components globally here
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: ({ theme }: { theme: any }) => ({ // Use 'any' if Theme type isn't fully augmented yet
  //         backgroundColor: theme.palette.background.paper,
  //         color: theme.palette.text.primary,
  //         borderBottom: \`1px solid \${theme.palette.divider}\`,
  //       }),
  //     },
  //   },
  // },
});

// Example of how to use it for styled-components if needed outside MUI context:
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
  sectionBackground: "#333333", // Darker section background
  headerFooterBg: "#2a2a2a",
  headerFooterBorder: "#424242", // Darker border
  buttonTextColor: "#ffffff",
  cardBackground: "#2a2a2a",
  cardShadow: "rgba(255, 255, 255, 0.08)",
  gradientTextStart: "#64b5f6", // Adjust gradient for dark theme
  gradientTextEnd: "#4db6ac", // Adjust gradient for dark theme
  inputFocusBorder: "#64b5f6",
  inputFocusShadow: "rgba(100, 181, 246, 0.3)",
};

// This function will be helpful for styled-components to pick colors
export const getCurrentThemeColors = (mode: PaletteMode) => {
  return mode === "light" ? lightThemeColors : darkThemeColors;
};
