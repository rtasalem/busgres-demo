import { BusgresClient } from 'busgres'
import 'dotenv/config'
import { config } from './config/index.js'

export const busgresClient = new BusgresClient({
  serviceBus: config.get('serviceBus'),
  postgres: config.get('postgres')
})
