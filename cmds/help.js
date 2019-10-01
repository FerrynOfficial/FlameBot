const Discord = require('discord.js')
exports.run = (client, message, args) => {

    let emded = new Discord.RichEmded()
    .setDescription('Меню помощи было выслано вам в ЛС.')
    .setColor('RANDOM')
    message.channel.send(embed)
    message.react(':white_check_mark:')

    let embed1 = new Discord.RichEmbed()
    .setTitle('Команды для Учатсников')
    .setDescription('`about, serverinfo, help, ping`')
    .setColor('#27AE60')
    .addBlankfield(true)
    .setTitle('Команды для Администрации')
    .setDescription('`kick, ban, warn, modinfo`')
    .setColor('#FF5733')
    message.member.send(embed1)
}
exports.help = {
    group: 'general',
    desc: 'Выдает меню помощи',
    usage: 'g!help',
    name:'help'
 }
