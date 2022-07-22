const discord = require("discord.js");

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("MANAGE_MESSAGES")){
        return inter.reply("**Je hebt niet de perms om deze cmd te gebruiken!**")
    }

    const number = await inter.options.getNumber("aantal");
    if(number > 99){
        return await inter.reply("**Je kunt maximaal 99 berichten verwijderen!**");
    }

    inter.channel.bulkDelete(number, true)
    return await inter.reply({content: `**Ik heb succesvol ${number} berichten verwijderd.**`, ephemeral: true});
}

module.exports.help = {
    name: "clear"
}