const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    var developer = "ItzJustMees#1984";

    const infoEmbed = new MessageEmbed()
    .setTitle('Deze command is in onderhoud.')
    .setDescription(`Deze bot is gemaakt door ${developer}`)

    message.reply({embeds: [infoEmbed]});
}

module.exports.help = {
    name: 'info',
    aliases: ['info'],
}