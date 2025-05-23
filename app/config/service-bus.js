export const serviceBusConfig = {
  serviceBus: {
    connectionString: {
      doc: 'Connection String for Service Bus namespace.',
      format: String,
      default: '',
      env: 'SB_CONNECTION_STRING'
    },
    entity: {
      doc: 'Name of Service Bus entity.',
      format: String,
      default: '',
      env: 'SB_ENTITY'
    },
    entityType: {
      doc: 'Definition of the type of Service Bus entity being used.',
      format: ['queue', 'topic'],
      default: 'queue'
    },
    subscription: {
      doc: 'Name of subscription associated with Service Bus topic.',
      format: String,
      default: '',
      env: 'SB_SUBSCRIPTION'
    }
  }
}
