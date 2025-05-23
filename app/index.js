import { busgresClient } from './busgres-client.js'
import { tableName, columnNames } from './constants.js'

await busgresClient.start(tableName, columnNames)

process.on('SIGINT', async () => {
  await busgresClient.stop()
  process.exit()
})
