import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  status: varchar('status', { length: 50 }),
  created_at: timestamp('created_at').defaultNow()
});

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  company: varchar('company', { length: 255 }),
  campaign_id: serial('campaign_id'),
  status: varchar('status', { length: 50 }),
  last_contact: timestamp('last_contact')
});
