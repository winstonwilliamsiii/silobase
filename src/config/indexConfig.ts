import dotenv from 'dotenv'
dotenv.config()

export default {
  dbClient: process.env.DB_CLIENT || 'pg',
  dbUrl: process.env.DATABASE_URL || '',
  port: Number(process.env.PORT) || 3000,
  apiKeys: {
    read: process.env.API_KEY_READ || '',
    write: process.env.API_KEY_WRITE || '',
    full: process.env.API_KEY_FULL || '',
  }
}