
exports.run = async (client, message, args, config) => {
    const Discord = require("discord.js")
    const db = require("quick.db")

    let user = message.mentions.members.first() || message.author
     let money = db.fetch(`money_${message.guild.id}_${message.author.id}`);
    if (money === null) money = 0;
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Баланс: **${money}$**`)
    message.channel.send(embed)
}
exports.help = {
    name: "balance"
}
