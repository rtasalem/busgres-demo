const { BusgresClient } = require('busgres')
require('dotenv').config()

const sbConnectionString = process.env.CONNECTION_STRING
console.log('Service Bus Connection String:', sbConnectionString)

const sbEntity = process.env.QUEUE
console.log('Service Bus Entity (queue):', sbEntity)

const pgClient = {
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT
}
console.log('PostgreSQL Client:', pgClient)

const bgClient = new BusgresClient(sbConnectionString, sbEntity, pgClient)

module.exports = bgClient