exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var muser = message.mentions.members.first()
    const muterole = message.guild.roles.find(`name`, 'Muted')
    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        let warn = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("У вас недостаточно прав для выполнения данного действия!")
        .setColor('FF0000')
        message.channel.send(warn)
        return
    }
    if(!muser) return message.reply('Укажите пользователя которого хотите размутить!')
    if(!muser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) {
        let warn1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Данный пользователь имеет права равные Вам!")
        .setColor("FF0000")
        message.channel.send(warn1)
        return
    }
    if(!muser.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) {
        let warn2 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("У меня недостаточно прав для выполнения данного действия!")
        .setColor('FF0000')
        message.channel.send(warn2)
        return               
    }
    if(!muser.roles.has(muterole)) {
        let warn3 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Данный пользователь не замучен!")
        .setColor('FF0000')
        message.channel.send(warn3)
        return
    }
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setDescription(`Пользователь был успешно размучен!`)
    embed.setColor('FF0000')
    message.channel.send(embed)
    await muser.removeRole(muterole)
    var logs = message.guild.channels.find(`name`, 'logs')
    if (!logs) {
        let nologs = new Discord.RichEmbed()
        .setTitle("⚠️**Предупреждение**")
        .setDescription("Канал logs не обнаружен!")
        .setColor('FF0000')
        message.channel.send(nologs)
        return
    }
    var embed1 = new Discord.RichEmbed()
    .setTitle('Unmute | Logs')
    .setDescription(`**Пользователь был размучен!**`)
    .addField('**Модератор**', message.author, true)
    .addField("Пользователь", muser, true)
     logs.send(embed1)
}
    exports.help = {
        name: 'unmute'
    }
