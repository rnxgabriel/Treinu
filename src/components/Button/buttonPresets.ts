import { RestyleTypes } from "@types";

export const buttonSizes = {
  long: {
    width: 300,
    paddingVertical: "s12",
    paddingHorizontal: "s32",
    borderRadius: "s16",
  },
  medium: {
    width: 200,
    paddingVertical: "s10",
    paddingHorizontal: "s24",
    borderRadius: "s14",
  },
  short: {
    width: 120,
    paddingVertical: "s8",
    paddingHorizontal: "s16",
    borderRadius: "s12",
  },
  label: {
    width: "auto",
    paddingVertical: "s8",
    paddingHorizontal: "s16",
    borderRadius: "s12",
  },
} satisfies Record<string, RestyleTypes>;
export type ButtonSizes = keyof typeof buttonSizes;
