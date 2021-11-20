const fs = require("fs-extra")
const path = require("path")

const scaffoldApp = async (appName) => {
    if(!appName) throw ("App name is missing, please enter the app name. For example:\n node-ts init my-app")
    const srcPath = path.join(__dirname,"../../bin")
    const destPath = `./${appName.trim().toLowerCase()}`
    fs.copy(srcPath,destPath,(err)=>{
        if(err) throw err;
        else {
            console.log("App Successfully created at",destPath)
        }
    });
}

module.exports = scaffoldApp;