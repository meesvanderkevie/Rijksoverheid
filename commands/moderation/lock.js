const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const geenPermsEmbed = new MessageEmbed()
    .setTitle('Geen permissie om deze command uit te voeren.')
    .setDescription(`${message.author} Je hebt niet de perms deze command uit te voeren. Dit komt omdat je geen stafflid bent, of omdat je geen toegang hier tot hebt.`)
    if(!message.member.permissions.has("MANAGE_SERVER")) return message.channel.send({embeds: [geenPermsEmbed]});

    await message.channel.permissionOverwrites.set([
        {
            id: message.guild.roles.cache.find(r => r.name === "Burger").id,
            deny: ["SEND_MESSAGES"]
        }
    ]);

    const lockEmbed = new MessageEmbed()
    .setTitle(`Channel is locked - By: ${message.user}`)
    .setColor("RED")

    await message.channel.send({embeds: [lockEmbed]})
}

module.exports.help = {
    name: "lock",
    aliases: ["lock"],
}