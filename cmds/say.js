exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(args.join(''))
    message.channel.send(embed)
}
exports.help = {
    group: 'general',
    desc: 'Говорит сообщение',
    usage: 'g!say',
    name: 'say'
 }
