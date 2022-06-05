const {discord, Client, Intents} = require('discord.js');
const botConfig = require('./botConfig.json');

const fs = require('fs');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity('het volk', {type: 'WATCHING'});	
});

client.on('messageCreate', (message, member) => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.login(botConfig.token);