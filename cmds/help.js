
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require ('moment')
    
    var embed = new Discord.RichEmbed()
    .setTitle('Help Menu / Меню Помощи')
    .setThubnail('http://pngimg.com/uploads/question_mark/question_mark_PNG87.png')
    .setDescription(`Hello; This is a test!/nPrefix: ${client.prefix}`)
    .setColor('RANDOM')
    message.channel.send(embed)

}
exports.help = {
    group: 'general',
    desc: 'Выдает меню помощи',
    usage: 'g!help',
    name:'help'
 }
