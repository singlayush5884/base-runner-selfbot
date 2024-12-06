module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Get the bot\'s ping',
    category: 'Utility',
    usage: 'ping',
    run: async (client, message, args, db) => {
        message.edit(`> API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}
