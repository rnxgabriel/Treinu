<<<<<<< HEAD
import { useAppSafeArea } from "@hooks";
import { useAppTheme } from "@theme";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { ScrollViewContainer, ViewContainer } from "./ScreenContainer";
import { ScreenHeader } from "./ScreenHeader";

interface ScreenProps extends BoxProps {
  scrollable?: boolean;
  title?: string;
  rightComponent?: ReactNode;
  canGoBack?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  canGoBack,
  title,
  rightComponent,
  ...rest
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s32"
          {...rest}
          style={[{ paddingTop: top, paddingBottom: bottom }, rest.style]}
        >
          <ScreenHeader
            title={title}
            canGoBack={canGoBack}
            rightComponent={rightComponent}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
=======
import { useAppSafeArea } from "@hooks";
import { useAppTheme } from "@theme";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { ScrollViewContainer, ViewContainer } from "./ScreenContainer";
import { ScreenHeader } from "./ScreenHeader";

interface ScreenProps extends BoxProps {
  scrollable?: boolean;
  title?: string;
  rightComponent?: ReactNode;
  canGoBack?: boolean;
}

export function Screen({
  children,
  scrollable,
  canGoBack,
  title,
  rightComponent,
  ...rest
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          style={[{ paddingTop: top, paddingBottom: bottom }, rest.style]}
          paddingHorizontal={"s32"}
          {...rest}
        >
          <ScreenHeader
            title={title}
            children={rightComponent}
            canGoBack={canGoBack}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
