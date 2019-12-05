exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')

    if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
        message.reply('**У меня нет прав на это.**')
        return
    }
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {
        message.reply('**У вас нет прав на это.**')
        return
    }
    var warnmember = message.guild.member(message.mentions.users.first())
    if(!warnmember) {
        message.reply('**Пользователь не найден**\n`f!warn @User Причина`')
        return
    }
    if(warnmember.permissions.has('MANAGE_MESSAGES')) {
        message.reply('Данный пользователь имеет права равные вам.')
        return
    }
    var reason = args.slice(1).join(' ')
    if(!reason) {
        message.reply('**Укажите причину.**')
        return
    }
    var embed = new Discord.RichEmbed()
    .setTitle('Предупреждение')
    .setColor('FF0000')
    .setDescription(`${warnmember.user.tag} был предупрежден Модератором ${message.author}!\n Причина: ${reason}`)
    message.channel.send(embed)

    var embed2 = new Discord.RichEmbed()
    .setTitle('**Предупреждение | Logs**')
    .setColor('FF0000')
    .addField('Участник',`${warnmember}`)
    .addField('Модератор',`${message.author}`)
    .addField('Канал', message.channel)
    .addField('Время',require('moment')(message.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('Причина', `${reason}`)
    warnChannel.send(embed2)
    var warnChannel = message.guild.channels.find(`name`, 'warns')
}
