import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const JsonForms = pgTable('jsonForms', {
        id: serial('id').primaryKey(),
        jsonform: text('jsonform').notNull(),
        created_by: varchar('created_by').notNull(),
        created_at: varchar('created_at').notNull()
    });