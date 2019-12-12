exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    var replies = ['1', '2','3', '4', '5','6','7','8','9', '10']
    var result = Math.floor((Math.random() * replies.length));

    var embed = new Discord.RichEmbed()
    .addField('Вам выпало число:', replies[result], true)
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'random'
}
