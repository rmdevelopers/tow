module.exports = {
	name: 'help',
	description: 'displays info',
	execute(message, args) {
		message.channel.send('For now I only send notifications for Racoons, Guild Ball, and Overlord');
		message.channel.send('If you want Tmat to add something else tell him.');
	},
};