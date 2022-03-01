const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  utilisation: "{prefix}help",

  execute(client  ,  message  ,  args) {
    const embed = new MessageEmbed();
    embed.setColor("RED");
    embed.setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ size: 1024  ,  dynamic: true })
    );
    embed.setDescription(`FUCK OFF`);
    embed.setTimestamp();
    embed.setFooter(
      "Made with love by WonderCoders 💖",
      message.author.avatarURL({ dynamic: true })
    );
    message.channel.send({ embeds: [embed] });
  },
};
