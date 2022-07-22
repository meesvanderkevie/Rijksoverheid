const { discord, Client, Intents, Collection } = require('discord.js');
const botConfig = require('./botConfig.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS ]});

const fs = require('fs');

client.commands = new Collection();
client.events = new Collection();
client.aliases = new Collection();
client.SlashCmds = new Collection();
module.exports.client = client;

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity('het volk', { type: 'WATCHING' });
});

fs.readdirSync("./commands").forEach(dir => {
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) throw err;
    
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

    
        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${dir}/${file}`)

            try {
                client.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    client.aliases.set(alias, fileGet.help.name);
                })
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

// EVENTS HANDLER

fs.readdirSync(`./events/`).forEach(dir => {
    var jsFiles = fs.readdirSync(`./events/`).filter(f => f.split(".").pop() === "js");
    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`)

        try {
            client.events.set(eventGet.name, eventGet)
        } catch(err) {
            return console.log(err)
        }
    })
});

fs.readdirSync("./slashcommands").forEach(dir => {
    fs.readdir(`./slashcommands/${dir}`, (err, files) => {
        if(err) throw err;

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        jsFiles.forEach(file => {
            var fileGet = require(`./slashcommands/${dir}/${file}`);
            
            try {
                client.SlashCmds.set(fileGet.help.name, fileGet);
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

client.login(botConfig.token);