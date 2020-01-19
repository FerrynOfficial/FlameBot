exports.run = async (client, message, args, config) => {
    const Discord = require("discord.js")
    const db = require("quick.db")
    const ms = require("ms")

    let timeout = 86400000
    let amount = 500

    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if (daily == null) {
      daily = 0
    }

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now () - daily))

        let embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Вы уже приходили за наградой сегодня!")
        .setColor("FF0000")
        message.channel.send(embed1).catch(() => {});
        
        if (err) {
            console.log(err)
        }
    }
    else {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("006400")
        .setDescription(`**Ежедневная награда**`)
        .addField("Собрано", amount, true)
        message.channel.send(embed).catch(() => {});
        
        db.add(`money_${message.author.id}, amount`)
        db.set(`daily_${message.author.id}`, Date.now())
    }
}
exports.help = {
    name: 'daily'
}
