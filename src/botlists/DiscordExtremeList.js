const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class DiscordExtremeList extends BotList {
  constructor (name) {
    super({
      name: 'discordextremelist',
      url: 'https://discordextremelist.xyz/',
      interval: 60
    })
  }

  postStatistics ({ guildCount, botId, token }) {
    fetch(`https://api.discordextremelist.xyz/v1/bot/${botId}`, {
      method: 'post',
      body: JSON.stringify({ guildCount }),
      headers: {
        'authorization': token
      }
    })
    return true
  }
}