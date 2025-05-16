import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAppTheme } from "@theme";
import React, { useCallback, useMemo, useRef } from "react";

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
        appearsOnIndex={2}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  useFocusEffect(
    useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []),
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backgroundStyle={{ backgroundColor: colors.surface }}
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
  );
}
