import MaskedView from "@react-native-masked-view/masked-view";
import React, { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

import { AnimatedGradient } from "../AnimatedGradient/AnimatedGradient";
import { Box } from "../Box/Box";
import { Text, TextProps } from "../Text/Text";

export function GradientText({
  children,
  variant = "bold",
  ...textProps
}: TextProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (width > 0 && height > 0) {
      setDimensions({ width, height });
    }
  }, []);

  return (
    <Box onLayout={onLayout}>
      {dimensions.width > 0 && dimensions.height > 0 ? (
        <MaskedView
          maskElement={
            <Box alignItems="center" justifyContent="center">
              <Text variant={variant} {...textProps}>
                {children}
              </Text>
            </Box>
          }
        >
          <AnimatedGradient
            width={dimensions.width}
            height={dimensions.height}
            alignSelf="center"
          />
        </MaskedView>
      ) : (
        <Text variant={variant} {...textProps} style={{ opacity: 0 }}>
          {children}
        </Text>
      )}
    </Box>
  );
}
