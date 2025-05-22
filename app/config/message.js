import dotenv from 'dotenv'
dotenv.config()

export const messageConfig = {
  connectionString: process.env.SB_CONNECTION_STRING,
  entityName: process.env.SB_TOPIC,
  entityType: 'topic',
  subscriptionName: process.env.SB_SUBSCRIPTION
}