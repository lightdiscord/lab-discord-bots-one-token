import { Client } from "discord.js";

export const client = new Client();

client.on("ready", () => {
  console.log("First client is ready");
});

client.on("message", (message) => {
  if (message.content !== "ping") return;
  if (message.author.bot) return;

  message.reply("Pong from first client!");
});
