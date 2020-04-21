const Sentry = require('@sentry/node')
Sentry.init({ dsn: process.env.SENTRY_DSN })

const BotListPoster = require('./BotListPoster.js')
const poster = new BotListPoster(Sentry)

poster.logger.info('Starting...', { label: 'BotListPoster' })
