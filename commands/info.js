const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
  .setDescription(`SoaringShip's Bot Infomation`)
  .setColor("#009af9")
  .addField(`Owners`,`JakeCooper732 + SpicyPizza`)
  .addField(`Ip`,`Play.SoaringShips.Cf`)
  .addField(`SponserShip`,`Parasteed Central`);
  
  return message.channel.send(botembed);
}

module.exports.help = {
  name:"Info"
}