import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import RNUUID from "react-native-uuid";

export const exercises = sqliteTable("exercises", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => RNUUID.v4().toString()),
  workoutId: text("workout_id").notNull(), // FK workouts
  name: text("name").notNull(),
  imageUrl: text("image_url"), // URL or image base64
  category: text("category").notNull(), // chest, back and others
  series: integer("series").notNull(),
  repetitions: integer("repetitions").notNull(),
  weight: integer("weight"),
  notes: text("notes"),
});
