const Discord = require('discord.js');
module.exports.run = async (client,message,args) => {
var role = message.mentions.roles.first();
var member = message.mentions.members.first();
var arg = new Array()
arg[0] = member
arg[1] = role
if(!arg[0]) return message.channel.send('Укажите участника')
if(!arg[1])return message.channel.send('Укажите роль')
    let embed = new Discord.RichEmbed()
    .setTitle('Выдача роли')
    .addField('Подробнее:',`Участнику ${member} выдали роль ${role}`)
    .setColor('FF0000')
message.channel.send(embed)
await(member.addRole(role))
}
module.exports.help = {
    name: 'addrole'
}
