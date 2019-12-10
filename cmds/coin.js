exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var replies = ['Орёл', 'Решка']
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .addField('Вам выпал(а)',replies[result])
    .setColor('FFFF00')
    .setThumbnail('https://cdn.discordapp.com/attachments/627452935676100618/654003626942922752/coin_PNG36943.png')
    message.channel.send(embed)
}
exports.help = {
    name: 'coin'
}
