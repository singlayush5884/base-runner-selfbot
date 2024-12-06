const botConfig = require('../../config/bot.json')
const db = require('../../database/loader')

module.exports = {
    name: 'messageCreate',
    execute: async (client, message) => {

        if (message.author.id !== client.user.id) return;

        if (!message.content.startsWith(botConfig.prefix)) return;

        let args = message.content.slice(botConfig.prefix.length).trim().split(/ +/g);
        const command = args[0].toLowerCase();

        args.shift();

        const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
        if (!commandFile) return;

        setTimeout(() => {
            commandFile.run(client, message, args, db);
        }, botConfig.msgLatency);
    }
}
