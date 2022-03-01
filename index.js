var http = require("http").createServer(function(req, res) {
	res.write("Sample");
	res.end();
}).listen(8080);
const { Client, Intents } = require("discord.js");
global.Discord = require('discord.js')
const AllIntents = new Intents(32509);
AllIntents.remove(4096)
global.client = new Client({
	intents: AllIntents,
	disableMentions: "everyone",
});
client.config = require("./config");
require("./src/loader");
client.login(client.config.app.token);
