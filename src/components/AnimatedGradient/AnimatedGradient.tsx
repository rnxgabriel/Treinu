import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useAnimatedGradient } from "@hooks";
import { Theme } from "@theme";
import { Box, BoxProps } from "../Box/Box";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export interface AnimatedGradientProps extends BoxProps {
  children?: React.ReactNode;
  disabled?: boolean;
  duration?: number;
  colors?: [
    keyof Theme["colors"],
    keyof Theme["colors"],
    keyof Theme["colors"],
  ];
}

export const AnimatedGradient = ({
  children,
  disabled = false,
  colors = ["neonBlue", "primary", "secondary"],
  duration = 4000,
  ...rest
}: AnimatedGradientProps) => {
  const animatedColors = useAnimatedGradient({ colors, duration });

  return (
    <Box overflow="hidden" {...rest}>
      <AnimatedLinearGradient
        colors={animatedColors}
        start={[0, 0]}
        end={[1, 1]}
        style={[StyleSheet.absoluteFillObject, { opacity: disabled ? 0.6 : 1 }]}
      />
      {children}
    </Box>
  );
};
