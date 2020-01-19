exports.run = async (client, message, args, config) => {
    const Discord = require('discord.js')
    const db = require('quick.db')
    const ms = require('ms')
    const user = message.author
    const money = await db.fetch(`money_${user.id}`)

    let timeout = 14400000
    const amount =  Math.floor((Math.random() * 650));

    let work = await db.fetch(`work_${user.id}`)

    if (work == null) {
        work = 0
    }

    if (work !== null && timeout - (Date.now() - work) > 0) {
        const time = ms(timeout - (Date.now () - work))

        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`Вы поработали и получили **${amount}$**`)
        message.channel.send(embed).catch(() => {});

        if (err) {
            console.log(err)
        }
        else {
            let embed1 = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`Вы уже работали. Приходите снова через ${time.hours}ч ${time.minutes}м`)
            .setColor('FF0000')
            message.channel.send(embed1).catch(() => {})

            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        }
    }

}
exports.help = {
    name: 'work'
}
