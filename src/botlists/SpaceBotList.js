const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class SpaceBotList extends BotList {
  constructor (name) {
    super({
      name: 'spacebotlist',
      url: 'https://space-bot-list.org/',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, userCount, token }) {
    fetch(`https://space-bot-list.org/api/bots/${botId}`, {
      method: 'post',
      body: JSON.stringify({
        guilds: guildCount,
        users: userCount
      }),
      headers: {
          Authorization: token
      }
    })
    return true
  }
}
