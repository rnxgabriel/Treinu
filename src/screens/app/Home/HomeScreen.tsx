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
