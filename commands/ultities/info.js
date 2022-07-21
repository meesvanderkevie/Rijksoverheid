const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const infoEmbed = new MessageEmbed()
    .setTitle('Deze command is in onderhoud.')
    .setDescription(`Deze bot is gemaakt door ${client.users.cache.get('723009841008120320').tag}`)

    message.reply({embeds: [infoEmbed]});
}

module.exports.help = {
    name: 'info',
    aliases: ['info'],
}