exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var author = message.author
    var caseRole = message.member.roles.get('653581785929875475')
    if(!caseRole) return message.reply('У вас нету кейсов для открытия!')
    var replies = [`Пользователь ${author} открыл Донат Кейс и выиграл **Prime!**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Prime!**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Prime!**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Prime!**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Prime!**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium+**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium+**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Premium+**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Deluxe**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Deluxe**`,`Пользователь ${author} открыл Донат Кейс и выиграл **Titan!**`]
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
    .setTitle('Донат Кейс | Logs')
    .setDescription(`Пользователь ${author} открыл донат кейс и выиграл ${replies[result]}.`)
    .setColor('FF0000')
    .addField('Канал', message.channel, true)
    .addField('Время',require('moment')(message.createdAt).format('HH:MM DD-MM-YY'), true)
    logs.send(embed2)
}
exports.help = {
    name: 'open-case'
}
