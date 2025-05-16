import { TextStyle } from "react-native";

export const textVariants = {
  defaults: {
    fontFamily: "System",
    fontSize: 20,
  },
  header: {
    fontFamily: "System",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 40,
  },
  subheader: {
    fontFamily: "System",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 32,
  },
  title: {
    fontFamily: "System",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 28,
  },
  body: {
    fontFamily: "System",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
  },
  caption: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
  },
  bold: {
    fontFamily: "System",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 24,
  },
  link: {
    fontFamily: "System",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    textDecorationLine: "underline",
  },
  button: {
    fontFamily: "System",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
} satisfies Record<string, TextStyle>;

export const lightTextVariants = {
  ...textVariants,
  defaults: {
    ...textVariants.defaults,
    color: "black",
  },
  header: {
    ...textVariants.header,
    color: "violet",
  },
  subheader: {
    ...textVariants.subheader,
    color: "neonBlue",
  },
  title: {
    ...textVariants.title,
    color: "violet",
  },
  body: {
    ...textVariants.body,
    color: "gray",
  },
  caption: {
    ...textVariants.caption,
    color: "lightGray",
  },
  bold: {
    ...textVariants.bold,
    color: "black",
  },
  link: {
    ...textVariants.link,
    color: "neonBlue",
  },
  button: {
    ...textVariants.button,
    color: "offWhite",
  },
};

export const darkTextVariants = {
  ...textVariants,
  defaults: {
    ...textVariants.defaults,
    color: "offWhite",
  },
  header: {
    ...textVariants.header,
    color: "violet",
  },
  subheader: {
    ...textVariants.subheader,
    color: "neonBlue",
  },
  title: {
    ...textVariants.title,
    color: "white",
  },
  body: {
    ...textVariants.body,
    color: "offWhite",
  },
  caption: {
    ...textVariants.caption,
    color: "offWhite",
  },
  bold: {
    ...textVariants.bold,
    color: "white",
  },
  link: {
    ...textVariants.link,
    color: "neonBlue",
  },
  button: {
    ...textVariants.button,
    color: "offWhite",
  },
};
