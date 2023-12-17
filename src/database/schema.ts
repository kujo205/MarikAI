import {int,mysqlTable,timestamp} from 'drizzle-orm/mysql-core'

export const chats=mysqlTable('chats',{
    id: int('id').autoincrement().notNull().primaryKey(),
    chatId: int('chat_id').notNull(),
    messagesToRun:int('messages_to_run').notNull().default(50),
    messagesToRunLeft:int('messages_to_run_left').notNull().default(50),
    createdAt:timestamp('created_at').defaultNow(),
    updatedAt:timestamp('updated_at').defaultNow(),
})
