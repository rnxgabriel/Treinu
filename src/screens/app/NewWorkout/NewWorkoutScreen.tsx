import { Screen } from "@components";
import { ExerciseT, useExerciseService } from "@domain";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export function NewWorkoutScreen() {
  const { read } = useExerciseService();
  const [exercises, setExercises] = useState<ExerciseT[]>([]);

  const { control } = useForm();

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        setExercises(await read());
      };
      fetch();
    }, []),
  );

  return <Screen></Screen>;
}
