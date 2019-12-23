global.Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
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
        const channel = member.guild.channels.find(channel => channel.name === '❄╰👤╮новые-участники')
        if(!channel) return
        var embed = new Discord.RichEmbed()
        .setTitle('Добро Пожаловать!')
        .setDescription(`Приветствуем вас ${member}, на сервере FlameCommunity 2.0!Проверьте пожалуйста ваши личные сообщения.`)
        .setColor('RANDOM')
        channel.send(embed)
        var embed2 = new Discord.RichEmbed()
        .setTitle('Добро пожаловать!')
        .setDescription('Привет, добро пожаловать на сервер FlameCommunity! Мы очень рады твоему появлению на нашем сервере. Наша цель на данный момент - набрать 200 участников, поэтому мы ценим каждого зашедшего пользователя. На нашем сервере, ты сможешь хорошо пообщаться с другими участниками, а так же с администрацией. Наше комьюнити  очень адекватное, так же само как и Администрация. На нашем сервере вы никогда не получите наказание без причины.Так же, здесь мы тебя научим писать своих собственных ботов, на языке JavaScript. Наши программисты, почти что каждый день выкладывают туториалы в #❄╰💻╮программирование. А иногда, сам создатель может вам помочь. Ну а напоследок, я расскажу тебе немного о нашем Боте. У нас есть свой персональный бот - Flame. Он разрабатывается создателем сервера, и каждый день я добавляю в него что нибудь новое. Если ты хочешь узнать весь его функционал, напиши в #🎅🏻╰🌌╮trash-channel команду f!help.  Все, ещё раз спасибо тебе что зашёл(ла) на наш сервер. Мы надеемся на лучшее и желаем тебе хорошего времяпрепровождения!')
        .setColor('RANDOM')
        member.send(embed2)
    })
})
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
