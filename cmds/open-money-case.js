exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var embed1 = new Discord.RichEmbed()
    var author = message.author;
    var caseRole = message.member.roles.get('660919914244210709')
    var replies = ['2000💶','2500💶', '3000💶', '3500💶', '4000💶', '4500💶', '5000💶','5500💶', '6000💶']
    var result = Math.floor((Math.random() * replies.length))

    if(!caseRole) {
        message.channel.send('У Вас нету кейсов для открытия!')
        return
    }
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setDescription(`**Пользователь ${author} открыл Денежный Кейс, и выиграл ${replies[result]}**`)
    embed.setColor('RANDOM')
    embed.setThumbnail('https://cdn.discordapp.com/attachments/660855844010983434/661249051626438686/007-money-bag.png')
    message.channel.send(embed)

    var logsChannel = message.guild.channels.find('633216142286127114')
    if(!logsChannel) {
        message.channel.send('Channel is undefined!')
        return

        embed1.setTitle('Денежный Кейс | Logs')
        embed1.setDescription(`Пользователь ${author} открыл денежный кейс и выиграл ${replies[result]} монет.`)
        embed1.setColor('RANDOM')
        logsChannel.send(embed1)
    }
}
exports.help = {
    name: 'open-money-case'
}
