const fs = require('fs');
const Discord = require('discord.js');
var cron = require('node-cron');
//const {prefix, token, guildid, channelid } = require('./config.json');

const client = new Discord.Client();
// client is an instance of Discord.Client

client.login("aFWLF7I4rsXUinW9fykWpxvg3xMIOuZd_UlREg6skalvS4YZMS-YAt8MRAc4-O-v-Geo");

client.on("message", (message) => {
	message.channel.send("pong!");
});
client.once('ready', () => {
	console.log('Ready!');
	message.channel.send("pong!"); 
	client.login("aFWLF7I4rsXUinW9fykWpxvg3xMIOuZd_UlREg6skalvS4YZMS-YAt8MRAc4-O-v-Geo").then(() => {
        console.log("I am ready");
        var guild = client.guilds.get("581543474822774784");
        if(guild && guild.channels.get("581548308372389888")){
            guild.channels.get("581548308372389888").send("@here Guaxinins invadirão a Guilda em 10 minutos!").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});

// executes everyday at 6:40pm
cron.schedule('11 16 * * *', function(){
    client.login('aFWLF7I4rsXUinW9fykWpxvg3xMIOuZd_UlREg6skalvS4YZMS-YAt8MRAc4-O-v-Geo').then(() => {
        console.log("I am ready");
        var guild = client.guilds.get('581543474822774784');
        if(guild && guild.channels.get('581548308372389888')){
            guild.channels.get('581548308372389888').send("@here Guaxinins invadirão a Guilda em 10 minutos!").then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });
});
