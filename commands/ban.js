const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

//if people get do s!ban they get a usage and example of how to.

  let banhelp = new Discord.RichEmbed()
  .setTitle("Command: Ban")
  .setColor("#003fff")
  .setDescription("Ban a player/user for doing something that is against the rules")
  .addField("Usage","s!ban @user <reason>",true)
  .addField("Example","s!ban @SweepingLoutus#5086 being toxic",true)
  .addField("Note","This will perm ban them and you will have to unban them by going into Settings and then bans and revoking the ban");

//getting the banned user(buser) and the reason (breason)

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser)return message.channel.send(banhelp)
  let breason = args.slice(1).join(" ");

  let nopermsembed = new Discord.RichEmbed()
  .setTitle("Insufficient Permissions")
  .setDescription("You need the Permission `Ban Members` to ban a user.") 

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(nopermsembed);
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person cannot be banned!");



  // embed when no log channel

  let nologembed = new Discord.RichEmbed()
  .setTitle("No Log Channel")
  .setColor("#003fff")
  .setDescription("Your Server doesn't seem to have a log channel.")
  .addField("To fix this make a channel called `#logs`");

  //finding the log channel

  let logchannel = message.guild.channels.find(channel => channel.name === "logs")
  if (!logchannel)return message.channel.send(nologembed);

//the log of the ban sent

  let ban = new Discord.RichEmbed()
  .setTitle(`Ban`)
  .setColor("#ff0000")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", breason || "Unspecified");

  let userbannotification = new Discord.RichEmbed()
  .setTitle("You where Banned")
  .setDescription(`You have been banned from`,message.guild.name)

  let banResponseEmbed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setDescription(`${bUser} has been banned from your server.`);

  message.delete().catch(O_o => {});

  logchannel.send(ban);
  message.channel.send(banResponseEmbed);

  const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

  bUser.send(userbannotification);
  await delay(100);
  bUser.ban(breason);
}

module.exports.help = {
  name: "ban"
}
