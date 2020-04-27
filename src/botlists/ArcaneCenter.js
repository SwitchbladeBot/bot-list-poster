const { BotList } = require('../structures')
const fetch = require('node-fetch')

/**
 * @see https://arcane-center.xyz/documentation
 */
module.exports = class ArcaneCenter extends BotList {
  constructor (name) {
    super({
      name: 'arcanecenter',
      interval: 60
    })
  }

  postStatistics ({ botId, guildCount, shardCount, userCount, token }) {
    fetch(`https://arcane-botcenter.xyz/api/${botId}/stats`, {
      method: 'post',
      body: JSON.stringify([
        {
          server_count: guildCount,
          shard_count: shardCount,
          member_count: userCount
        }
      ]),
      headers: {
        Authorization: token
      }
    })
    return true
  }
}
