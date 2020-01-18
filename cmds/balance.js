exports.run = async (client, message, args, config) => {
    const Discord = require("discord.js")
    const db = require("quick.db")

    let user = message.mentions.members.first() || message.author
    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0;

    message.channel.send(`${user} у Вас ${money}!`)
}
exports.help = {
    name: "balance"
}
