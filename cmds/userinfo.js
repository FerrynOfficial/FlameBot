exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const moment = require('moment')
var user = message.mentions.users.first() || message.author;
var userinfo = {};
userinfo.avatar = user.AvatarURL()
userinfo.name = user.username;
userinfo.discrim = `#${user.discriminator}`
userinfo.id = user.id
userinfo.status = user.precense.status
userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format('dddd, MMMM Do, YYYY');
userinfo.joined = moment.utc(message.guild.members.get(user.id).user.joinedAt).format('dddd, MMMM Do, YYYY');

var embed = new Discord.RichEmbed()
.setAuthor(user.tag, userinfo.avatar)
.setThumbnail(userinfo.avatar)
.addField('Никнейм', userinfo.name, true)
.addField('Тэг', userinfo.discrim, true)
.addField('ID', userinfo.id, true)
.addField('Статус', userinfo.status, true)
.addField('Зарегистрирован', userinfo.registered, true)
.addField('На Сервере', userinfo.joined, true)
message.channel.send(embed)
}
exports.help = {
    name: 'userinfo'
}
