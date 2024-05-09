const { BusgresClient } = require('busgres')
require('dotenv').config()

const sbConnectionString = process.env.CONNECTION_STRING
console.log('Service Bus Connection String:', sbConnectionString)

const sbConfig = process.env.QUEUE
console.log('Service Bus Config:', sbConfig)

const pgClient = {
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT
}
console.log('PostgreSQL Client:', pgClient)

const bgClient = new BusgresClient(sbConnectionString, sbConfig, pgClient) 

bgClient
  .connect()
  .then(async () => {
    console.log(
      `You are now connected to the ${process.env.DATABASE} database in PostgreSQL.`
    )

    const query = 'select * from busgres'
    const result = await bgClient.pgClient.query(query)

    console.log('All messages in the database:')
    result.rows.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row)
    })
  })
  .catch((error) => {
    console.error(
      `There has been an error connecting to your PostgreSQL database: ${error}`
    )
  })

bgClient.receiveMessage().then((message) => {
  console.log('Received message:', message)
})