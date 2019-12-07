
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setTitle('Справочник Команд')
    .setColor('RANDOM')
    .setDescription('Основные Команды\n`serverinfo`- Показывает информацию о сервере')
    message.channel.send(embed)
}
exports.help = {
    name: 'help'
}
