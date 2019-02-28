const fs = require('fs');
const path = require('path');

const debugFilePath = path.resolve(__dirname, '../files/debug.js');
const debugFileContent = fs.readFileSync(debugFilePath, 'utf8');

const getDebugJs = function () {
    return debugFileContent;
};

class ConsoleDebugWebpackPlugin {
    constructor (option) {

    }
}

ConsoleDebugWebpackPlugin.getDebugJs = getDebugJs;

module.exports = ConsoleDebugWebpackPlugin;