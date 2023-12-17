import 'dotenv/config';
import { migrate as migrateDrizzle } from 'drizzle-orm/planetscale-serverless/migrator';
import { db, connectionPool } from '../database'

async function migrate(){
    await migrateDrizzle(db,{migrationsFolder:'../database/migrations' });
    // await connectionPool

}


migrate()
