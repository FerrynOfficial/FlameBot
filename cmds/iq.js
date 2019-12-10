exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var replies = ['200', '180','160', '140','120','100','80','60']
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .setDescription('```Данные загружаються...```')
    .addField('Ваш IQ:',replies[result] )
    message.channel.send(embed)
}
exports.help = {
    name: 'iq'
}
