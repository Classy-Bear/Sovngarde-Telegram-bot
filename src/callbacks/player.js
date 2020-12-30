const clashOfClansReplies = require('../replies/clash_of_clans');

const getPlayer = async (ctx, clashOfClansClient) => {
	let tag;
	const messageBySpace = ctx.message.text.split(" ");
	for (let i = 0; i < messageBySpace.length; i++) {
		const message = messageBySpace[i];
		if (message && message.charAt(0) == '#') {
			tag = message;
			break;
		}
	}
	if(tag) {
		ctx.reply(await playerMessage(tag, clashOfClansClient));
	} else {
		ctx.replyWithHTML('Envíame la etiqueta del jugador. Así: <code>#123ABC</code>');
	}
};

async function playerMessage(tag, clashOfClansClient) {
	let message = '';
	try {
	 	const response = await clashOfClansClient.playerByTag(tag);
	 	message += `*****👤Usuario: ${response.name} *****\n`;
	 	message += `\n 🏠 Ayuntamiento: ${response.townHallLevel}\n`;
	 	message += `\n ⭐️ Nivel: ${response.expLevel}\n`;
	 	message += `\n 🏆 Trofeos: ${response.trophies}\n`;
	 	if (response.role == 'coLeader') message += `\n 🎩 Rango: Colíder\n`;
	 	if (response.role == 'admin') message += `\n 🎩 Rango: Veterano\n`;
	 	if (response.role == 'leader') message += `\n 🎩 Rango: Líder\n`;
	 	if (response.role == 'member') message += `\n 🎩 Rango: Miembro\n`;
	 	message += `\n ❤️  Donaciones: ${response.donations}\n`;
	 	message += `\n 😻 Donaciones recibidas: ${response.donationsReceived}\n`;
	 	message += `\n 🏋️ Liga: `;
		let league = response.league;
		if(!league) {
			league = 'Sin clasificar'
		} else {
			league = league.iconUrls.medium;
		}
	 	message += `${league}\n`;
	} catch (e) {
		message = clashOfClansReplies.getErrorMessage(e);
	}
	return message;
}

module.exports = {
	getPlayer,
	playerMessage,
};
