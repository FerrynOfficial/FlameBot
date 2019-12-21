exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var poll = args.slice(0).join(' ')
    if(!poll) return message.reply('Укажите вопрос!')
    let embed = new Discord.RichEmbed()
    .setTitle('📊Опрос / Голосование')
    .setDescription(poll)
    .setColor('RANDOM')
    .setFooter('Что бы проголосовать, нажмите на одну из реакций ниже!')
    message.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
        });
    message.delete()
}
exports.help = {
    name: 'poll'
}
