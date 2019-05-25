const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

//if people get do s!report they get a usage and example of how to.

  let reporthelp = new Discord.RichEmbed()
  .setTitle("Command: Report")
  .setDescription("Report a player/user for doing something that is against the rules")
  .addField("Usage","s!report @user <reason>",true)
  .addField("Example","s!report @SweepingLoutus#5086 spamming the chat",true)
  .addField("Note","This will alert staff");

  let reported = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!reported)return message.channel.send(reporthelp)
  let rreason = args.slice(1).join(" ");


  let logchannel = message.guild.channels.find(x => channel.name === "logs")
  if (!logchannel)return message.channel.send(`No log channel`);

  let report = new Discord.RichEmbed()
  .setTitle(`Report`)
  .setColor("#ffc03a")
  .addField("Reported User", `${reported} with ID: ${reported.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason || "Unspecified");

  let reportResponseEmbed = new Discord.RichEmbed()
    .setColor("#0de51c")
    .setDescription("Your report has successfully been submitted! It will be overlooked as soon as possible!");

  message.delete().catch(O_o => {});

  logchannel.message.send(report);
  message.channel.send(reportResponseEmbed);


}

module.exports.help = {
  name: "report"
}
