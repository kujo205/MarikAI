import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import * as schema from './schema'

// create the connection
export const connectionPool = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
})

export const db = drizzle(connectionPool,{
    schema
})
