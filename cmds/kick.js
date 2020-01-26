exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
    if(!message.guild.me.permissions.has('KICK_MEMBERS')) {
      let embed1 = new Discord.RichEmbed()
      .setTitle('**Ошибка при выполнении**')
      .setDescription('У меня недостаточно прав для выполнения данного действия!')
      .setColor('FF0000')
      message.channel.send(embed1)
        return
    }
    if(!message.member.permissions.has('KICK_MEMBERS')) {
      let embed2 = new Discord.RichEmbed()
      .setTitle('**Ошибка при выполнении**')
      .setDescription('У Вас недостаточно прав для выполнения данного действия!')
      .setColor('FF0000')
      message.channel.send(embed2)
        return
    }
    var kickmember = message.guild.member(message.mentions.users.first())
    if(!kickmember) {
      let embed3 = new Discord.RichEmbed()
      .setTitle('**Ошибка при выполнении**')
      .setDescription('Вы не указали пользователя которого хотите выгнать!')
      .setColor('FF0000')
      message.channel.send(embed3)
        return
    }
    if(kickmember.permissions.has('KICK_MEMBERS')) {
      let embed4 = new Discord.RichEmbed()
      .setTitle('**Ошибка при выполнении**')
      .setDescription('Данный пользователь имеет права равные Вам!')
      .setColor('FF0000')
      message.channel.send(embed4)
        return
    }
    var reason = args.slice(1).join(' ')
    if(!reason) {
      let embed5 = new Discord.RichEmbed()
      .setTitle('**Ошибка при выполнении**')
      .setDescription('Вы не указали причину по которой Вы хотите выгнать пользователя!')
      .setColor('FF0000')
      message.channel.send(embed5)
        return
    }
    var embed = new Discord.RichEmbed()
    .setColor('006400')
    .setDescription(`Пользователь ${kickmember} был успешно выгнан!`)
    message.channel.send(embed)
    message.guild.members.get(kickmember.id).kick(reason)
}
exports.help = {
    name: 'kick'
}
