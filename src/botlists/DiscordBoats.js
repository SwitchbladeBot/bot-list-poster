const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class DiscordBoats extends BotList {
  constructor (name) {
    super({
      name: 'discordboats',
      url: 'https://discord.boats/',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, token }) {
    fetch(`https://discord.boats/api/bot/${botId}`, {
      method: 'post',
      body: JSON.stringify([
        {
          server_count: guildCount
        }
      ]),
      headers: {
        Authorization: token
      }
    })
    return true
  }
}
