const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
let avtor = message.mentions.users.first() || message.author;
let role = member.guild.roles.find(r => r.name === "DonateCase");
    avtor.addRole(role);
    let result = new Discord.RichEmbed()
    .setTitle('Выдача роли')
    .addField('Подробнее:',`Участнику ${avtor} выдали роль ${role}`)
    .setColor('#00ffff')
message.channel.send(result)
exports.help = {
    name: "addrole"
}
