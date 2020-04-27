const { BotList } = require('../structures')
const fetch = require('node-fetch')

/**
 * @see https://docs.botsparadiscord.com/
 */

module.exports = class BotsParaDiscord extends BotList {
  constructor (name) {
    super({
      name: 'botsparadiscord',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, token }) {
    fetch(`https://api.botsparadiscord.xyz/bots/${botId}/info?guilds=${guildCount}`, {
      method: 'post',
      headers: {
        Authorization: token
      }
    })
    return true
  }
}
