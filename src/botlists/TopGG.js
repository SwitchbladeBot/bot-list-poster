const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class TopGG extends BotList {
  constructor (name) {
    super({
      name: 'topgg',
      url: 'https://top.gg/'
    })
  }

  postStatistics ({ guildCount, botId, token }) {

  }
}
