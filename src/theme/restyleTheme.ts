import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { darkTextVariants, lightTextVariants } from "./textVariants";

export const lightRestyleTheme = createTheme({
  colors: {
    background: palette.white,
    surface: palette.offWhite,
    primary: palette.neonBlue,
    secondary: palette.rose,
    accent: palette.fandango,
    text: palette.black,
    textSecondary: palette.gray,
    border: palette.lightGray,
    error: palette.red,
    success: palette.vividSkyBlue,
    warning: palette.yellow,
    ...palette,
  },
  spacing,
  borderRadii: {
    sm: 6,
    md: 12,
    lg: 20,
  },
  textVariants: lightTextVariants,
});

export const darkRestyleTheme = createTheme({
  ...lightRestyleTheme,
  colors: {
    ...lightRestyleTheme.colors,
    background: palette.black,
    surface: palette.gray,
    primary: palette.chefchaouenBlue,
    text: palette.offWhite,
    textSecondary: palette.lightGray,
    border: palette.gray,
  },
  textVariants: darkTextVariants,
});

export type Theme = typeof lightRestyleTheme;
