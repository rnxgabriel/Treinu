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
