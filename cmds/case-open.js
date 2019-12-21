exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    var author = message.author
    var caseRole = message.member.roles.get('653581785929875475')
    if(!caseRole) return message.reply('У вас нету кейсов для открытия!')
    var replies = [`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем ваc, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Deluxe**`,`Поздравляем вас, вы выиграли **Deluxe**`,`Поздравляем вас, вы выиграли **Titan!**`]
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription(replies[result])
    .setThumbnail('https://cdn.discordapp.com/attachments/627452935676100618/653619763783925810/image0.png')
    message.channel.send(embed).then(message.member.removeRole(caseRole))
    var logs = message.guild.channels.get('633216142286127114')
    if(!logs) return message.reply('Error')
    var embed2 = new Discord.RichEmbed()
    .setTitle('Донат Кейс')
    .setDescription(`Пользователь ${author} открыл донат кейс и выиграл ${replies[result]}.`)
    logs.channel.send(embed2)
}
exports.help = {
