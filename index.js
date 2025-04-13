const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
/////////////////////////////////////////////
//========= CHECK UPTIME =========//
/////////////////////////////////////////////
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
var uptimelink = [`https://13410bc9-9849-46d4-8121-8f6f9c596775-00-2qdba5ix0jda6.kirk.replit.dev`]
const Monitor = require('ping-monitor');
for (const now of uptimelink) {
  const monitor = new Monitor({
    website: `${now}`,
    title: 'SHAON PROJECT',
    interval: 59,
  config: {
    intervalUnits: 'seconds'
  }
});
monitor.on('up', (res) => console.log(chalk.bold.hex("#00FF00")("[ SHAON PROJECT UPTIME BOT ] ❯ ") + chalk.hex("#00FF00")(`${res.website}`)))
monitor.on('down', (res) => console.log(chalk.bold.hex("#FF0000")("[ DOWN ] ❯ ") + chalk.hex("#FF0000")(`${res.website} ${res.statusMessage}`)))
monitor.on('stop', (website) => console.log(chalk.bold.hex("#FF0000")("[ STOP ] ❯ ") + chalk.hex("#FF0000")(`${website}`)))
monitor.on('error', (error) => console.log(chalk.bold.hex("#FF0000")("[ ERROR ] ❯ ") + chalk.hex("#FF0000")(`${error}`)))
}
/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const port = process.env.PORT || 5000
     
app.listen(port, () =>
	logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Shaon.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
  
  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Starting up...");
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/shaonahmed47/SHAON-X7/main/package.json").then((res) => {
  logger(res['data']['name'], "[ NAME ]");
  logger("Version: " + res['data']['version'], "[ VERSION ]");
  logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();
app.get('/', (req, res) => res.sendFile(__dirname+'/Shaonproject/Shaon.html'))