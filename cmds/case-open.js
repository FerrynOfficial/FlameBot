exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    var caseRole = message.member.roles.get('653581785929875475')
    if(!caseRole) return message.reply('У вас нету кейсов для открытия!')
    var replies = [`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем ваc, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Prime!**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Premium+**`,`Поздравляем вас, вы выиграли **Deluxe**`,`Поздравляем вас, вы выиграли **Deluxe**`,`Поздравляем вас, вы выиграли **Titan!**`]
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription(replies[result])
    .setThumbnail('https://cdn.discordapp.com/attachments/627452935676100618/653619763783925810/image0.png')
    message.channel.send(embed).then(message.member.removeRole(caseRole))
}
exports.help = {
    name: 'open-case'
}
