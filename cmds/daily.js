exports.run = async (client, message, args, config) => {
    const Discord = require("discord.js")
    const db = require("quick.db")
    const ms = require("ms")
    const user = message.author
    const money = await db.fetch(`money_${user.id}`)
    
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
        .setDescription(`**Ежедневная награда**`)
        .addField("Собрано", amount, true)
        message.channel.send(embed).catch(() => {});
        
        db.add(`money_${user.id}`, 500)
        db.set(`daily_${user.id}`, Date.now())
    }
}
exports.help = {
    name: 'daily'
}
