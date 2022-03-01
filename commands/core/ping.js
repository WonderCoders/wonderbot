require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");


module.exports = {
  name: "ping",
  aliases: ['stats'],
  utilisation: "{prefix}ping",

  execute(client, message) {
		const { version } = require("discord.js")
    cpuStat.usagePercent(async function(err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      const duration = moment.duration(message.client.uptime).format(" D[d], H[h], m[m]");

      const embed = new Discord.MessageEmbed()
      embed.setColor("RANDOM")
      embed.setTitle(`Stats from \`${client.user.username}\``)
      embed.addFields({
        name: ':ping_pong: Ping',
        value: `┕\`${Math.round(client.ws.ping)}ms\``,
        inline: true
      },
        {
          name: ':clock1: Uptime',
          value: `┕\`${duration}\``,
          inline: true
        }, {
          name: ':file_cabinet: Memory',
          value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\``,
          inline: true
        })

      embed.addFields({
        name: ':homes: Servers',
        value: `┕\`${client.guilds.cache.size}\``,
        inline: true
      },
        {
          name: ':busts_in_silhouette: Users',
          value: `┕\`${client.users.cache.size}\``,
          inline: true
        }, {
          name: ':control_knobs: API Latency',
          value: `┕\`${(message.client.ws.ping)}ms\``,
          inline: true
        })
      embed.addFields({
        name: ':robot: Version',
        value: `┕\`v1.0\``,
        inline: true
      }, {
          name: ':blue_book: Discord.js',
          value: `┕\`v${version}\``,
          inline: true
        }, {
          name: ':green_book: Node',
          value: `┕\`${process.version}\``,
          inline: true
        })
        .setFooter("Statistics")
        .setTimestamp()

      return message.channel.send({embeds: [embed]});
    })
		client.channels.cache.get(`900633193978400768`).send(`${message.author.tag} used stats command`)
  },
};
