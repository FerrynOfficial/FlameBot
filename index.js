global.Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
const db = require("quick.db")
global.ms = require('ms')
const superagent = require('superagent')
const config = require("./config.json")
client.login(process.env.BOT_TOKEN)
client.owner = '525003205394825257';
client.on('ready', () => {

    client.user.setStatus('dnd')
    if (config.activity.streaming == true) {
        client.user.setActivity('на FlameCommunity 2.0 | Слушает f!help', {url: 'https://twitch.tv/username'})
    }
})
client.on('messageDelete', message => {
    var lchannel = message.guild.channels.find(`name`, 'logs')
    if (!lchannel) return
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**Сообщение было удалено**\n**Содержание:** ${message.content}\n**Автор:** ${message.author}`)
    .setColor('#FF0000')
    lchannel.send(embed)
})
client.prefix = 'f!'
client.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('No commands!')
        return
    }
    console.log(`[COMMANDS] Loaded ${files.length} commannds!`)
    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        client.commands.set(props.help.name, props);
    })

     client.on('guildMemberAdd', member =>{
        const channel = member.guild.channels.find(channel => channel.name === '〔👥〕новые-участники')
        if(!channel) return
        var embed = new Discord.RichEmbed()
        .setTitle('Добро Пожаловать!')
        .setDescription(`Добро пожаловать, ${member}, на сервер **FlameCommunity 2.0**!`)
        .setColor('#006400')
        .setThumbnail(member.avatarURL)
        channel.send(embed)
    })
})
client.on("message", message => {
if (message.attachments.size > 0) {
var ej = client.emojis.find(emoji => emoji.name === "FC_like");
var emoji = client.emojis.find(emoji => emoji.name === "FC_dislikes");
message.react(ej)
message.react(emoji)
message.react('❤️')
}
});
client.on("message",msg => {
    if (msg.content === "L&D") {
        var like = client.emojis.find(emoji => emoji.name === "FC_like");
        var dislike = client.emojis.find(emoji => emoji.name === "FC_dislikes");
        msg.react(like).then((msg) => {
            msg.react(dislike)
        });
    }
});
client.on('message', message => {
    let msg = message.content.toLowerCase() || message.content.toUpperCase()
    if(!msg.startsWith(client.prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
let command = args.shift().toLowerCase();
    let cmd;
    if(client.commands.has(command)) {
        cmd = client.commands.get(command)
    }
    if(!cmd) return;
    cmd.run(client, message, args)
})
