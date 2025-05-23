import convict from 'convict'
import convictFormatWithValidator from 'convict-format-with-validator'
import { serviceBusConfig } from './service-bus.js'
import { postgreConfig } from './postgres.js'

convict.addFormats(convictFormatWithValidator)

const config = convict({
  ...serviceBusConfig,
  ...postgreConfig
})

config.validate({ allowed: 'strict' })

export {
  config
}
