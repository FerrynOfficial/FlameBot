exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var idea = args.slice(0).join(' ')
    if(!idea) return message.reply('Вы не указали идею!')
    var embed = new Discord.RichEmbed()
    .setTitle('Идея')
    .setDescription(idea)
    .setColor('RANDOM')
    .setFooter(message.author.username, message.author.avatarURL)
    var ideasChannel = message.guild.channels.find(`name`, '🎅🏻╰📑╮идеи')
    if(!ideasChannel) return message.reply('error')

    ideasChannel.channel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
            return message.reply('Идея была успешно отправлена!')
        });
    
}
exports.help = {
    name: 'idea'
}
