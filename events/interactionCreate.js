const discord = require('discord.js');
const db = require('quick.db');
const client = require('../index').client;
const { Permissions } = require('discord.js');

client.on('interactionCreate', async (inter) => {

    if(inter.isCommand()) {
        let SlashCmds = client.SlashCmds.get(inter.command.name);
        if(SlashCmds) SlashCmds.run(client, inter)
    }

    if(inter.isButton()) {

        if(inter.customId === 'contact'){
            if(db.get(`ticket_${inter.user.id}`) === true){
                await inter.reply('Je hebt al een ticket open staan!', ephemeral = true);

                inter.guild.channels.create(`ticket-${inter.user.id}`, {type: 'GUILD_TEXT', permissionOverwrites: [
                    {
                        id: inter.user.id,
                        allow: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.ATTACH_FILES],
                    },
                    {
                        id: inter.guild.roles.everyone,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    }
                ], parent: '990357628246958092'}).then(async c => {

                    c.send(`${inter.user.id}>, <@&988869990998483055>`)

                    const thanksEmbed = new discord.MessageEmbed()
                    .setAuthor(text => 'Politiek Nederland', client.user.displayAvatarURL())
                    .setDescription('Bedankt voor het openen van een ticket! Het beheer van Politiek Nederland zal je zo snel mogelijk helpen!')
                    .setColor('#880000')
                    c.send({embeds: [thanksEmbed]})

                    const openEmbed = new discord.MessageEmbed()
                    .setAuthor(text => 'Politiek Nederland', client.user.displayAvatarURL())
                    .setDescription(`Jouw ticket is geopend! Bekijk hem hier: ${c}`)
                    .setColor('#880000')
                    await inter.reply({embeds: [openEmbed], ephemeral: true})

                    db.set(`ticket_${inter.user.id}`, true)
                })
            }
        }
    }
})