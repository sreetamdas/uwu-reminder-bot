const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.once("ready", () => {
	console.log("Ready!");
});

client.login(token);

client.on("message", (message) => {
	if (message.content === "!uwu") {
		// send back "Pong." to the channel the message was sent in
		message.channel.send("uwu!");
	} else if (message.content === command("uwu")) {
		message.channel.send(
			multiLine(
				`Guild details — ${message.guild.name}`,
				`Your username — ${message.author.username}`,
				`Your tag — ${message.author.tag}`
			)
		);
	}
});

/**
 * Get command with added prefix
 * @param {*} args
 * @returns
 */
function command(args) {
	return `${prefix}${args}`;
}

function multiLine(...args) {
	return args.join("\n");
}
