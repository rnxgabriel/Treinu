import { AnimatedGradient, BlurBox, Icon, PressableBox } from "@components";
import { useAppSafeArea } from "@hooks";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AppTabParamList } from "@types";
import React, { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { mapScreenToProps } from "./mapScreenToProps";

export function TabBarComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [keyboardOnScreen, setKeyboardOnScreen] = useState(false);
  const { bottom } = useAppSafeArea();

  const handleKeyboardShow = useCallback(() => setKeyboardOnScreen(true), []);
  const handleKeyboardHide = useCallback(() => setKeyboardOnScreen(false), []);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", handleKeyboardShow);
    const hideSub = Keyboard.addListener("keyboardDidHide", handleKeyboardHide);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [handleKeyboardShow, handleKeyboardHide]);

  if (keyboardOnScreen) return null;

  return (
    <AnimatedGradient duration={4000}>
      <BlurBox
        style={{ paddingBottom: bottom }}
        alignItems="center"
        flexDirection="row"
        pt="s12"
        tint="systemMaterialDark"
        intensity={40}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const tabItem = mapScreenToProps[route.name as keyof AppTabParamList];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                params: route.params,
                merge: true,
              });
            }
          };

          return (
            <PressableBox
              key={route.key}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              flex={1}
              alignItems="center"
            >
              <Icon
                family="MaterialIcons"
                name={tabItem.icon}
                color={isFocused ? "offWhite" : "black"}
                disabled
              />
            </PressableBox>
          );
        })}
      </BlurBox>
    </AnimatedGradient>
  );
}
