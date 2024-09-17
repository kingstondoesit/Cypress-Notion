import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Check for the database URL in environment variables
if (!process.env.DATABASE_URL) {
  console.error('🔴 Cannot find database URL');
  process.exit(1); // Exit the process if no DATABASE_URL is found
}

// Define and export the config object
const config: Config = {
  schema: './src/lib/supabase/schema.ts', // Path to your schema
  out: './migrations', // Path to store generated migrations
  driver: 'pg',  // Specify the driver (assuming PostgreSQL here)
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // Use 'connectionString' instead of 'url'
  },
  verbose: true, // Enable verbose logging
  strict: true, // Enforce strict mode
}; 

// satisfies Config;

export default config;
