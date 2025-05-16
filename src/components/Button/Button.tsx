import { useAppTheme } from "@theme";
import { ActivityIndicator } from "react-native";
import { AnimatedOpacityBox } from "../Box/AnimatedBox";
import { OpacityBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import { ButtonSizes, buttonSizes } from "./buttonPresets";

interface ButtonProps extends OpacityBoxProps {
  title: string;
  size?: ButtonSizes;
  loading?: boolean;
}

export function Button({
  title,
  size = "label",
  color = "neonBlue",
  loading,
  ...rest
}: ButtonProps) {
  const { colors } = useAppTheme();
  const presetSize = buttonSizes[size];

  return (
    <AnimatedOpacityBox
      justifyContent="center"
      alignItems="center"
      {...presetSize}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text color={color} variant="button">
          {title}
        </Text>
      )}
    </AnimatedOpacityBox>
  );
}
