exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    
    var text = message.content.split(' ').slice(1).join(' ')
        if(!text) return message.reply('error')
        var embed = new Discord.RichEmbed()
        .setDescription(text)
        .setThumbnail('https://cdn.discordapp.com/attachments/652623806019534868/665260222218108966/image0.png')
        message.channel.send(embed)
        message.delete()
       }      
        exports.help = {
            name:"say"
       }
        
