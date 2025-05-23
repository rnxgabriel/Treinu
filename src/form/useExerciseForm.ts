import { MUSCLE_GROUP } from "@constants";
import { useExerciseService } from "@domain";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { Keyboard } from "react-native";
import { ExerciseFormData, exerciseSchema } from "./schemas/exerciseSchema";

interface UseExerciseFormReturn {
  form: UseFormReturn<ExerciseFormData>;
  showAccessory: boolean;
  toggleAccessory: () => void;
  principalMuscleData: { label: string; value: string | number }[];
  accessoryMuscleData: { label: string; value: string | number }[];
  handleSubmit: () => void;
}

export function useExerciseForm(): UseExerciseFormReturn {
  const { create } = useExerciseService();
  const [showAccessory, setShowAccessory] = useState(false);

  const form = useForm<ExerciseFormData>({
    resolver: zodResolver(exerciseSchema),
    defaultValues: {
      name: "",
      description: "",
      exerciseType: undefined,
      principalMuscle: undefined,
      accessoryMuscles: [],
      equipment: undefined,
    },
  });

  const { watch } = form;
  const principalMuscle = watch("principalMuscle");
  const accessoryMuscles = watch("accessoryMuscles") || [];

  // Filters main muscle options (excludes selected accessory muscles)
  const principalMuscleData = MUSCLE_GROUP.filter(
    (item) => !accessoryMuscles.includes(item.value),
  );

  // Filters accessory muscle options (excludes main muscle)
  const accessoryMuscleData = MUSCLE_GROUP.filter(
    (item) => item.value !== principalMuscle,
  );

  const toggleAccessory = () => {
    setShowAccessory((prev) => !prev);
    if (showAccessory) {
      form.setValue("accessoryMuscles", []);
    }
  };

  const handleSubmit = form.handleSubmit((data) => {
    Keyboard.dismiss();
    create(data);
    form.reset();
    setShowAccessory(false);
  });

  return {
    form,
    showAccessory,
    toggleAccessory,
    principalMuscleData,
    accessoryMuscleData,
    handleSubmit,
  };
}
