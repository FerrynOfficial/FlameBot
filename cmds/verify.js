exports.run = async(client, message, args, tools) => {
    const Discord = require("discord.js")
    const vUser = message.author;
    const vChannel = message.guild.channels.get("672188144921083907")
    if(message.channel == vChannel) {
        message.delete()
        return
    }

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Вы не робот? Для того чтобы пройти капчу, нажмите на реакцию ниже.')
    .setColor('FF0000')
    message.channel.send(embed).then((message) => message.react('✅'));

    const collector = message.createReactionCollector((reaction, user) => 
    user.id === message.author.id &&
    reaction.emoji.name === "✅"
    ).once("collect", reaction => {
        const chosen = reaction.emoji.name;
        const role = message.guild.roles.get("619878513041997824")
        if(chosen === "✅"){
            message.delete().then((vUser) => vUser.addRole(role));
            vUser.send("Вы были успешно зарегистрированы на сервере! Спасибо что вы с нами!")
        }

    })
}
exports.help = {
    name: 'verify'
}
