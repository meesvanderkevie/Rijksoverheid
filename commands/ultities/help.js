const {MessageEmbed, discord} = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const embed1 = new MessageEmbed()
    .setTitle('Help voor Leden')
    .setDescription('Lijst van commands voor leden.')
    .addField('!help', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')
    .addField('!help <commando>', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')
    .addField('!help <commando> <subcommando>', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')
    .addField('!help <commando> <subcommando> <subsubcommando>', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')

    const embed2 = new MessageEmbed()
    .setTitle('Help voor Staffleden')
    .setDescription('Lijst van commands voor staffleden.')
    .addField('!help ', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')
    .addField('!help ', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')
    .addField('!help ', 'Dit commando zal je help geven met alle commandos die je kan gebruiken.')

    message.reply({embeds: [embed1, embed2]});
}

module.exports.help = {
    name: 'help',
    aliases: ['help'],
}