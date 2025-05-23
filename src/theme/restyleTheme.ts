import { createTheme } from "@shopify/restyle";
import { borderRadii } from "./borderRadii";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { darkTextVariants, lightTextVariants } from "./textVariants";

export const lightRestyleTheme = createTheme({
  colors: {
<<<<<<< HEAD
    inverseBackground: palette.black,
=======
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
    background: palette.white,
    surface: palette.offWhite,
    primary: palette.violet,
    primaryDark: palette.violetDark,
    secondary: palette.violetLight,
    text: palette.black,
    textSecondary: palette.gray,
    border: palette.lightGray,
    error: palette.red,
    success: palette.green,
    warning: palette.yellow,
    ...palette,
  },
  spacing,
  borderRadii,
  textVariants: lightTextVariants,
});

export const darkRestyleTheme = createTheme({
  ...lightRestyleTheme,
  colors: {
    ...lightRestyleTheme.colors,
<<<<<<< HEAD
    inverseBackground: palette.white,
=======
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
    background: palette.black,
    surface: palette.darkGray,
    text: palette.offWhite,
    textSecondary: palette.lightGray,
    border: palette.gray,
  },
  textVariants: darkTextVariants,
});

export type Theme = typeof lightRestyleTheme;
