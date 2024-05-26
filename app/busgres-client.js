const { BusgresClient } = require('busgres')
require('dotenv').config()

const sbConnectionString = process.env.SB_CONNECTION_STRING
console.log('Service Bus Connection String:', sbConnectionString)

const sbEntity = process.env.SB_QUEUE
console.log('Service Bus Entity (queue):', sbEntity)

const pgClient = {
  user: process.env.PG_USERNAME,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT
}
console.log('PostgreSQL Client:', pgClient)

const bgClient = new BusgresClient(sbConnectionString, sbEntity, pgClient)

module.exports = bgClient