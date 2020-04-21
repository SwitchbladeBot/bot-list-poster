const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class DiscordBotListCOM extends BotList {
  constructor (name) {
    super({
      name: 'discordbotlistcom',
      url: 'https://discordbotlist.com/',
      interval: 60
    })
  }

  postStatistics ({ guildCount, userCount, voiceConnectionCount, botId, token }) {
    fetch(`https://discordbotlist.com/api/bots/${botId}/stats`, {
      method: 'post',
      body: JSON.stringify({
          guilds: guildCount,
          users: userCount,
          voice_connections: voiceConnectionCount
        }),
      headers: {
        'Authorization': `Bot ${token}`
      }
    })
    return true
  }
}