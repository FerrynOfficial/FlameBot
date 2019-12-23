exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('У вас нет прав!')
    var rMember = message.guild.member(message.metions.users.first()) || message.guild.members.get(args[0])
    if(!rMember) return message.reply('Пользователь не найден!')
    var role = args.join(" ").slice(22)
    if(!role) return message.reply('Укажите роль!')
    var gRole = message.guild.roles.find(`name`, role)
    if(!gRole) return message.reply('Роль не найдена!')

    if(rMember.roles.has(gRole.id))
    await(rMember.addRole(gRole.id))
    var embed = new Discord.RichEmbed()
    .setTitle('Выдача роли')
    .addField('Подробнее:',`Участнику ${rMember} выдали роль ${gRole}`)
    .setColor('FF0000')
    message.channel.send(embed)
}
exports.help = {
    name: 'addRole'
}
