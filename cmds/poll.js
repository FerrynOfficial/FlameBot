exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var poll = args.slice(0).join(' ')
    if(!poll) return message.reply('Укажите вопрос!')
    let embed = new Discord.RichEmbed()
    .setTitle('📊Опрос / Голосование')
    .setDescription(poll)
    .setColor('RANDOM')
    .setFooter('Опрос от' ,message.author.username, message.author.avatarURL)
    message.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
        });
}
exports.help = {
    name: 'poll'
}
