exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('BAN_MEMBERS')) {
        message.reply('**У меня нет прав на это.**')
        return
    }
    if(!message.member.permissions.has('BAN_MEMBERS')) {
        message.reply('**У вас нет прав на это.**')
        return
    }
    var banmember = message.guild.member(message.mentions.users.first())
    if(!banmember) {
        message.reply('**Пользователь не найден**\n`f!ban @User Причина`')
        return
    }
    if(banmember.permissions.has('BAN_MEMBERS')) {
        message.reply('**Данный пользователь имеет права равные вам.**')
        return
    }
    var reason = args.slice(1).join(' ')
    if(!reason) {
        message.reply('**Укажите причину.**')
        return
    }
    message.guild.members.get(banmember.id).ban(reason)
    var embed = new Discord.RichEmbed()
    .setTitle('Бан')
    .setDescription(`${banmember.user.tag} был забанен модератором ${message.author}!\nПричина: ${reason}`)
    .setColor('FF0000')
    message.channel.send(embed)
}
exports.help = {
   name: 'ban'
}
