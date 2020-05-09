const { BotList } = require('../structures')
const fetch = require('node-fetch')

/**
 * @see https://www.carbonitex.net/discord/data/botdata.php
 */
module.exports = class Carbonitex extends BotList {
  constructor (name) {
    super({
      name: 'carbonitex',
      url: 'https://www.carbonitex.net/discord/bots',
      instant: true
    })
  }

  postStatistics ({ guildCount, botId, token }) {
    fetch('https://www.carbonitex.net/discord/data/botdata.php', {
      method: 'post',
      body: JSON.stringify([
        {
          server_count: guildCount,
          key: token
        }
      ])
    })
    return true
  }
}
