exports.run = (client, message, args) => {
const Discord = require('discord.js')
const superagent = require('superagent')
const { body } = await superagent
.get('http://random.cat/meow')
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Meow :cat:')
.setImage(body.file)
message.channel.send(embed)
}
exports.help = {
    name: 'cat'
}
