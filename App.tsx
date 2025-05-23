import { Router } from "@routes";
import { AppThemeProvider } from "@theme";
<<<<<<< HEAD
=======
import { GestureHandlerRootView } from "react-native-gesture-handler";
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

enableScreens();
export default function App() {
  return (
<<<<<<< HEAD
    <SafeAreaProvider>
      <AppThemeProvider>
        <Router />
      </AppThemeProvider>
    </SafeAreaProvider>
=======
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppThemeProvider>
          <Router />
        </AppThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
  );
}
