exports.run = (client, message, args) => {
    const db = require('quick.db')
    const Discord = require('discord.js')
    if(message.author.id !== client.owner) {
        message.react('‼️')
        return
    }
    function clean(text) {
        if(typeof(text) === 'string') 
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
         else 
            return text;
    }
    try {
        var input = args.join(' ')
        let evalcode = eval(input)
        if(typeof evalcode !== 'string') 
        evalcode = require('util').inspect(evalcode);
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Input`, `\`\`\`js\n${input}\`\`\``)
        .addField(`Output`, `\`\`\`js\n${clean(evalcode)} \`\`\``)
        .setColor(client.color)
        message.channel.send(embed)
} catch (e) {
    var embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(`Error`, `\`\`\`js\n${clean(e)}\`\`\``)
    .setColor(client.color)
    message.channel.send(embed1)
}
}

exports.help = {
    name: 'jsk'
}
