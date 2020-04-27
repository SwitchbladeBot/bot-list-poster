const { BotList } = require('../structures')
const fetch = require('node-fetch')

/**
 * @see https://discordlist.co/api/docs
 */

module.exports = class DiscordList extends BotList {
  constructor (name) {
    super({
      name: 'discordlist',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, token }) {
    fetch(`https://discordlist.co/api/bot/${botId}/stats`, {
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
