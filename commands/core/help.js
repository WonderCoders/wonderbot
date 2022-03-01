const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  utilisation: "{prefix}help",

  execute(client  ,  message  ,  args) {
    const embed = new MessageEmbed();
    const p = client.config.app.px;
    embed.setColor("RED");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024  ,  dynamic: true })
    );
    embed.setDescription(
`
\`\`\`yaml
${p}apply - Apply for the team
${p}ping - Check the bot's ping
${p}help - Show this message
\`\`\`
`
);
embed.setThumbnail(client.user.displayAvatarURL({ size: 1024  ,  dynamic: true }));
    embed.setTimestamp();
    embed.setFooter(
      "Made with love by Wonder Coders 💖",
      message.author.avatarURL({ dynamic: true })
    );
    message.channel.send({ embeds: [embed] });
  },
};
