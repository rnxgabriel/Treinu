import { Theme, useAppTheme } from "@theme";
import { useEffect, useState } from "react";
import { ColorValue } from "react-native";
import {
  Easing,
  interpolateColor,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type Color = keyof Theme["colors"];

export type UseAnimatedGradientProps = {
  colors?: [Color, Color, Color];
  duration?: number;
};

export function useAnimatedGradient({
  colors = ["neonBlue", "primary", "secondary"],
  duration = 4000,
}: UseAnimatedGradientProps) {
  const theme = useAppTheme();

  const progress = useSharedValue(0);
  const [animatedColors, setAnimatedColors] = useState<
    [ColorValue, ColorValue]
  >([theme.colors[colors[0]], theme.colors[colors[1]]]);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  useDerivedValue(() => {
    const color1 = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors[colors[0]], theme.colors[colors[1]]],
    );
    const color2 = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors[colors[1]], theme.colors[colors[2]]],
    );

    runOnJS(setAnimatedColors)([color1, color2]);
  }, [progress]);

  return animatedColors;
}
