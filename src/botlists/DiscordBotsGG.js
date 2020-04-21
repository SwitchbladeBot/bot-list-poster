const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class DiscordBotsGG extends BotList {
  constructor (name) {
    super({
      name: 'discordbotsgg',
      url: 'https://discord.bots.gg/',
      interval: 60
    })
  }

  postStatistics ({ guildCount, shardCount, botId, token }) {
    fetch(`https://discord.bots.gg/api/v1/bots/${botId}/stats`, {
      method: 'post',
      body: JSON.stringify({ guildCount, shardCount }),
      headers: {
        'Authorization': token
      }
    })
    return true
  }
}