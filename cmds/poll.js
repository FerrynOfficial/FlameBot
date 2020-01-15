exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ms = require('ms')
    var poll = args.slice(1).join(' ')
    var pollTime = args[0]
    if(!pollTime) return 
    if(!poll) return message.reply('Укажите вопрос!')
    var embed1 = new Discord.RichEmbed()    

    .setTitle('📊Опрос / Голосование')
    .setDescription(poll)
    .setFooter(`Опрос от ${message.author.username} | Осталось: ${pollTime}`)
    message.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
        });
        setTimeout(function () {
            embed1.setDescription('Голосование окончено!')
            message.channel.send(embed1)
        })
}
exports.help = {
    name: 'poll'
}
