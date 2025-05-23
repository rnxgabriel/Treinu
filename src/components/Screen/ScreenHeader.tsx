<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

interface ScreenHeaderProps {
  title?: string;
  canGoBack?: boolean;
  rightComponent?: React.ReactNode;
}

export function ScreenHeader({
  title,
  rightComponent,
  canGoBack,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Box gap="s4" marginBottom="s8">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          {canGoBack && (
            <Icon
              family="MaterialIcons"
              name="arrow-back-ios"
              size="s32"
              color="primaryDark"
              onPress={handleBackPress}
            />
          )}
          {title && <Text variant="header">{title}</Text>}
        </Box>
        {rightComponent}
      </Box>
      <Divider height={2} />
    </Box>
  );
}
=======
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

interface ScreenHeaderProps {
  title?: string;
  canGoBack?: boolean;
  children?: React.ReactNode;
}

export function ScreenHeader({
  title,
  children,
  canGoBack,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Box gap="s4">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          {canGoBack && (
            <Icon
              family="MaterialIcons"
              name="arrow-back-ios"
              size="s32"
              color="primary"
              onPress={handleBackPress}
            />
          )}
          <Text variant="header">{title}</Text>
        </Box>
        {children}
      </Box>
      <Divider height={2} />
    </Box>
  );
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
