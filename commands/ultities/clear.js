const {MessageEmbed, discord } = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    const geenPermsEmbed = new MessageEmbed()
    .setTitle('Geen permissie om deze command uit te voeren.')
    .setDescription(`${message.author} Je hebt niet de perms deze command uit te voeren. Dit komt omdat je geen stafflid bent, of omdat je geen toegang hier tot hebt.`)

    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({embeds: [geenPermsEmbed]});

    if(!args[0]) return message.channel.send(`${message.author}, Geef een nummer op.`);
    if(isNaN(args[0])) return message.reply(`${message.author}, Dat is geen nummer, ga naar een inrichting ofzo..`);
    if(args[0] > 100) return message.reply(`${message.author}, Dat is te groot, max 100.`);
    if(args[0] < 1) return message.reply(`${message.author}, BRUH.`);

    message.channel.bulkDelete(args[0] + 1).then(() => {
        message.channel.send(`${message.author}, Er zijn ${args[0]} berichten verwijderd.`);
    });
};

module.exports.help = {
    name: 'clear',
    aliases: ['clear'],
}