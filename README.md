## Console-debug-webpack-plugin

### Description
移动端调试debug plugin

### Demo

![demo](https://raw.githubusercontent.com/hackerwust/console-debug-webpack-plugin/master/assets/demo.gif)

### Usage
```
npm install console-debug-webpack-plugin  --save-dev
const consoleDebugWebpackPlugin = require('console-debug-webpack-plugin');

module.exports = {
    plugins: [
        new consoleDebugWebpackPlugin()
    ]
};
```