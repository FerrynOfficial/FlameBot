

exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var funcmds = ['`coin`', '`random`', '`8ball`','`iq`' ]
    var modcmds = ['`warn`', '`kick`', '`ban`', '`purge`', '`mute`', '`dm`']
    var cmds = ['`ping`', '`poll`', '`serverinfo`', '`about`', '`report`']
    var embed = new Discord.RichEmbed()
    .setTitle('**Справочник Команд**')
    .setColor('RANDOM')
    .addField('Команды для Участников', cmds, true)
    .addField('Команды для Модераторов', modcmds, true)
    .addField('Развлекательные Команды', funcmds, true)
    .setFooter('В скором времени будет добавлено больше команд!', true)
    message.member.send(embed)
    var embed2 = new Discord.RichEmbed()
    .setDescription(' Меню помощи было выслано вам в личные сообщения')
    .setColor('RANDOM')
    message.channel.send(embed2)
}
exports.help = {
    name: 'help'
}
