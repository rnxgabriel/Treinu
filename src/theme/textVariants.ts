export const textVariants = {
  defaults: {
    fontFamily: "System",
    fontSize: 16,
  },
  header: {
    fontFamily: "System",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
  subheader: {
    fontFamily: "System",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
  },
  title: {
    fontFamily: "System",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
  },
  body: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  caption: {
    fontFamily: "System",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  bold: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
  link: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    textDecorationLine: "underline",
  },
  button: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
};

export const lightTextVariants = {
  ...textVariants,
  defaults: {
    ...textVariants.defaults,
    color: "black",
  },
  header: {
    ...textVariants.header,
    color: "neonBlue",
  },
  subheader: {
    ...textVariants.subheader,
    color: "neonBlue",
  },
  title: {
    ...textVariants.title,
    color: "black",
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
    color: "chefchaouenBlue",
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
    color: "neonBlue",
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
    color: "zaffre",
  },
  button: {
    ...textVariants.button,
    color: "offWhite",
  },
};
