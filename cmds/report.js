exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.reply('Error')
    var reason = args.slice.join(' ').slice('22')

    var rEmbed = new Discord.RichEmbed()
    .setDescription('Reports | Жалобы')
    .setColor('#FF0000')
    .addField('Участник',`${rUser}`)
    .addField('Пожаловался',`${message.author}`)
    .addField('Канал', message.channel)
    .addField('Время', message.createdAt)
    .addField('Причина', reason)
    var reportsChannel = message.guild.channels.find(`name`, 'reports')
    if(!reportsChannel) return message.reply('error')

    message.delete.catch(O_o=>{})
    reportsChannel.send(rEmbed)
}
