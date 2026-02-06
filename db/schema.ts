import { pgTable, varchar, timestamp, uuid, text } from "drizzle-orm/pg-core";

export const blogTable = pgTable('blogs', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: varchar('title', { length: 255 }).notNull(),
    body: text('body').notNull(),
    orgId: text('org_id').notNull(),
    createdAt: timestamp('created_at').defaultNow()
})

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;
