const {discord, Client, Intents, Collection} = require('discord.js');
const botConfig = require('./botConfig.json');

const fs = require('fs');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

client.commands = new Collection();

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity('het volk', {type: 'WATCHING'});	
});

client.on('messageCreate', async (message, member) => {
  var prefix = "?";
  var messageArray = message.content.split(" ");
  var command = messageArray[0];
    
  if(message.author.bot) return;

    let blacklisted = ['hoer', 'koe'];
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
      message.delete();
      message.channel.send(`**${message.author} dat wordt mag je niet gebruiken! :rage:**`);
  };

  if(!message.content.startsWith(prefix)) return;

  const commandData = client.command.get(command.slice(prefix.length));

  if(!commandData){
    return;
  }

  var arguments = messageArray.slice(1);

  try{
    await commandData.run(client, message, arguments);
  }catch(error){
    console.log(error);
    await message.reply("ERROR!");
  }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welkom');
    if (!channel) return;
    channel.send(`Welkom ${member}!`);
});

// Command handler

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.help.name);
}

client.login(botConfig.token);