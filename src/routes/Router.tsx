import { NavigationContainer } from "@react-navigation/native";
import { StackRouter } from "./StackRouter";

export function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
