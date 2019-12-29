exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var embed1 = new Discord.RichEmbed()
    var iChannel = message.guild.channels.get('645003953960124457')
    var iText = args.slice(0).join(" ")

    if(!iChannel) {
        message.channel.send('Channel is undefined!')
        return
    }
    if(!iText) {
        message.channel.send('Укажите идею которую хотите предложить!')
        return
    }
    embed.setTitle('**Предложение**')
    embed.setDescription(iText)
    embed.addField('**Автор идеи**', message.author, true)
    embed.setColor('006400')
    embed.setThumbnail('https://cdn.discordapp.com/attachments/660855844010983434/660863254800629760/idea.png')
    iChannel.send({ embed }).then((message) => {
        message.react('👍')
            .then(() => message.react('👎'))
        });

    embed.setDescription('**Идея была успешно отправлена!**')
    embed.setColor('006400')
    message.channel.send(embed1)
}
exports.help = {
    name: 'idea'
}
