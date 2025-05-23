import { MuscleEnum } from "@types";

export const MUSCLE_GROUP: { label: string; value: MuscleEnum }[] = [
  { label: "Peito", value: MuscleEnum.CHEST },
  { label: "Corpo Inteiro", value: MuscleEnum.FULL_BODY },
  { label: "Cardio", value: MuscleEnum.CARDIO },
  { label: "Parte superior das costas", value: MuscleEnum.UPPER_BACK },
  { label: "Parte Inferior das costas", value: MuscleEnum.LOWER_BACK },
  { label: "Látissimo", value: MuscleEnum.LATS },
  { label: "Ombros", value: MuscleEnum.SHOULDERS },
  { label: "Bíceps", value: MuscleEnum.BICEPS },
  { label: "Tríceps", value: MuscleEnum.TRICEPS },
  { label: "Antebraços", value: MuscleEnum.FOREARMS },
  { label: "Abdômen", value: MuscleEnum.ABS },
  { label: "Glúteos", value: MuscleEnum.GLUTES },
  { label: "Quadríceps", value: MuscleEnum.QUADRICEPS },
  { label: "Posterior de coxa", value: MuscleEnum.HAMSTRINGS },
  { label: "Panturrilhas", value: MuscleEnum.CALVES },
  { label: "Adutores", value: MuscleEnum.ADDUCTORS },
  { label: "Abdutores", value: MuscleEnum.ABDUCTORS },
  { label: "Trapézio", value: MuscleEnum.TRAPEZIUS },
];
