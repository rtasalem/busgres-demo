import dotenv from 'dotenv'
dotenv.config()

export const dbConfig = {
  user: process.env.PG_USERNAME,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  tableName: 'busgres',
  columnNames: ['message']
}