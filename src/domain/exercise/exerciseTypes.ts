import { EquipmentEnum, MuscleEnum } from "@types";

export type ExerciseT = {
  uuid: string;
  name: string;
  description?: string;
  exerciseType: ExerciseTypeEnum;
  principalMuscle: MuscleEnum;
  accessoryMuscles?: MuscleEnum[];
  equipment: EquipmentEnum;
};

export enum ExerciseTypeEnum {
  WEIGHT_REPS = "weight_reps",
  REPS = "reps",
  DURATION = "duration",
  DURATION_WEIGHT = "duration_weight",
  DURATION_DISTANCE = "duration_distance",
  DISTANCE = "distance",
  DISTANCE_DURATION = "distance_duration",
}
