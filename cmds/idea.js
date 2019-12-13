exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var idea = args.slice(1).join(' ')
    if(!idea) return message.reply('Вы не указали идею!')
    var embed = new Discord.RichEmbed()
    .setTitle('Идея')
    .setDescription(idea)
    .setColor('RANDOM')
    .setFooter(message.author.username, message.author.avatarURL)
    message.channel.send(embed)
    message.react(':thumbsup:')
    message.react(':thumbsdown:')
}
exports.help = {
    name: 'idea'
}
