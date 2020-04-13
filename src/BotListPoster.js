const winston = require('winston')
const express = require('express')
const morgan = require("morgan")

const PORT = process.env.PORT || 80

module.exports = class BotListPoster {
  constructor () {
    this.initializeWinston()
    this.initializeExpress()
    this.loadBotLists()
    this.maxShards = parseInt(process.env.SHARDS_PER_CLUSTER) * parseInt(process.env.MAX_CLUSTERS)
    this.shards = []
  }

  initializeWinston() {
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

  initializeExpress() {
    const app = express()
    
    // Send morgan logs to winston
    app.use(morgan("combined", { stream: { write: message => this.logger.info(message.trim(), { label: 'HTTP' })}}))
    app.use(express.json())
    app.use(require('./routes/shards')(this))
    
    app.listen(PORT, () => {
      this.logger.info(`Listening on port ${PORT}`, { label: 'HTTP' })
    })
  }

  loadBotLists() {

  }
}