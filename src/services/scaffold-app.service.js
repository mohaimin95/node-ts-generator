const fs = require("fs-extra")
const path = require("path")

const scaffoldApp = async (appName) => {
    if (!appName) throw ("App name is missing, please enter the app name. For example:\n node-ts init my-app")
    const srcPath = path.join(__dirname, "../../bin")
    const destPath = `./${appName.trim().toLowerCase()}`
    await fs.copy(srcPath, destPath, {
        filter: (source) => {
            const relativePath = path.relative(srcPath, source)
            const ignoredPath = /(^|[\\/])(node_modules|dist|\.git)([\\/]|$)/
            return !ignoredPath.test(relativePath) && !/(^|[\\/])(package-lock\.json|pnpm-lock\.yaml)$/.test(relativePath)
        },
    });
}

module.exports = scaffoldApp;
