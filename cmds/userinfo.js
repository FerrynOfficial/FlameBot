exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const moment = require('moment')
var member = message.mentions.users.first() || message.author;

var embed = new Discord.RichEmbed()
.setTitle('Информация о Учатснике')
.addField('Никнейм', member.username + '#' + member.discriminator)
.addField('ID', member.id)
.addField('Зарегистрирован в Discord', member.createdAt)
.addField('На сервере', member.joinedAt)
.setThumbnail(member.avatarURL)
.setColor('RANDOM')
message.channel.send(embed)
}
exports.help = {
    name: 'userinfo'
}
