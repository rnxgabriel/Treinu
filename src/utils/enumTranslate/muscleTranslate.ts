import { MuscleEnum } from "@types";

export function translateMuscle(muscle: MuscleEnum): string {
  const translations: Record<MuscleEnum, string> = {
    [MuscleEnum.CHEST]: "Peito",
    [MuscleEnum.FULL_BODY]: "Corpo inteiro",
    [MuscleEnum.CARDIO]: "Cardio",
    [MuscleEnum.UPPER_BACK]: "Parte superior das costas",
    [MuscleEnum.LOWER_BACK]: "Parte inferior das costas",
    [MuscleEnum.LATS]: "Dorsais",
    [MuscleEnum.SHOULDERS]: "Ombros",
    [MuscleEnum.BICEPS]: "Bíceps",
    [MuscleEnum.TRICEPS]: "Tríceps",
    [MuscleEnum.FOREARMS]: "Antebraços",
    [MuscleEnum.ABS]: "Abdominais",
    [MuscleEnum.GLUTES]: "Glúteos",
    [MuscleEnum.QUADRICEPS]: "Quadríceps",
    [MuscleEnum.HAMSTRINGS]: "Isquiotibiais",
    [MuscleEnum.CALVES]: "Panturrilhas",
    [MuscleEnum.ADDUCTORS]: "Adutores",
    [MuscleEnum.ABDUCTORS]: "Abdutores",
    [MuscleEnum.TRAPEZIUS]: "Trapézio",
  };

  return translations[muscle] || muscle;
}
