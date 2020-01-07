const math = require('mathjs')
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
     if(![args0]) return message.channel.send('Укажите пример на который хотите получить ответ.')

     let resp;
     try {
         resp = math.eval(args.join(' '))
     } catch (e) {
         message.channel.send('Возникла ошибка.')
         return
     }

     let embed = new Discord.RichEmbed()
     .setColor('#FFFF00')
     .setTitle('**Math Calculation**')
     .addField('Ответ', `\`\`\`js\n${resp}\`\`\``)
     message.channel.send(embed)
}
exports.help = {
    name: 'calc'
}
