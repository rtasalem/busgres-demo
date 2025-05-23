const { BusgresClient } = require('busgres')
require('dotenv').config()

const sbConnectionString = process.env.SB_CONNECTION_STRING
console.log('Service Bus Connection String:', sbConnectionString)

const sbEntityName = process.env.SB_TOPIC
console.log('Service Bus Entity (i.e. queue or topic name):', sbEntityName)

const sbEntitySubscription = process.env.SB_SUBSCRIPTION

const sbEntityType = 'topic'

const pgClient = {
  user: process.env.PG_USERNAME,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT
}
console.log('PostgreSQL Client:', pgClient)

const bgClient = new BusgresClient(sbConnectionString, sbEntityName, sbEntityType, sbEntitySubscription, pgClient)

module.exports = bgClient