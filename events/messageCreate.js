const client = require('../index').client;
const discord = require('discord.js');

client.on('messageCreate', async message => {
    let prefix = '-';
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commands = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if(commands){
        commands.run(client, message, args, prefix);
        return;
    }
    
    if (message.author.bot) return;

    if (message.content === 'ping') {
        message.reply('pong');
    }
});