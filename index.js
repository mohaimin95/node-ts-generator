#! /usr/bin/env node
const yargs = require("yargs")
const commands = require("./src/constants/commands");
const scaffoldApp = require("./src/services/scaffold-app.service")

const [operation = '', appName = ''] = yargs.argv._;

switch (operation.toLowerCase()) {
    case commands.INIT:
        scaffoldApp(appName).then(() => {
            console.log("App generated the files")
        }).catch(err => {
            console.log(err);
        })
        break;

    default:
        console.error("Invalid command, to create an app use `node-ts-generator init <app_name>`");
        break;
}