import { useAppTheme } from "@theme";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { AnimatedGradient } from "../AnimatedGradient/AnimatedGradient";
import { AnimatedOpacityBox } from "../Box/AnimatedBox";
import { BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import { buttonSizes } from "./buttonPresets";

interface GradientButtonProps extends BoxProps {
  title: string;
  size?: keyof typeof buttonSizes;
  loading?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export function GradientButton({
  title,
  onPress,
  disabled,
  size = "medium",
  loading = false,
  ...rest
}: GradientButtonProps) {
  const { colors } = useAppTheme();
  const presetStyles = buttonSizes[size];

  const scale = useSharedValue(1);
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => (scale.value = withTiming(0.97));
  const handlePressOut = () => (scale.value = withTiming(1));

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 4000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  return (
    <AnimatedOpacityBox
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled}
      style={animatedStyle}
    >
      <AnimatedGradient disabled={disabled} {...presetStyles} {...rest}>
        {loading ? (
          <ActivityIndicator color={colors.text} />
        ) : (
          <Text
            variant="button"
            textAlign="center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        )}
      </AnimatedGradient>
    </AnimatedOpacityBox>
  );
}
