<p align="center">
	<img src="https://api-assets.clashofclans.com/badges/200/pXBWx1_jnxKGBuC66WaNPW8vfNT6JcH0s8y427gn-Gw.png" height="200" alt="Sovngarde clan badge" />
</p>

# Sovngarde Telegram bot - Alpha

This is the official CoC Telegram bot.

This bot can get information in the following topics:
* Clan
* Player
* War
* League (coming soon)
* Probabilities of winning against a base, war or league (coming soon)
* Get any clan, player, war and league information (coming soon)
* war and leagues notifications (coming soon)
* CoC inbox message template (in discussion)

## Get started

Install packages:

```bash
npm install
```

Use bot:

```bash
BOT_TOKEN=$BOT_TOKEN COC_API_TOKEN=$COC_API_TOKEN node index.js
# $BOT_TOKEN is the telegram bot key
# $COC_API_TOKEN is the Clash of Clans key
```

**Note**: The bots replies are in Spanish, transaltions will be made in future
versions.

## APIs
[Clash of Clans](https://developer.clashofclans.com/#/)

[Telegram Bot](https://core.telegram.org/bots/api#available-methods)
