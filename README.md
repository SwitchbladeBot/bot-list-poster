# botlist-poster
Centralized service to distribute your Discord bot's statistics to multiple bot lists. 

## Supported Bot Lists
- **[Carbonitex](https://www.carbonitex.net/discord/bots)** ([See file](src/botlists/Carbonitex.js))

## Add a Bot List
Bot list files reside in [src/botlists](src/botlists), and control how information is sent to each website. Below is a basic example of one os these files.

```js
const { BotList } = require('../structures')
const fetch = require('node-fetch')

module.exports = class Carbonitex extends BotList {
  constructor (name) {
    super({
      name: 'carbonitex',
      url: 'https://www.carbonitex.net/discord/bots',
      interval: 60
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
```

## Sponsors

Sponsors are organizations and companies that contribute to our projects with money. They get their logo with a link to their website on this page! [Click here and become a sponsor today!]([sponsors-url])

<a href="https://opencollective.com/switchblade/sponsor/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/7/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/8/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/9/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/10/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/10/avatar.svg?requireActive=false"></a>

## Backers

Backers are the people who contribute to our projects monetarily. They get their image with a link to their website on this page, an awesome badge on their [Switchblade](http://switchblade.xyz/) profile and a role that grants exclusive access to some channels in our discord server. [Click here and become a backer today!]([backers-url])

<a href="https://opencollective.com/switchblade/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/5/avatar.svg?requireActive=false&a=1"></a>
<a href="https://opencollective.com/switchblade/backer/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/7/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/8/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/9/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/10/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/10/avatar.svg?requireActive=false"></a>