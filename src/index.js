require('dotenv').config();

const {Client, GatewayIntentBits, Collection} = require('discord.js');
const fs = require("fs");
const { token } = process.env;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ]
})

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readFileSync(commandsPath).filter((file) => file.endsWith(".js"));

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Cuidao, el comando ${filePath} no tiene la propiedad "data" o "execute"`)
    }
}

client.login(token)