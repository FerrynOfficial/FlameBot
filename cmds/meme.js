exports.run = async(client, message, args) => {
    const Discord = require("discord.js")
    const randomPuppy = require("random-puppy")
    const subVK = ["fckbrain"]
    const random = subVK[Math.floor(Math.random() * subVK.length)]

    const img = await randomPuppy(random)
    let embed = new Discord.RichEmbed()
    .setImage(img)
    .setURL(`https://vk.com/${random}`)
    message.channel.send(embed)
}
exports.help = {
    name: 'meme'
}
