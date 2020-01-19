
exports.run = async (client, message, args, config) => {
    const Discord = require("discord.js")
    const db = require("quick.db")
    const ms = require("ms")

    let timeout = 86400000
    let amount = 500

    let daily = await db.fetch(`daily_${message.author.id}`)

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now () - daily))

        let embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("**Ежедневная награда**")
        .setColor("006400")
        .addField("Собрано", amount, true)
        message.channel.send(embed1).catch(() => {});

        db.add(`money_${message.author.id}, amount`)
        db.set(`daily_${message.author.id}`, Date.now())
        
        if (err) {
            console.log(err)
        }
    }
    else {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("FF0000")
        .setDescription(`Вы уже приходили за наградой сегодня.`)
        message.channel.send(embed).catch(() => {});
    }
}
exports.help = {
    name: 'daily'
}
