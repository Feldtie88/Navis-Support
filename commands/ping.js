const discord = require("discord.js");

module.exports.run = async (message) => {

    return message.channel.send("@support Pong!");

}

module.exports.help = {
    name: "ping"
}