exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(user.tag)
    .setImage(`${user.displayAvatarURL}?size=2048`)
    message.channel.send(embed)
}
exports.help = {
    name: 'avatar'
}
