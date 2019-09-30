global.Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
client.login(process.env.BOT_TOKEN)

client.owner = '525003205394825257';
client.on('ready', () => {

    client.user.setStatus('dnd')
    client.user.setPresence({
        game:{
          name:`g!help | На Сервере ''TheGamers''`,
          type:"PLAYING"
        }
      }) 
})
client.prefix = 'g!'
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
        const channel = member.guild.channels.find(channel => channel.name === 'добро-пожаловать👋')
        if(!channel) return
        var embed = new Discord.RichEmbed()
        .setDescription('тест бота')
        .setColor('RANDOM')
        message.channel.send(embed)
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
