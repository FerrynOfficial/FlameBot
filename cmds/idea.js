exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var idea = args.slice(1).join(' ')
    var embed = new Discord.RichEmbed()
    .setTitle('Идея')
    .setDescription(idea)
    .setColor('RANDOM')
    .setFooter(message.author.username, messsage.author.avatarURL)
    message.channel.send(embed)
    message.react(':thumbsup:')
    message.react(':thumbsdown:')
}
exports.help = {
    name: 'idea'
}
