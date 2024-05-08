const { BusgresClient } = require('busgres')
require('dotenv').config()

const sbConnectionString = process.env.CONNECTION_STRING

const sbConfig = {
  topic: process.env.TOPIC,
  subscription: process.env.SUBSCRIPTION
}

const pgConfig = {
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT
}

const bgClient = new BusgresClient(sbConnectionString, sbConfig, pgConfig)

bgClient
  .connect()
  .then(async () => {
    console.log(`You are now connected to the ${process.env.DATABASE} database in PostgreSQL.`)

    const query = 'select * from busgres'
    const result = await bgClient.pgClient.query(query)

    console.log('All messages in the database:')
    result.rows.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row)
    })
  })
  .catch((error) => {
    console.error('There has been an error connecting to your PostgreSQL database:', error)
  })
