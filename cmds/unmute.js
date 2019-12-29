exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var muser = message.mentions.members.first()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('У вас нет прав!')
    if(!muser) return message.reply('Укажите пользователя которого хотите размутить!')
    if(!muser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.reply('Данный пользователь имеет права равные Вам!')
    if(!muser.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.reply('У меня нет прав!')
    var muterole = message.guild.roles.find(`name`, 'Muted')
    var logs = message.guild.channels.find(`name`, 'logs')
    if (!logs) return message.reply('Создайте канал под названием "logs"!')
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setDescription(`**Пользователь ${muser} был размучен!**`)
    embed.addField('**Модератор**', message.author, true)
    embed.setColor('006400')
    message.channel.send(embed)
    await muser.removeRole(muterole)
    var embed1 = new Discord.RichEmbed()
    .setTitle('Unmute | Logs')
    .setDescription(`**Пользователь ${muser} был размучен!**`)
    .addField('**Модератор**', message.author, true)
     logs.send(embed1)
}
    exports.help = {
        name: 'unmute'
    }
