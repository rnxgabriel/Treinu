import { Router } from "@routes";
import { AppThemeProvider } from "@theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

enableScreens();
export default function App() {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <Router />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
