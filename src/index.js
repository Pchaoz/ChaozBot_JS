require('dotenv').config();

const { token } = process.env.TOKEN;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = Client({intents: GatewayIntentBits.Guilds});
client.commands = new Collection();

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./scr/function/${folder}`)
    .filter(file => file.endsWith('.js'));
    for (const file of functionFiles) 
        require(`./functions/${folder}/${file}`)(client);
}