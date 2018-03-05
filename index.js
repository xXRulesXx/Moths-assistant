const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 100) + 1;
        message.reply("1d100=" + roll);
    }
}

module.exports = DiceRollCommand;

client.login(process.env.Bot_Token);
