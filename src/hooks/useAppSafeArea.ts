<<<<<<< HEAD
import { useAppTheme } from "@theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
}
=======
import { useAppTheme } from "@theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
