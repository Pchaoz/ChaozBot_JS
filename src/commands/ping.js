const { SlashCommandBuilder, SlashCommandAssertions } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Contesta tacticamente con un PONG!!"),

    async execute(interaction) {
        await interaction.reply("PONG!");
    }
}