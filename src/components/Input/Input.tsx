import { useAppTheme } from "@theme";
import { TextInput, TextInputProps, TextStyle } from "react-native";
import { Box } from "../Box/Box";
import { ExpoFamilyIcon, Icon, IconProps } from "../Icon/Icon";
import { Text, TextProps } from "../Text/Text";

export interface InputProps extends TextInputProps {
  leftIcon?: IconProps<ExpoFamilyIcon>;
  rightIcon?: IconProps<ExpoFamilyIcon>;
  label?: string;
  labelProps?: TextProps;
  errorMessage?: string;
}

export function Input({
  leftIcon,
  rightIcon,
  label,
  labelProps,
  errorMessage,
  ...rest
}: InputProps) {
  const { colors } = useAppTheme();

  const hasError = !!errorMessage;

  const textInputStyle: TextStyle = {
    color: colors.text,
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  };

  return (
    <Box width="100%" id="input-box-container" testID="input-box-Container">
      {label && (
        <Text variant="body" paddingHorizontal="s8" pb="s4" {...labelProps}>
          {label}
        </Text>
      )}

      <Box
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderRadius="s8"
        borderColor={hasError ? "error" : "border"}
        paddingHorizontal="s8"
        paddingVertical="s4"
        style={{
          borderColor: hasError ? colors.error : colors.border,
        }}
      >
        {leftIcon && <Icon {...leftIcon} />}
        <TextInput
          style={textInputStyle}
          {...rest}
          placeholderTextColor={colors.textSecondary}
        />
        {rightIcon && <Icon {...rightIcon} />}
      </Box>

      {hasError && (
        <Text variant="error" color="error" mt="s4" paddingHorizontal="s8">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
