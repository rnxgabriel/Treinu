import { asyncStorage } from "@services";
import { ThemeProvider } from "@shopify/restyle";
import React, { createContext, useEffect, useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { darkRestyleTheme, lightRestyleTheme, Theme } from "./restyleTheme";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

interface AppThemeContextProps {
  currentTheme: "light" | "dark";
  toggleAppTheme: () => void;
  theme: Theme;
}

const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined,
);

const THEME_KEY = "@APPTHEME";

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    colorScheme || "dark",
  );

  const toggleAppTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    asyncStorage.setItem(
      THEME_KEY,
      currentTheme === "light" ? "dark" : "light",
    );
  };

  useEffect(() => {
    async function loadStorage() {
      const result = await asyncStorage.getItem<"light" | "dark">(THEME_KEY);
      if (result) {
        setCurrentTheme(result);
      }
    }
    loadStorage();
  }, [colorScheme]);

  const theme = currentTheme === "light" ? lightRestyleTheme : darkRestyleTheme;

  return (
    <AppThemeContext.Provider
      value={{
        currentTheme,
        toggleAppTheme,
        theme,
      }}
    >
      <StatusBar
        barStyle={currentTheme === "light" ? "dark-content" : "light-content"}
        backgroundColor={theme.colors.background}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = React.useContext(AppThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within a AppThemeProvider");
  }
  return context["theme"];
}

export function useAppThemeConfig() {
  const context = React.useContext(AppThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within a AppThemeProvider");
  }
  return context;
}
