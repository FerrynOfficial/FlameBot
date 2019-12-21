
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var funcmds = ['`coin` - Подбрасывает монетку', '`random` - Рандомное число от 1 до 10', '`8ball` - Дает ответ на любой вопрос ','`iq` - Показывает ваш IQ', '`say` - Отправляет сообщение от лица бота']
    var modcmds = ['`warn` - Выдает предупреждение', '`kick` - Кикает участника', '`ban` - Банит участника', '`purge` - Очищает чат', '`mute` - Выдает мут', '`dm` - Отправляет личное сообщегие участнику']
    var cmds = ['`ping` - Показывает ваш пинг', '`poll` - Проводит голосование / Опрос', '`serverinfo - Показывает информацию о сервере', '`about` - Показывает информацию о боте', '`report` - Пожаловаться на участника', '`open-case`- Открыть донат кейс', '`userinfo`- Получить информацию о участнике']
    var embed = new Discord.RichEmbed()
    .setTitle('**Справочник Команд**')
    .setColor('RANDOM')
    .addField('Команды для Участников', cmds, true)
    .addField('Команды для Модераторов', modcmds, true)
    .addField('Развлекательные Команды', funcmds, true)
    .setFooter('В скором времени будет добавлено больше команд!')
    .setThumbnail('https://cdn.discordapp.com/avatars/657274192655417358/0fe339d420b930cfda52195cc9bb6bfb.png?size=512')
    message.member.send(embed)
    var embed2 = new Discord.RichEmbed()
    .setDescription(' Меню помощи было выслано вам в личные сообщения')
    .setColor('RANDOM')
    message.channel.send(embed2)
}
exports.help = {
    name: 'help'
}
