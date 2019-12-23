const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
let avtor = message.mentions.users.first() || message.author;
let role = message.guild.roles.find(r => r.name === "DonateCase");
    let result = new Discord.RichEmbed()
    .setTitle('Выдача роли')
    .addField('Подробнее:',`Участнику ${avtor} выдали роль ${role}`)
    .setColor('#00ffff')
message.channel.send(result).then(avtor.addRole(role))
}
exports.help = {
    name: 'addrole'
}
