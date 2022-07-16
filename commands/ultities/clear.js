const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const geenPermsEmbed = new MessageEmbed()
    .setTitle('Geen permissie om deze command uit te voeren.')
    .setDescription(`${message.author} Je hebt niet de perms deze command uit te voeren. Dit komt omdat je geen stafflid bent, of omdat je geen toegang hier tot hebt.`)

    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({embeds: [geenPermsEmbed]});

    message.reply('Deze command is in onderhoud.')
};

module.exports.help = {
    name: 'clear',
    aliases: ['clear'],
}