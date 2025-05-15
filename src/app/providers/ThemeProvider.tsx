"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "@/shared/config/theme";

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }
  return context;
};

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (storedMode) {
      setMode(storedMode);
    } else {
      // Optional: set based on system preference if no stored mode
      // const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      // setMode(prefersDarkMode ? 'dark' : 'light');
      setMode("light"); // Default to light if nothing is stored and no system preference check
    }
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const muiTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // For styled-components, we can pass the same muiTheme or a simplified colors object.
  // Passing muiTheme makes it consistent and allows access to `theme.palette.primary.main` etc.
  // If styled-components only need basic colors, `getCurrentThemeColors(mode)` could be used.
  // Let's pass the full muiTheme to styled-components for maximum flexibility.
  const styledComponentsTheme = useMemo(() => muiTheme, [muiTheme]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledComponentsThemeProvider theme={styledComponentsTheme}>
          <CssBaseline />
          {/* Normalizes styles and applies background color from theme */}
          {children}
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
