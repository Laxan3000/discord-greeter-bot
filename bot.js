const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

var auth = []

auth.token = "NjUyMTk2NjA0MDYwODkzMjA0.XfToZg.4kxla1__VhIIAyrDYmTsxCs1rBM"

client.on('ready', () => {

  console.log('I am ready!');

});

client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  youtubeKey: "AIzaSyCehuVXcKsvbxt8aRNiFS5ERtEHHO0lMBw",
  botPrefix: "lx!"
});

client.login("NjUyMTk2NjA0MDYwODkzMjA0.XfToZg.4kxla1__VhIIAyrDYmTsxCs1rBM");

client.on('message', async msg => {
  if(msg.author.id === client.user.id) return;

  if (msg.content === 'lx!server') {
      msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
      message.channel.send(ListEmbed);  
  }
});

client.on('message', msg => {
  if(msg.author.id === client.user.id) return;

  if (msg.content === 'lx!user') {
      msg.channel.send(`Your username: ${msg.author.tag}\nYour ID: ${msg.author.id}`);
  }
});

client.on('message', msg => {
  if (msg.content === 'lx!sayloop') {
      msg.channel.send(`lx!sayloop`);
  }
});


// set message listener 
client.on('message', message => {
  let command = message.content;

  // match commands like /embed [title]; [description]
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

bot.login(process.env.token);

client.login(auth.token);
