const winston = require('winston')
const express = require('express')
const morgan = require('morgan')

const FileUtils = require('./utils/FileUtils.js')

const PORT = process.env.PORT || 80

module.exports = class BotListPoster {
  constructor (sentry) {
    this.sentry = sentry
    this.maxShards = parseInt(process.env.SHARDS_PER_CLUSTER) * parseInt(process.env.MAX_CLUSTERS)
    this.shards = []
    this.botLists = new Map()
    this.tokens = require('../tokens.json')
    this.initializeWinston()
    this.initializeExpress()
    this.loadBotLists()
    this.initializeScheduler()
  }

  initializeWinston () {
    this.logger = winston.createLogger()

    if (process.env.NODE_ENV === 'production') {
      this.logger.add(new winston.transports.Console({ level: process.env.LOGGING_LEVEL || 'silly' }))
    } else {
      this.logger.add(new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp(),
          winston.format.printf(
            info => `${info.timestamp} ${info.level} [${info.label || ''}]: ${info.message}`
          )
        ),
        level: process.env.LOGGING_LEVEL || 'silly'
      }))
    }
  }

  initializeExpress () {
    const app = express()

    if (!process.env.SECRET) this.logger.warn('SECRET environment variable is not set', { label: 'HTTP' })

    // Send morgan logs to winston
    app.use(morgan('combined', { stream: { write: message => this.logger.info(message.trim(), { label: 'HTTP' }) } }))
    app.use(express.json())
    app.use(require('./routes/shards')(this))

    app.listen(PORT, () => {
      this.logger.info(`Listening on port ${PORT}`, { label: 'HTTP' })
    })
  }

  loadBotLists () {
    FileUtils.requireDirectory('src/botlists', NewBotList => {
      const loadedList = new NewBotList()
      if (this.tokens[loadedList.name]) {
        this.botLists.set(loadedList.name, loadedList)
        this.logger.info(`Loaded ${loadedList.name} successfully, posting statistics every ${loadedList.interval} seconds.`, { label: 'Loader' })
      } else {
        this.logger.warn(`Did not load ${loadedList.name}, token not found. Check your tokens.json`, { label: 'Loader' })
      }
    }, error => {
      this.sentry.captureException(error)
      this.logger.error(`An error ocurred while loading a bot list: ${error.stack}`, { label: 'Loader' })
    }, false)
  }

  initializeScheduler () {
    // TODO: Initialize the scheduler after loading lists
  }
}
