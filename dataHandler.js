async function createCmd(client, guildID){
    const data = [
        {
            name: "ban",
            description: "Banned een gebruiker uit de server.",
            options: [{
                name: "lid",
                description: "Tag de gebruiker die je wilt bannen!",
                type: "USER",
                required: true
            }]
        },
        {
            name: "kick",
            description: "Kicked een gebruiker uit de server.",
            options: [{
                name: "lid",
                description: "Tag de gebruiker die je wilt kicken!",
                type: "USER",
                required: true
            }]
        },
        {
            name: "clear",
            description: "Verwijder gemakkelijk een aantal berichten!",
            options: [{
                name: "aantal",
                type: "NUMBER",
                description: "Voer het aantal berichten in dat je wil dat verwijderd wordt!",
                ephemeral: true,
                required: true
            }]
        },
    ]

    await client.guilds.cache.get(guildID)?.commands.set(data);
}

module.exports = { createCmd }