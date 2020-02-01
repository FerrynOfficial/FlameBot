exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    const aChannel = message.guild.channels.get("645003339054055484")
    if(!aChannel) {
        message.delete()
        message.member.send("⚠️Канал для вопросов не найден! Сообщите создателю сервера для того, что бы исправить данную ошибку.")
        return
    }
    const question = args.slice(0).join(" ")
    if(!question) {
        let warn = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Укажите вопрос который хотите задать!")
        .setColor("FF0000")
        message.channel.send(warn)
        return
    }
    if(!question.includes("?")) {
        let warn1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Вопрос должен соддержать `?`!")
        .setColor("FF0000")
        message.channel.send(warn1)
        return
    }
var emoji = client.emojis.find(emoji => emoji.name === "FC_yes")
var qAuthor = message.author;
let embed = new Discord.RichEmbed()
.setTitle('**Вопрос**')
.setDescription(question)
.setColor('FF0000')
.addField("**Вопрос задал**", qAuthor, true)
aChannel.send(embed)
message.react(emoji)
message.member.send(`${emoji} Ваш вопрос был успешно отправлен и в скором времени на него ответит администрация!`)
}
exports.help = {
    name: "ask"
}
