const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const geenPermsEmbed = new MessageEmbed()
    .setTitle('Geen permissie om deze command uit te voeren.')
    .setDescription(`${message.author} Je hebt niet de perms deze command uit te voeren. Dit komt omdat je geen stafflid bent, of omdat je geen toegang hier tot hebt.`)
        
    if(!message.member.permissions.has("MANAGE_SERVER")) return message.channel.send({embeds: [geenPermsEmbed]});

    await message.channel.permissionOverwrites.set([
        {
            id: message.guild.roles.cache.find(r => r.id === "988872200620769390").id,
            allow: ["SEND_MESSAGES"]
        }
    ]);

    const unlockEmbed = new MessageEmbed()
    .setTitle("Channel is unlocked!")
    .setColor("GREEN")

    await message.channel.send({embeds: [unlockEmbed]})
}

module.exports.help = {
    name: "unlock",
    aliases: ["unlock"],
}