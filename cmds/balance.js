    const Discord = require("discord.js");
    const admin = require("firebase-admin");

    const serviceAccount = require(process.env.serviceKey);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://flame-bot-22e96.firebaseio.com/"
    }, "Vault");

function getDataValue(link) {
    return new Promise((res, rej) => {
        let ref = db.ref(link);

        ref.once("value", function(snapshot) {
            res(snapshot.val());
        });
    })
} 

function setDataValue(link, value, keep = false) {
    return new Promise((res, rej) => {
        let ref = db.ref(link);

        if (keep) {
            ref.update(value);
        }
        else {
            ref.set(value);
        }
    })
}

function updateDataValue(link, value) {
    setDataValue(link, value, true);
}

function pushDataValue(link, value) {
    return new Promise((res, rej) => {
        let ref = db.ref(link);

        let nref = ref.push(value);

        res(nref.key);
    })
}

exports.run = async (client, message, args, config) => {

    let user = message.mentions.members.first() || message.author
       let money = await getDataValue(`/money/${message.guild.id}/${message.author.id}`);
    if (money === null) money = 0;
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Баланс: ${money}$`)
    message.channel.send(embed)
}
exports.help = {
    name: "balance"
}
