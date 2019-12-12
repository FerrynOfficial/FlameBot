exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const moment = require('moment')
var member = message.mentions.users.first() || message.author;

var embed = new Discord.RichEmbed()
.setTitle('Информация о Учатснике')
.addField('Никнейм', member.username + '#' + member.discriminator)
.addField('ID Участника', member.id)
.addField('Зарегистрирован в Discord', require('moment')(member.createdAt).format('HH:MM DD-MM-YY'), true)
.addField('На сервере',  require('moment')(member.joinedAt).format('HH:MM DD-MM-YY'), true)
.setColor('RANDOM')
message.channel.send(embed)
}
exports.help = {
    name: 'userinfo'
}
