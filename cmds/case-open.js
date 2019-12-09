exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    var caseRole = message.guild.roles.find(`name`, 'DonateCase')
    if(!caseRole) return message.reply('error')
    if(!message.member.caseRole) return message.reply('У вас нету кейсов для открития!')
    var replies = [`Поздравляем вас ${member}, вы выиграли **Prime!**`,`Поздравляем вас ${member}, вы выиграли **Prime!**`,`Поздравляем вас ${member}, вы выиграли **Prime!**`,`Поздравляем вас ${member}, вы выиграли **Prime!**`,`Поздравляем вас ${member}, вы выиграли **Prime!**`,`Поздравляем вас ${member}, вы выиграли **Premium**`,`Поздравляем вас ${member}, вы выиграли **Premium**`,`Поздравляем вас ${member}, вы выиграли **Premium**`,`Поздравляем вас ${member}, вы выиграли **Premium**`,`Поздравляем вас ${member}, вы выиграли **Premium**`,`Поздравляем вас ${member}, вы выиграли **Premium+**`,`Поздравляем вас ${member}, вы выиграли **Premium+**`,`Поздравляем вас ${member}, вы выиграли **Premium+**`,`Поздравляем вас ${member}, вы выиграли **Deluxe**`,`Поздравляем вас ${member}, вы выиграли **Deluxe**`,`Поздравляем вас ${member}, вы выиграли **Titan!**`]
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription(replies[result])
    message.channel.send(embed)
}
exports.help = {
    name: 'open-case'
}
