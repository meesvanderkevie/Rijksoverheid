const discord = require('discord.js');

module.exports.run = async (message, args, client, prefix) => {
    const geenPermsEmbed = new MessageEmbed()
    .setTitle('Geen permissie om deze command uit te voeren.')
    .setDescription(`${message.author} Je hebt niet de perms deze command uit te voeren. Dit komt omdat je geen stafflid bent, of omdat je geen toegang hier tot hebt.`)

    if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply({embeds: [geenPermsEmbed]});

    message.reply("Commando is in ontwikkeling.");

}

module.exports.help = {
    name: 'ban',
    aliases: ['ban'],
}