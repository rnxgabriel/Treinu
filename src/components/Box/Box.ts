import {
  Pressable,
  PressableProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity,
} from "react-native";

import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from "@shopify/restyle";

import { Theme } from "@theme";
import { RestyleTypes } from "@types";
import { BlurView, BlurViewProps } from "expo-blur";

export type OpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;
export type PressableBoxProps = PressableProps & RestyleTypes;
export type BlurBoxProps = BlurViewProps & RestyleTypes;

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export const BlurBox = createRestyleComponent<BlurBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  BlurView,
);

export const OpacityBox = createRestyleComponent<OpacityBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable,
);
