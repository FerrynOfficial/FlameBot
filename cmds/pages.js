const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {

    let pages = ['Page 1','Page 2', 'Page 3', 'Page 4']
    let page = 1;
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Страница ${page} из ${pages.length}`)
    .setDescription(pages[page-1])
    message.channel.send(embed).then(message => {
        message.react('⏪').then( r => {
            message.react('⏩')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

            const backwards = message.createReactionCollector(backwardsFilter, { time: 60000})
            const forwards = message.createReactionCollector(forwardsFilter, { time: 60000})

            backwards.on('collect', r => {
                if(page === 1) return;
                page--;
                embed.setDescription(pages[page-1])
                embed.setFooter(`Страница ${page} из ${pages.length}`)
                message.edit(embed)
            })
            
            forwards.on('collect', r => {
                if(page === pages.length) return
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Страница ${page} из ${pages.length}`)
                message.edit(embed)
            })
        })
    })
}
exports.help = {
    name: 'pages'
}
