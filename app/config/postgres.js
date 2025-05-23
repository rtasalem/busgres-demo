export const postgresConfig = {
  postgres: {
    username: {
      doc: 'Username associated with Postgres server.',
      format: String,
      default: 'postgres',
      env: 'PG_USERNAME'
    },
    database: {
      doc: 'Name of Postgres database.',
      format: String,
      default: 'busgres_demo',
      env: 'PG_DATABASE'
    },
    host: {
      doc: 'Host associated with the Postgres database.',
      format: String,
      default: '',
      env: 'PG_HOST'
    },
    port: {
      doc: 'Port associated with the Postgres database.',
      format: String,
      default: '',
      env: 'PG_PORT'
    }
  }
}
