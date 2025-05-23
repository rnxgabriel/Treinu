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
<<<<<<< HEAD
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },
  placeholder: {
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
  },
  error: {
    fontFamily: "System",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
=======
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
} satisfies Record<string, TextStyle>;

export const lightTextVariants = {
  ...textVariants,
  defaults: {
    ...textVariants.defaults,
    color: "black",
  },
  header: {
    ...textVariants.header,
<<<<<<< HEAD
    color: "violetDark",
=======
    color: "violet",
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
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
<<<<<<< HEAD
  placeholder: {
    ...textVariants.placeholder,
    color: "lightGray",
  },
=======
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
};

export const darkTextVariants = {
  ...textVariants,
  defaults: {
    ...textVariants.defaults,
    color: "offWhite",
  },
  header: {
    ...textVariants.header,
<<<<<<< HEAD
    color: "violetDark",
=======
    color: "violet",
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
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
<<<<<<< HEAD
  placeholder: {
    ...textVariants.placeholder,
    color: "offWhite",
  },
=======
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
};
