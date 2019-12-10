const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Пожайлуста, напишите вопрос.");
    let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?","Возможно","Скорее нет","Не совсем"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return message.reply('Это не вопрос, поставь вопросительный знак.')

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);

    message.channel.send(embed);
}
exports.help = {
    name: "8ball"
}; 
