
exports.run = (client, message, args) => {
    const Discord = require('discord.js')

    var embed = new Discord.RichEmbed()
    .setDescription('Меню помощи было выслано вам в ЛС.')
    .setColor('RANDOM')
    message.channel.send(embed)

    var embed1 = new Discord.RichEmbed()
    .setTitle('Команды для Администрации')
    .setDescription(`kick, ban, warn, modinfo/ntest)
    .setColor('#FF5733')
    message.member.send(embed1)

    var embed2 = new Discord.RichEmbed()
    .setTitle('Команды для Участников')
    .setDescription('`help, about, ping, serverinfo`')
    .setColor('#27AE60')
    message.member.send(embed2)
}
exports.help = {
    group: 'general',
    desc: 'Выдает меню помощи',
    usage: 'g!help',
    name:'help'
 }
