const fs = require('fs');
const Discord = require('discord.js');
var cron = require('node-cron');
const {prefix, token, guildid, channelid } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);

    try {
	    command.execute(message, args);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);

// executes every Sunday, Monday, Wednesday, and Friday at 7:20pm
cron.schedule('20 19 * * 0,1,3,5', function(){
    client.login(token).then(() => {
        console.log("I am ready");
        var guild = client.guilds.get(guildid);
        if(guild && guild.channels.get(channelid)){
            guild.channels.get(channelid).send("@here Guild Ball em 10 minutos!").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});

// executes everyday at 6:40pm
cron.schedule('50 15 * * *', function(){
    client.login(token).then(() => {
        console.log("I am ready");
        var guild = client.guilds.get(guildid);
	guild.channels.get('581548308372389888').send("@here Guaxinins invadirão a Guilda em 10 minutos!").then(() => client.destroy());
        if(guild && guild.channels.get(channelid)){
            guild.channels.get(channelid).send("@here Guaxinins invadirão a Guilda em 10 minutos!").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});

// executes every Friday at 7:50pm
cron.schedule('50 19 * * 5', function(){
    client.login(token).then(() => {
        console.log("I am ready");
        var guild = client.guilds.get(guildid);
        if(guild && guild.channels.get(channelid)){
            guild.channels.get(channelid).send("@here Overlord em 10 minutos!").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});

// executes everyday at 8am
cron.schedule('* 8 * * *', function(){
    client.login(token).then(() => {
        console.log("I am ready");
        var guild = client.guilds.get(guildid);
        if(guild && guild.channels.get("574045204240269312")){
            guild.channels.get("574045204240269312").send("Tmat eats cornflakes").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});
