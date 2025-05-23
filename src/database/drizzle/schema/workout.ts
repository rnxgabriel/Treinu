import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import RNUUID from "react-native-uuid";

export const workouts = sqliteTable("workouts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => RNUUID.v4().toString()),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
