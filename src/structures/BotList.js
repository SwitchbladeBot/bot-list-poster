module.exports = class BotList {
  constructor (options) {
    this.name = options.name
    this.url = options.url
  }

  postStatistics () {
    return false
  }
}
