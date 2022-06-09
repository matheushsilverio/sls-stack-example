import dotenv from 'dotenv';
import Knex from 'knex';

dotenv.config();

const isDevelopment = process.env.NODE_ENV == 'development';

export const DatabaseConnection = Knex({
  client: 'mysql',
  connection: {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 3306,
    database: process.env.DATABASE_NAME || 'local',
  },
  pool: {
    min: Number(process.env.DATABASE_POOL_MIN) || 0,
    max: Number(process.env.DATABASE_POOL_MAX) || 100,
    idleTimeoutMillis: Number(process.env.DATABASE_POOL_IDLE) || 10000,
  },
  acquireConnectionTimeout: 5000,
  debug: isDevelopment,
});
