exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Pong!:ping_pong: ')
    .addField ('Пинг', `**${client.ping}ms**`)
    .setColor('RANDOM')
    message.channel.send(embed)
   }
   exports.help = {
    name: 'ping'
 }
