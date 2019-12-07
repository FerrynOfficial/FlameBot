exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ms = require('ms')
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('У вас нет прав!')
    var user = message.guild.member(message.mentions.users.first() || message.guild.memners.get(args[0]))
    if(!user) return message.reply('Укажите пользователя!')
    var muteRole = message.guild.roles.find('name', 'Muted')
    if(!muteRole) return message.reply('Создайте роль под названием Muted!')
    var muteTime = args[1]
    if(!muteTime) return message.reply('Укажите пожалуйста Время!')
    var reason = args.slice(1).join(' ')
    if(!reason) return message.reply('Укажите причину!')
    await (user.addRole(muteRole.id))
    var muteEmbed = new Discord.RichEmbed()
    .setDescription(`${user} был замучен на **${muteTime}**!`)
    .addField('**Модератор**',`${message.author}`)
    .addField('**Причина**', `${reason}`)
    .setColor('FF0000')
    message.channel.send(muteEmbed)
    setTimeout(function () {
        user.removeRole(muteRole.id)
        var unmuteEmbed = new Discord.RichEmbed()
        .setDescription(`${user} был размучен!`)
        .setColor('006400')
        message.channel.send(unmuteEmbed)


    },ms(muteTime))
}
exports.help = {
    name: 'mute'
}
