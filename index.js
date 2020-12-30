const clashApi = require('clash-of-clans-api');
const { Telegraf } = require('telegraf');

const clan = require('./src/callbacks/clan');
const player = require('./src/callbacks/player');
const telegramReplies = require('./src/replies/telegram');

// Telegram init
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.catch((err, ctx) => console.log(`Ooops, encountered an error for ${ctx.updateType}.`, err));

// Clash of Clans API init
const clashOfClansClient = clashApi();

// Telegram commands
bot.start((ctx) => ctx.replyWithHTML(telegramReplies.getStarted));
bot.help((ctx) => ctx.replyWithHTML(telegramReplies.getStarted));
bot.launch();

// Clan commands
bot.command('clan', async (ctx) => await clan.getClan(ctx, clashOfClansClient));
bot.command('claneros', async (ctx) => await clan.getClanMembers(ctx, clashOfClansClient));

// Player commands
bot.command('jugador', async (ctx) => await player.getPlayer(ctx, clashOfClansClient));

// Help commands
bot.command('ayuda', (ctx) => ctx.replyWithHTML(telegramReplies.getStarted));

// On message sended.
bot.on('message', async (ctx) => {
	const { text } = ctx.message;
	let message = '';
	if (text.charAt(0) == '#') {
		const tag = text.substring(0, 10);
		ctx.reply(await player.playerMessage(tag, clashOfClansClient));
	}
});
