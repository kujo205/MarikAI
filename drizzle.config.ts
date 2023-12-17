import type { Config } from 'drizzle-kit'
export default {
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
  driver: 'mysql2',
  strict: true,
  dbCredentials: {
    uri: process.env.DATABASE_URL,
  },
} satisfies Config
