exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
    const randomPuppy = require("random-puppy");
    const subReddits = ["cat", "cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)
    let embed = new Discord.RichEmbed()
    .setImage(img)
    .setURL(`https://reddit.com/r/${random}`);
    message.channel.send(embed)
}
exports.help = {
    name: 'cat'
}
