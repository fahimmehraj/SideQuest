import { integer, text, boolean, pgTable, decimal, serial } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  universityName: text("university_name").notNull(),
  balance: decimal("balance", { precision: 2 }).default("0").notNull(),
  experience: integer("experience").default(0).notNull(),
});

export const gig = pgTable("gig", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  requesterId: text("requester_id").references(() => user.id).notNull(),
  pay: decimal("pay", { precision: 2 }).notNull(),
  location: text("location").notNull(),
  experienceRequired: integer("experience_required").notNull(),
  phoneNumber: text("phone_number").notNull(),
  workerId: text("worker_id").references(() => user.id),
});

export const todo = pgTable("todo", {
  id: text("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
