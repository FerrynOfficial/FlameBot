exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var idea = args.slice(0).join(' ')
    if(!idea) return message.reply('Вы не указали идею!')
    var embed = new Discord.RichEmbed()
    .setTitle('Идея')
    .setDescription(idea)
    .setColor('RANDOM')
    .setFooter(message.author.username, message.author.avatarURL)
    message.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
    }
}
exports.help = {
    name: 'idea'
}
