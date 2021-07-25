const Discord = require('discord.js');

const client = new Discord.client();

const prefix = '-';

client.once('ready', () => {
    console.log('Practicebot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command === 'youtube'){
        message.channel.send('https://www.youtube.com/codelyon');
    }
});




client.login('ODY4OTY5NzA4NDU4NzY2MzQ3.YP3ZGw.k8N8JcLQwS2iL2u6C_Fmw-4pvt0');

