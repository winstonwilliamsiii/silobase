import dotenv from 'dotenv'
dotenv.config()

export default {
  dbClient: process.env.DB_CLIENT || 'pg',
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'password',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbName: process.env.DB_NAME || 'mydatabase',

  
  port: Number(process.env.PORT) || 3000,
  apiKeys: {
    read: process.env.API_KEY_READ || '',
    write: process.env.API_KEY_WRITE || '',
    full: process.env.API_KEY_FULL || '',
  }
}