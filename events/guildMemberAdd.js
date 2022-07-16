const discord = require('discord.js');
const { client } = require('../index');

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋┊aankomst');
    if (!channel) return;
    const embed = new discord.MessageEmbed()
        .setColor('#880000')
        .setTitle('Welkom bij de server!')
        .setDescription(`Welkom op ${member.guild.name}, ${member.user}! Om toegang te krijgen tot de server en te praten, moet je nog even een paar vragen beantwoorden. \n \n **I** Wat hoop je op de server te doen/vinden? \n **II** Hoe heb je deze server gevonden? \n \n Beantwoord deze vragen in <#989101171123814491>!`)
        .setThumbnail(member.user.displayAvatarURL())
        .setImage('https://media.discordapp.net/attachments/989948649494675486/989948689026003005/unknown.png')
        .setTimestamp()
        .setFooter({ text: '© Politiek Nederland' });
    channel.send({embeds: [embed]});	
});