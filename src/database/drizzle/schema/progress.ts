import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import RNUUID from "react-native-uuid";

export const progress = sqliteTable("progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => RNUUID.v4().toString()),
  exerciseId: text("exercise_id").notNull(), // FK exercises
  workoutDate: integer("workout_date", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  weightUsed: integer("weight_used"),
  repetitions: integer("repetitions"),
  notes: text("notes"),
});
