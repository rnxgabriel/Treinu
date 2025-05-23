import { Box, Divider, Icon, Screen, Text } from "@components";
import { ExerciseT, useExerciseService } from "@domain";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { translateMuscle } from "@utils";
import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";

export function LibraryScreen() {
  const { navigate } = useNavigation();
  const { read } = useExerciseService();
  const [exercises, setExercises] = useState<ExerciseT[]>([]);

  function RenderItem(item: ExerciseT) {
    return (
      <Box
        p="s8"
        borderRadius="s12"
        borderColor="border"
        borderWidth={1}
        gap="s8"
        backgroundColor="surface"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box p="s4">
          <Text>Nome: {item.name}</Text>
          <Text variant="caption">Descrição: {item.description}</Text>
          <Text variant="caption">
            Alvo: {translateMuscle(item.principalMuscle)}
          </Text>
        </Box>
        <Icon
          family="MaterialIcons"
          name="edit"
          color="inverseBackground"
          onPress={() => console.log("press")}
        />
      </Box>
    );
  }

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        setExercises(await read());
      };
      fetch();
    }, []),
  );

  return (
    <Screen
      title="Biblioteca"
      rightComponent={
        <Icon
          family="MaterialIcons"
          name="add"
          color="primaryDark"
          size="s40"
          onPress={() => navigate("NewExercise")}
        />
      }
    >
      <FlatList
        data={exercises}
        renderItem={({ item }) => <RenderItem {...item} />}
        ItemSeparatorComponent={() => <Divider height={2} />}
      />
    </Screen>
  );
}
