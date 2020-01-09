exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const channel = message.guild.channels.get('664453316234969125')
    if(!channel) {
        message.channel.send('Канал не найден!')
        return
    }
    var commentAuthor = message.author;

    const comment = args.slice(1).join('')
    if(!comment) {
        message.channel.send('Напишите Ваш комментарий.')
        return
    }

    let embed = new Discord.RichEmbed()
    .setTitle('**Комментарий**')
    .setDescription(comment)
    .addField('**Автор**', commentAuthor, true)
    .setColor('RANDOM')
    channel.send(embed)
    message.react('✅')
}
exports.help = {
    name: 'comment'
}
