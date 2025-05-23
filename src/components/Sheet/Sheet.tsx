import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAppTheme } from "@theme";
import React, { useCallback, useMemo, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Box } from "../Box/Box";

interface SheetProps {
  children: React.ReactNode;
}

export function Sheet({ children }: SheetProps) {
  const { goBack } = useNavigation();
  const { colors } = useAppTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const snapPoints = useMemo(() => ["90%"], []);

  function renderHandle() {
    return (
      <Box
        width={"100%"}
        height={20}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={48}
          height={4}
          borderRadius="s24"
          backgroundColor="border"
        />
      </Box>
    );
  }

  useFocusEffect(
    useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []),
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          backgroundStyle={{ backgroundColor: colors.surface }}
          handleComponent={renderHandle}
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          style={{ flex: 1 }}
          onDismiss={() => goBack()}
        >
          <BottomSheetView style={{ flex: 1, paddingHorizontal: 32 }}>
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
