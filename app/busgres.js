import { startBusgres, stopBusgres } from 'busgres'
import dotenv from 'dotenv'
import { dbConfig, messageConfig } from './config/index.js'

dotenv.config()

export default async function main() {
  let dbClient, messageClient, receiver

  try {
    const result = await startBusgres(
      messageConfig,
      dbConfig,
      dbConfig.tableName,
      dbConfig.columnNames
    )

    dbClient = result.dbClient
    messageClient = result.messageClient
    receiver = result.receiver

    console.log('Busgres started and listening for messages...')

  } catch (err) {
    console.error('Failed to start Busgres:', err)
  }

  process.on('SIGINT', async () => {
    console.log('Shutting down...')
    await stopBusgres(dbClient, messageClient, receiver)
    process.exit(0)
  })
}
