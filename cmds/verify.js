
exports.run = async(client, message, args, tools) => {
    const Discord = require("discord.js")
    const vUser = message.author;
    const vChannel = message.guild.channels.get("672188144921083907")
    const newbie = message.guild.roles.get("619878513041997824")
    if(message.member.role.has(newbie)) {
        message.delete()
        return
    }
   
    const verify = message.guild.roles.get("672751848490401799")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Верификация была успешно пройдена! Спасибо что вы с нами!')
    .setColor('006400')
    message.member.send(embed)
    message.member.removeRole(verify).then(message.member.addRole(newbie))
    message.delete();
}
exports.help = {
    name: 'verify'
}
