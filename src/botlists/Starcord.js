const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class Statcord extends BotList {
  constructor (name) {
    super({
      name: 'statcord',
      url: 'https://statcord.com/',
      interval: 60
    })
  }

  postStatistics ({ guildCount, userCount, botId, token }) {
    fetch('https://statcord.com/apollo/post/stats', {
      method: 'post',
      body: JSON.stringify([
        {
          id: botId,
          key: token,
          servers: guildCount,
          users: userCount
        }
      ])
    })
    return true
  }
}
