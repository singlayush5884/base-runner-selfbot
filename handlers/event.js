const fs = require('fs')

module.exports = (client) => {

    const dirs = fs.readdirSync('./events')
    dirs.forEach(dir => {
        const events = fs.readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'))
        events.forEach(event => {
            const eventFile = require(`../events/${dir}/${event}`)
            if (eventFile.once) {
                client.once(eventFile.name, (...args) => eventFile.execute(client, ...args))
            } else {
                client.on(eventFile.name, (...args) => eventFile.execute(client, ...args))
            }
        })
    })
}
