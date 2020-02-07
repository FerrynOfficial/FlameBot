exports.run = async(client, message, args) => {
    const Discord = require("discord.js")
    const superagent = require("superagent")
    const {body} = await superagent
    .get(`https://vk.com/fckbrain`)
    console.log(body.file)
    if(!{body}) return message.channel.send("Ошибка, попробуйте снова!")

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(body.url)
    message.channel.send(embed)
}
exports.help = {
    name: 'meme'
}
