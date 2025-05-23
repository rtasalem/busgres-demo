import { BusgresClient } from 'busgres'
import 'dotenv/config'

export const busgresClient = new BusgresClient({
  serviceBus: {
    connectionString: process.env.SB_CONNECTION_STRING,
    entity: process.env.SB_ENTITY,
    entityType: 'queue'
  },
  postgres: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
  }
})
