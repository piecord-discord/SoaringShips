const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  let verifyEmbed = new Discord.RichEmbed()
  .setTitle("Verify")
  .setDescription("React with the Emote under this message to prove you ae human.")

  const filter = (reaction, user) => {
    return reaction.emoji.name === '✅';
  };

  


  let unverified  = message.guild.roles.find(x => x.name === "unverified");
  let verified  = message.guild.roles.find(x => x.name === "verified");

}
module.exports.help = {
  name: "verify"
}
