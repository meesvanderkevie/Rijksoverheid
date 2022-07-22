const discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;

    return message.reply('Deze command is in onderhoud.')

    const ticketEmbed = new discord.MessageEmbed()
    .setAuthor(text => 'Politiek Nederland', client.user.displayAvatarURL())
    .setTitle('Politiek Nederland Contact')
    .setDescription('Klik op de knop om een ticket te openen, en om contact op te nemen met het beheer van Politiek Nederland!')
    .setThumbnail('https://media.discordapp.net/attachments/989948649494675486/989948738053222400/9d43635e3afd9d41a7381e67d43fe5f7.jpg')
    .setColor('#880000')
    const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('contact')
            .setLabel('Contact opnemen')
            .setStyle('PRIMARY')
            .setEmoji('📞')
        )
    message.channel.send({embeds: [ticketEmbed], components: [row]}); message.delete();

}

module.exports.help = {
    name: 'ticketpanel',
    aliases: ['ticketpanel'],
}