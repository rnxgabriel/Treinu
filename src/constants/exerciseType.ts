import { ExerciseTypeEnum } from "@domain";

export const EXERCISE_TYPE: { label: string; value: ExerciseTypeEnum }[] = [
  { label: "Peso & Repetiçao", value: ExerciseTypeEnum.WEIGHT_REPS },
  { label: "Repetições", value: ExerciseTypeEnum.REPS },
  { label: "Tempo", value: ExerciseTypeEnum.DURATION },
  { label: "Tempo & Peso", value: ExerciseTypeEnum.DURATION_WEIGHT },
  { label: "Tempo & Distância", value: ExerciseTypeEnum.DURATION_DISTANCE },
  { label: "Distância", value: ExerciseTypeEnum.DISTANCE },
  { label: "Distância & Tempo", value: ExerciseTypeEnum.DISTANCE_DURATION },
];
