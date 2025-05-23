import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExerciseSheet, NewWorkoutScreen } from "@screens";
import { AppStackParamList } from "@types";
import { TabRouter } from "./TabRouter";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AppTabNavigator"
    >
      <Stack.Screen name="AppTabNavigator" component={TabRouter} />
      <Stack.Screen name="NewWorkout" component={NewWorkoutScreen} />
      <Stack.Screen
        name="NewExercise"
        component={ExerciseSheet}
        options={{
          presentation: "transparentModal",
          animation: "fade_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}
