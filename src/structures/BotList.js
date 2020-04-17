module.exports = class BotList {
  constructor (options) {
    this.name = options.name
    this.url = options.url
    this.interval = options.interval || 600
  }

  postStatistics () {
    return false
  }
}
