require("dotenv").config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const { token } = process.env;
const clientId = "1199687784437387365";

const commands = [];

const commandFiles = fs.readdirSync("./src/commands").filter((file) => file.endsWith(".js"));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
}

// Construct and prepare an instance of the REST module
const rest = new REST({version: "10"}).setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${commands.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();