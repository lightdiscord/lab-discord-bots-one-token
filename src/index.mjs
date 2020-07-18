import { client as first } from "./clients/first.mjs";
import { client as second } from "./clients/second.mjs";

const token = process.env.DISCORD_TOKEN;

first.login(token);
second.login(token);
