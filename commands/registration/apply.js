const fetch = require("node-fetch");
const fs = require("fs");
module.exports = {
  name: "apply",
  description: "Apply for the team",
  aliases: ["a"],
  usage: "<github username>",
  async execute(client, message, args) {
    if (message.channel.id !== "948138368544440320") {
      return message.reply(
        "You can only use this command in <#948138368544440320> channel!"
      );
    }
    const dataRead = fs.readFileSync("data.json");
    const data = JSON.parse(dataRead);
    var a = [];
    for (var i = 0; i < data.length; i++) {
      a.push(data[i].discordID);
    }
    for (var i = 0; i < a.length; i++) {
      if (a[i] == message.author.id) {
        message.reply("You have already applied!");
        return;
      }
    }
    if (!args) {
      return message.reply("Please provide your github username");
    }
    message.reply(
      "Your request has been submited, admins will contact you soon."
    );
    fetch(`https://api.github.com/users/${args[0]}`)
      .then((res) => res.json())
      .then((json) => {
        client.channels.cache
          .get("948155438661247017")
          .send(
            `They applied for the team!\n\nDiscord Username: ${
              message.author.tag
            }\nGithub Username: ${args[0]}\n\`\`\`json\n${JSON.stringify(
              json,
              null,
              2
            )}\n\`\`\``
          );
        const data = {
          discordID: message.author.id,
          github: args[0],
          data: json,
        };
        const object = JSON.parse(dataRead);
        object.push(data);
        fs.writeFileSync("data.json", JSON.stringify(object, null, 2));
      });
  },
};
