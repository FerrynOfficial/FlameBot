exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    const superagent = require('superagent')
    var {body} = await superagent.get('http://random.cat/meow')
    var cat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(body.file)
    message.channel.send(cat)
}
exports.help = {
    name: 'cat'
}
