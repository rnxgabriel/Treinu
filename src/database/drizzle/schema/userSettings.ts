import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import RNUUID from "react-native-uuid";

export const userSettings = sqliteTable("user_settings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => RNUUID.v4().toString()),
  reminders: text("reminders"), // JSON Reminder
  motivationalMode: text("motivational_mode").notNull().default("Nenhum"), // "Motivacional", "Desmotivacional", "Nenhum"
  notificationsEnabled: integer("notifications_enabled").notNull().default(1), // 0 = false, 1 = true
});
