
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require ('moment')

    var embed = new Discord.RichEmbed()
    .setTitle('Help Menu / Меню Помощи')
    .setThumbnail('http://pngimg.com/uploads/question_mark/question_mark_PNG87.png')
    .setDescription(`Привет, я GameErr.Bot! Если ты воспользовался командой помощи, значит ты хотел получить всю информацию обо мне. Давай начнём! 
    Я бот сервера TheGamers и разработан исключительно для него. На данный момент у меня не так уж мни много команд, но ты это можешь исправить, кинув идею в лс @TheFerryn™#0775.\nПрефикс: ${client.prefix}`)
    .setColor('RANDOM')
    .setFooter('Создатель: @TheFerryn | Создан: 28.09.2019')
    message.channel.send(embed)

}
exports.help = {
    group: 'general',
    desc: 'Выдает меню помощи',
    usage: 'g!help',
    name:'help'
 }
