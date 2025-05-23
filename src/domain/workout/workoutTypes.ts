export type WorkoutT = {
  id: string;
  userId: string;
  name: string;
  description?: string;
  createdAt: Date;
};

export enum WorkoutSerieEnum {
  Failure = "F",
  Warmup = "W",
  Normal = "N",
}

export type WorkoutSerieT = {
  number: number;
  serieType: WorkoutSerieEnum;
};

export type WorkoutExerciseT = {
  uuid: string;
  series: WorkoutSerieT[];
};
