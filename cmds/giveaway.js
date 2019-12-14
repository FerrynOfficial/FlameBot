exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var present =  args.slice(0).join(' ')
    var giveaway = args.slice(1).join(' ')
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('У вас недостаточно прав!')
    var embed = new Discord.RichEmbed()
    .setTitle('🎉Раздача')
    .setDescription(giveaway)
    .addField('Приз', present, true)
    .setFooter('Для того что бы участвовать, нажми на реакцию ниже!')
    .setColor('RANDOM')
    message.channel.send({ embed }).then((message) => {
        message.react('👍')
    });
}
exports.help = {
    name: 'giveaway'
}
