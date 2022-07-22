const discord = require("discord.js");

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("BAN_MEMBERS")){
        return await inter.reply({content: "**Je hebt de perms niet om deze cmd te gebruiken!**"})
    }

    const user = inter.options.getUser("lid");

    setTimeout(() => {inter.guild.members.ban(user.id).catch(() => {})}, 1000)

    return await inter.reply({content: `**Ik heb ${user} succesvol verbannen!**`})
}

module.exports.help = {
    name: "ban"
}