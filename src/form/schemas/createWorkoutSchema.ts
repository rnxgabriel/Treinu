import { z } from "zod";

enum SerieEnum {
  Failure = "F",
  Warmup = "W",
  Normal = "N",
}

type FormValues = {
  selectedsExercises: {
    uuid: string;
    series: { number: number; serieType: SerieEnum }[];
  }[];
};

export const createWorkoutForm = z.object({
  selectedsExercises: z
    .array(z.string())
    .min(1, "Selecione pelo menos um exercício"),
});
