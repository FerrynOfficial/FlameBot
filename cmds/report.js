exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.reply('Error')
    var reason = args.slice(1).join(' ')

    var rEmbed = new Discord.RichEmbed()
    .setDescription('**Reports | Жалобы**')
    .setColor('#FF0000')
    .addField('Участник',`${rUser}`)
    .addField('Пожаловался',`${message.author}`)
    .addField('Канал', message.channel)
    .addField('Время',require('moment')(message.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('Причина', reason)
    var reportsChannel = message.guild.channels.find(`name`, 'reports')
    if(!reportsChannel) return message.reply('error')

    reportsChannel.send(rEmbed)
    return message.reply('Жалоба была успешно отправлена!')
}
exports.help = {
    name: 'report'
 }
