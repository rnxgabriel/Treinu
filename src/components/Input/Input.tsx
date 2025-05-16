import { useAppTheme } from "@theme";
import { TextInput, TextInputProps, ViewStyle } from "react-native";
import { Box } from "../Box/Box";
import { ExpoFamilyIcon, Icon, IconProps } from "../Icon/Icon";
import { Text, TextProps } from "../Text/Text";

interface InputProps extends TextInputProps {
  leftIcon?: IconProps<ExpoFamilyIcon>;
  rightIcon?: IconProps<ExpoFamilyIcon>;
  label?: string;
  labelProps?: TextProps;
}

export function Input({
  leftIcon,
  rightIcon,
  label,
  labelProps,
  ...rest
}: InputProps) {
  const { colors } = useAppTheme();

  const textInputStyle: ViewStyle = {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  };

  return (
    <Box>
      {label && (
        <Text variant="body" paddingHorizontal="s8" pb="s4" {...labelProps}>
          {label}
        </Text>
      )}
      <Box
        id="input-box-container"
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderRadius="s12"
        borderColor="border"
        paddingHorizontal="s8"
      >
        {leftIcon && <Icon {...leftIcon} />}
        <TextInput
          style={textInputStyle}
          {...rest}
          placeholderTextColor={colors.textSecondary}
        />
        {rightIcon && <Icon {...rightIcon} />}
      </Box>
    </Box>
  );
}
