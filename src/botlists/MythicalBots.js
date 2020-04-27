const { BotList } = require('../structures')
const fetch = require('node-fetch')

/**
 * @see https://docs.mythicalbots.xyz/
 */

module.exports = class MythicalBots extends BotList {
  constructor (name) {
    super({
      name: 'mythicalbots',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, token }) {
    fetch(`https://mythicalbots.xyz/api/bot/${botId}`, {
      method: 'post',
      body: JSON.stringify([
        {
          server_count: guildCount
        }
      ]),
      headers: {
        authorization: token
      }
    })
    return true
  }
}
