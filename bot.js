const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

var auth = []

auth.token = "NjUyMTk2NjA0MDYwODkzMjA0.XgDLTA.na8-ezY62awwEskCLeE8GN_HdcY"

client.on('ready', () => {

  console.log('I am ready!');

});

client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  youtubeKey: "AIzaSyCehuVXcKsvbxt8aRNiFS5ERtEHHO0lMBw",
  botPrefix: "lx!"
});

client.login("NjUyMTk2NjA0MDYwODkzMjA0.XgDLTA.na8-ezY62awwEskCLeE8GN_HdcY");

client.on('message', async msg => {
  if(msg.author.id === client.user.id) return;

  if (msg.content === 'lx!server') {
    var embed = new Discord.RichEmbed()
     .setTitle('Server infos')
     .setDescription(`Server name:\n${msg.guild.name}\n\nTotal members:\n${msg.guild.memberCount}, ${msg.guild.memberCount - msg.guild.bots} Humans and ${msg.guild.bots} Bots\n\nIs the server large?\n${msg.guild.large}\n\nServer ID:\n${msg.guild.id}\n\nServer Icon:\n(below this list)\n\n(URL: ${msg.guild.iconURL})\n\nServer region:\n${msg.guild.region}\n\nServer Owner:\n${msg.guild.owner}\n(${msg.guild.ownerID})\n\nServer created at:\n${msg.guild.createdAt}`)
     .setImage(msg.guild.iconURL)
     .setColor('GREEN')
     msg.channel.send(embed);  
  }
});

client.on('message', msg => {
  if(msg.author.id === client.user.id) return;

  if (msg.content === 'lx!myinfo') {
    var embed = new Discord.RichEmbed()
     .setTitle('Your infos')
     .setDescription(`Your username: \n${msg.author.tag}\n\nYour ID: \n${msg.author.id}\n\nYour avatar:`)
     .setImage(msg.author.avatarURL)
     .setColor('GREEN')
     msg.channel.send(embed);
  }
});

client.on('message', msg => {
   if(msg.author.id === client.user.id) return;

   if (msg.content === 'lx!info ') {
    let utente = msg.mentions.members.first().user
    var embed = new Discord.RichEmbed()
     .setTitle('His infos')
     .setDescription(`His username: \n${utente.tag}\n\nHis ID: \n${utente.id}\n\nLast Message: \n${utente.lastMessage}\nHis avatar:`)
     .setImage(utente.avatarURL)
     .setColor('GREEN')
     msg.channel.send(embed);
  }
});

client.on("message", msg => {
  if(msg.author.id === client.user.id) return;

  if (msg.content === 'lx!help') {
   setTimeout( () => {
    var embed = new Discord.RichEmbed()
    .setTitle(`Other commands:`)
    .setDescription(`lx!server\nShows server infos\n\nlx!myinfo\nShows your infos\n\nlx!info {tag}\nShow others infos\n\n/embed [text] [description]\nCreates an embed`)
    .setColor("GREEN")
    msg.channel.send(embed)
    }, 100)
  }
});

client.on('message', msg => {
  if (msg.content === `lx!sayloop`) {
      msg.channel.send(`lx!sayloop`);
  }
});

// set message listener 
client.on('message', message => {
  let command = message.content;

  // match commands like /embed [title] [description]
  // first \w+ is for the title, 2nd is for description
  if ( /^\/embed \[[\w ]+\] \[[\w ]+\]$/.test(command) )
      sendEmbed(message);
});

function sendEmbed(message) {
  let command = message.content;
  let channel = message.channel;
  let author = message.author;

  // get title string coordinates in command
  let titleStart = command.indexOf('[');
  let titleEnd = command.indexOf(']');
  let title = command.substr(titleStart + 1, titleEnd - titleStart - 1);

  // get description string coordinates in command
  // -> (start after +1 so we don't count '[' or ']' twice)
  let descStart = command.indexOf('[', titleStart + 1);
  let descEnd = command.indexOf(']', titleEnd + 1);
  let description = command.substr(descStart + 1, descEnd - descStart - 1);

  // next create rich embed
  let embed = new Discord.RichEmbed({
      title: title,
      description: description
  });

  // set author based of passed-in message
  embed.setAuthor(author.username, author.displayAvatarURL);

  // send embed to channel
  channel.send(embed);
  message.delete()
}

client.login(auth.token);