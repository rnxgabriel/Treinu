import { IconProps } from "@components";
import { AppTabParamList } from "@types";

export const mapScreenToProps: Record<
  keyof AppTabParamList,
  {
    icon: IconProps<"MaterialIcons">["name"];
  }
> = {
  Home: {
    icon: "home-filled",
  },
  Workout: {
    icon: "bolt",
  },
};
