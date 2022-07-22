const discord = require("discord.js");
const client = require("../index").client;
const { createCmd } = require("../dataHandler")

client.on("ready", () => {
    createCmd(client, "988867113907273729")
});