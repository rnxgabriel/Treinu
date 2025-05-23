import Animated from "react-native-reanimated";
import { Box, OpacityBox, PressableBox } from "./Box";

export const AnimatedBox = Animated.createAnimatedComponent(Box);
export const AnimatedOpacityBox = Animated.createAnimatedComponent(OpacityBox);
export const AnimatedPressableBox =
  Animated.createAnimatedComponent(PressableBox);
