const getErrorMessage = (e) => {
	if (e.statusCode === 400 || e.statusCode === 403) {
		return 'Petición incorrecta. Reporta este error lo antes posible.';
	}
	if (e.statusCode === 404) {
		return 'Clan no encontrado.';
	}
	if (e.statusCode == 429) {
		return 'Demasiadas peticiones, inténtalo más tarde.';
	}
	if (e.statusCode == 500 || e.statusCode == 503) {
		return 'Lo sentimos, el servidor de Clash of Clans no respone.' +
		' Inténtalo más tarde.';
	}
	console.log(e);
	return 'Error.'
};

const getTagHelpMessage = () => {
	let message = '';
		message += '\nUsa el comando "/jugador #tagDelJuagdor" para obetener información del jugador.\n';
		message += '\n  ,---------------------------------, ';
		message += '\n{ <b>Toca una etiqueta para copiarla</b> }';
		message += '\n  \'---------------------------------\' ';
	return message;
};

module.exports = {
	getErrorMessage,
	getTagHelpMessage,
}
