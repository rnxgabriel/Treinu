import * as ExpoIcons from "@expo/vector-icons";
import { Theme, useAppTheme } from "@theme";
import React, { memo, useMemo } from "react";
import { OpacityBox, OpacityBoxProps } from "../Box/Box";

export type ExpoFamilyIcon = keyof typeof ExpoIcons;
export type ExpoExtractedIconNames<F extends ExpoFamilyIcon> =
  keyof (typeof ExpoIcons)[F]["glyphMap"];

export type StaticIcon<F extends ExpoFamilyIcon> = {
  family: F;
  name: ExpoExtractedIconNames<F>;
};

export type IconProps<F extends ExpoFamilyIcon> = {
  family: F;
  name: ExpoExtractedIconNames<F>;
  size?: keyof Theme["spacing"];
  color?: keyof Theme["colors"];
  onPress?: () => void;
} & OpacityBoxProps;

function IconComponentInternal<F extends ExpoFamilyIcon>({
  family,
  name,
  size = "s24",
  color,
  onPress,
  ...rest
}: IconProps<F>) {
  const { colors, spacing } = useAppTheme();

  const IconComponent = useMemo(() => {
    return ExpoIcons[family] as React.ElementType;
  }, [family]);

  if (!IconComponent) return null;

  const resolvedColor = color ? colors[color] : colors.text;
  const resolvedSize = spacing[size];

  return (
    <OpacityBox
      onPress={onPress}
      {...rest}
      touchSoundDisabled
      activeOpacity={1}
    >
      <IconComponent color={resolvedColor} name={name} size={resolvedSize} />
    </OpacityBox>
  );
}

export const Icon = memo(IconComponentInternal) as typeof IconComponentInternal;
