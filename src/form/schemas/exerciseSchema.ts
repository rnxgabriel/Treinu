import { ExerciseTypeEnum } from "@domain";
import { EquipmentEnum, MuscleEnum } from "@types";
import generateUUID from "react-native-uuid";
import { z } from "zod";

// Zod schema
export const exerciseSchema = z.object({
  uuid: z
    .string()
    .default(() => generateUUID.v4())
    .optional(),
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().optional(),
  exerciseType: z.nativeEnum(ExerciseTypeEnum, {
    required_error: "O tipo de exercício é obrigatório",
  }),
  principalMuscle: z.nativeEnum(MuscleEnum, {
    required_error: "O músculo principal é obrigatório",
  }),
  accessoryMuscles: z.array(z.nativeEnum(MuscleEnum)).optional(),
  equipment: z.nativeEnum(EquipmentEnum, {
    required_error: "O equipamento é obrigatório",
  }),
});

// Tipo inferido do esquema
export type ExerciseFormData = z.infer<typeof exerciseSchema>;
