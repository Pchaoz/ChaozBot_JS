const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        try {
            await command.execute(interaction);

        }catch(error) {
            console.error(`Errror ejecutando ${interaction.commandName}`);
            console.error(error);
        }
    }
}