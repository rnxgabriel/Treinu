import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { $viewDefaultShadow, useAppTheme } from "@theme";
import React, { ForwardedRef, forwardRef, useState } from "react";
import { FlatList } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Box, PressableBox } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { Text } from "../Text/Text";

export interface PickerData {
  label: string;
  value: string | number;
}

export interface PickerProps {
  data: PickerData[];
  selectedValue?: string | number;
  onValueChange?: (value: string | number) => void;
  selectedValues?: (string | number)[];
  onValuesChange?: (values: (string | number)[]) => void;
  isMultiSelect?: boolean;
  label?: string;
  placeholder?: string;
  onBottomSheet?: boolean;
  errorMessage?: string;
  height?: number | "auto";
}

/**
 * Picker com suporte a seleção única e múltipla, compatível com react-hook-form.
 * @param data Lista de opções para o seletor.
 * @param selectedValue Valor selecionado (modo único).
 * @param onValueChange Callback para modo único.
 * @param selectedValues Valores selecionados (modo múltiplo).
 * @param onValuesChange Callback para modo múltiplo.
 * @param isMultiSelect Ativa o modo de seleção múltipla.
 * @param label Texto do label do picker.
 * @param placeholder Texto exibido quando nenhuma opção está selecionada.
 * @param onBottomSheet Usa BottomSheetFlatList em vez de FlatList.
 * @param errorMessage Mensagem de erro para validações.
 */
export const Picker = forwardRef(
  (
    {
      data,
      selectedValue,
      onValueChange,
      selectedValues = [],
      onValuesChange,
      isMultiSelect = false,
      label: labelProp,
      placeholder = "Selecione uma opção",
      onBottomSheet = false,
      errorMessage,
      height = 150,
    }: PickerProps,
    ref: ForwardedRef<any>,
  ) => {
    const { colors, borderRadii, spacing } = useAppTheme();
    const [isOpen, setIsOpen] = useState(false);
    const animation = useSharedValue(0);
    const hasError = !!errorMessage;

    // Calcula o texto a ser exibido
    const displayLabel = isMultiSelect
      ? selectedValues
          .map((value) => data.find((item) => item.value === value)?.label)
          .filter(Boolean)
          .join(", ") || placeholder
      : data.find((item) => item.value === selectedValue)?.label || placeholder;

    const ListComponent = onBottomSheet ? BottomSheetFlatList : FlatList;

    const toggleOpen = () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      animation.value = withTiming(newIsOpen ? 1 : 0, { duration: 400 });
    };

    const animatedStyle = useAnimatedStyle(() => ({
      height: height === "auto" ? animation.value : height * animation.value,
      opacity: animation.value,
      overflow: "hidden",
    }));

    function handleChange(item: PickerData) {
      if (!isMultiSelect && onValueChange) {
        onValueChange(item.value);
        setIsOpen(false);
        animation.value = withTiming(0, { duration: 400 });
      }
    }

    function handleMultiChange(item: PickerData) {
      if (isMultiSelect && onValuesChange) {
        const isSelected = selectedValues.includes(item.value);
        const newSelectedValues = isSelected
          ? selectedValues.filter((value) => value !== item.value)
          : [...selectedValues, item.value];
        onValuesChange(newSelectedValues);
      }
    }

    function renderItem({ item }: { item: PickerData }) {
      const isSelected = isMultiSelect
        ? selectedValues.includes(item.value)
        : item.value === selectedValue;

      return (
        <PressableBox
          onPress={() =>
            isMultiSelect ? handleMultiChange(item) : handleChange(item)
          }
          backgroundColor="background"
          padding="s4"
          paddingHorizontal="s8"
          borderRadius="s8"
          marginBottom="s4"
          accessibilityRole={isMultiSelect ? "checkbox" : "button"}
          accessibilityLabel={item.label}
          accessibilityState={{ checked: isSelected }}
        >
          <Box flexDirection="row" alignItems="center">
            <Text
              variant="body"
              color={isSelected ? "primary" : "text"}
              flex={1}
            >
              {item.label}
            </Text>
            {isSelected && isMultiSelect && (
              <Text variant="body" color="primary" marginLeft="s8">
                ✓
              </Text>
            )}
          </Box>
          <Divider height={0.4} />
        </PressableBox>
      );
    }

    return (
      <Box width="100%">
        {labelProp && (
          <Text variant="body" paddingHorizontal="s8" paddingBottom="s4">
            {labelProp}
          </Text>
        )}
        <Box
          borderWidth={1}
          borderColor={hasError ? "error" : "border"}
          borderRadius="s8"
          paddingHorizontal="s8"
          paddingVertical="s4"
          position="relative"
          style={{ borderColor: hasError ? colors.error : colors.border }}
        >
          <PressableBox
            onPress={toggleOpen}
            accessibilityRole="button"
            accessibilityLabel={isOpen ? "Fechar opções" : "Abrir opções"}
            accessibilityState={{ expanded: isOpen }}
            paddingVertical="s4"
            paddingHorizontal="s8"
            ref={ref}
          >
            <Text
              variant="body"
              color={displayLabel === placeholder ? "textSecondary" : "text"}
              numberOfLines={1}
            >
              {displayLabel}
            </Text>
          </PressableBox>
          <Animated.View
            style={[
              animatedStyle,
              {
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: colors.background,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: borderRadii.s8,
                paddingHorizontal: spacing.s8,
                paddingVertical: spacing.s4,
                marginTop: spacing.s4,
                ...$viewDefaultShadow,
              },
            ]}
          >
            <ListComponent
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) =>
                item.value.toString() + index.toString()
              }
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <Text variant="body" color="textSecondary">
                  Nenhuma opção disponível
                </Text>
              }
            />
          </Animated.View>
        </Box>
        {hasError && (
          <Text
            variant="error"
            color="error"
            marginTop="s4"
            paddingHorizontal="s8"
          >
            {errorMessage}
          </Text>
        )}
      </Box>
    );
  },
);
