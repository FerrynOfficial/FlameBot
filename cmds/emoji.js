exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var emoji = ['🚀', '🎵', '🔱', '💓', '🎉', '📜', '🎁', '💸', '📲', '🌌', '🎮', '🎳', '🎬', '⚽️', '❄️', '🌈', '⭐️', '🤖', '🇩🇪', '🇷🇺', '🇺🇦']
    var result =  Math.floor((Math.random() * emoji.length));
    let embed = new Discord.RichEmbed()
    .setDescription(emoji[result])
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'emoji'
}
