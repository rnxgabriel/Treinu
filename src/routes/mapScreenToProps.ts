<<<<<<< HEAD
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
  Library: {
    icon: "library-books",
  },
};
=======
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
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
