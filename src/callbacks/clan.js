const clashOfClansReplies = require('../replies/clash_of_clans');

const getClanMembers = async (ctx, clashOfClansClient) => {
	let message = '';
	try {
		const response = await clashOfClansClient.clanMembersByTag('#j2yj8vgc');
		const { items } = response;
		message += '*****⚔Miembros⚔*****\n\n';
		for (let i = 0; i < items.length; i++) {
			const member = items[i];
			message += `${i+1}. ${member.name} - <code>${member.tag}</code>\n\n`;
		}
		message += clashOfClansReplies.getTagHelpMessage();
	} catch (e) {
		message = clashOfClansReplies.getErrorMessage(e);
	}
	ctx.replyWithHTML(message);
};

const getClan = async (ctx, clashOfClansClient) => {
	let message = '';
	try {
	 	const response = await clashOfClansClient.clanByTag('#j2yj8vgc');
	 	message += `***** 🏛 ${response.name} - <code>${response.tag}</code> *****\n\n`;
	 	message += `📝 Descripción: \n"${response.description}"\n`;
	 	message += `\n ⭐️ Nivel del clan: ${response.clanLevel}\n`;
	 	message += `\n 👥 Total de miembros: ${response.members}\n`;
	 	message += `\n🎨 Logo oficial:`;
	 	message += `\n${response.badgeUrls.medium}\n`;
	} catch (e) {
		message = clashOfClansReplies.getErrorMessage(e);
	}
	ctx.replyWithHTML(message);
};

module.exports = {
	getClanMembers,
	getClan,
};
