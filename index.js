const fs = require('fs')
const { Client, Collection} = require('discord.js-selfbot-v13')
const client = new Client()

const botConfig = require('./config/bot.json')

start()

async function start() {

    client.commands = new Collection()
    client.aliases = new Collection()

    const handlers = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'))
    handlers.forEach(handler => {
        require(`./handlers/${handler}`)(client)
    })

    client.login(botConfig.token)
}
