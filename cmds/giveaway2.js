const discord = require("discord.js");
 
exports.run = async (client, message, args) => {
 
    var item = "";
    var time;
    var winnerCount;
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('У вас нет прав!');

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(' ');
 
    message.delete();
 
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
 
    var giveawayEmbed = new discord.RichEmbed()
        .setTitle("🎉 **РАЗДАЧА** 🎉")
        .setFooter(`Итоги: ${dateTime}`)
        .setDescription(item);
 
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
 
    setTimeout(function () {
 
        var random = 0;
        var winners = [];
        var inList = false;
 
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        if (peopleReacted.length == 0) {
            return message.channel.send("Победителя нету!");
        }
 
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Ошибка");
        }
 
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (var y = 0; y < winners.length; y++) {
                
                if (winners[y] == peopleReacted[random]) {
                    
                    i--;
            
                    inList = true;
                    break;
                }
            }
 

            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Участник " + winners[i] + `! Выиграл **${item}**.`);
        }
 
    }, 1000 * time);
 
 
}
 
exports.help = {
    name: "giveaway2",
}
