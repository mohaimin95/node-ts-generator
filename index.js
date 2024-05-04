#! /usr/bin/env node
const yargs = require("yargs")
const commands = require("./src/constants/commands");
const scaffoldApp = require("./src/services/scaffold-app.service")

const [operation = '', appName = ''] = yargs.argv._;
const successCommand = `
Project "${appName}" has been successfully generated ✨. \n
To continue working, run "cd ${appName} && git init && npm i"\n
Thanks 🤝.

Happy coding 🔥
`
switch (operation.toLowerCase()) {
    case commands.INIT:
        scaffoldApp(appName).then(() => {
            console.log(successCommand)
        }).catch(err => {
            console.log(err);
        })
        break;

    default:
        console.error("Invalid command, to create an app use `node-ts-generator init <app_name>`");
        break;
}