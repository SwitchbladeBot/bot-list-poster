const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class ArcaneCenter extends BotList {
  constructor (name) {
    super({
      name: 'arcanecenter',
      url: 'https://arcane-center.xyz/',
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
