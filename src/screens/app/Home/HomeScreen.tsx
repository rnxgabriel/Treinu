<<<<<<< HEAD
import { Box, Button, Screen } from "@components";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const { navigate } = useNavigation();

  const handleNewExercise = () => navigate("NewExercise");
  const handleNewWorkout = () => navigate("NewWorkout");

  return (
    <Screen title="Início">
      <Box flexDirection="row" justifyContent="space-between">
        <Button title="Novo Treino" onPress={handleNewWorkout} />
        <Button title="Novo Exercício" onPress={handleNewExercise} />
      </Box>
    </Screen>
  );
}
=======
import { Box, Button, Screen } from "@components";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <Screen title="Início" flex={1}>
      <Box>
        <ScrollView horizontal>
          <Button title="Novo Treino" size="label" />
          <Button
            title="Novo Exercício"
            size="label"
            onPress={() => navigate("Exercise")}
          />
        </ScrollView>
      </Box>
    </Screen>
  );
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
