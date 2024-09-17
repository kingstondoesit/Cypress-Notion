import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from '../../../node_modules/drizzle-orm/postgres-js/migrator';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴no databsase url');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDB = async () => {
  try {
    console.log('🟠 Migrating client');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('🟢 Successfully Migrated');
  } catch (error) {
    console.log('🔴 Error migrating client');
  }
};

migrateDB();
export default db;
