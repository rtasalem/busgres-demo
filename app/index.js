const bgClient = require('./busgres-client')
const { tableName, columnNames } = require('./table-column-names')
require('dotenv').config()

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

bgClient.receiveMessage(tableName, columnNames)
