const{ Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client ({
     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on("ready", () => {
     console.log("Bot hazır")
})

client.login(process.env.TOKEN)