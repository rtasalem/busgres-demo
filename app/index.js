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
    console.log('Connected to PostgreSQL database')

    const query = 'SELECT * FROM busgres'
    const result = await bgClient.pgClient.query(query)

    console.log('All messages in the database:')
    result.rows.forEach((row, index) => {
      console.log(`Message ${index + 1}:`, row)
    })
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error)
  })
