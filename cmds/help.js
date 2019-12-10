
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setTitle('**Справочник Команд**')
    .setColor('RANDOM')
    .setDescription('**Основные Команды**\n\n`serverinfo`- Показывает информацию о сервере\n`about`- Показывает информацию о боте\n`ping`- Показывает ваш пинг\n`report`- Пожаловаться на участника\n\n**Команды для Модераторов**\n\n`kick`- Кикает участника\n`ban`- Банит участника\n`warn`- Выдает предупреждение')
    .addField('Развлекательные Команды\n\n`8Ball`- Дает ответ на любой вопрос')
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
