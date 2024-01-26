const { debug } = require('console');
const { SlashCommandBuilder, SlashCommandAssertions } = require('discord.js');
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
    
    .setName('addbirthday')
    .setDescription('Adds a birthday to my list ')
    .addStringOption(option =>
        option.setName('name')
            .setDescription('Birthday owner')
            .setRequired(true)
    )
    .addIntegerOption (option =>
        option.setName('day')
            .setDescription('Day of birthday')
            .setRequired(true)
    )
    .addIntegerOption (option =>
        option.setName('month')
            .setDescription('Month of birthday')
            .setRequired(true)
    ),

    async execute(interaction) {
        const name = interaction.options.getString('name');
        const day = interaction.options.getInteger('day');
        const month = interaction.options.getInteger('month');

        const newBirthdate = {
            "Name":name,
            "Day":day,
            "Month":month
        }
       
        await interaction.reply("Cumpleaños registrado con exito! El cumpleaños de " + name + " es el " + day + "/" + month);
    }
}
