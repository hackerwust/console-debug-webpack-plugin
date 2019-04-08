## Console-debug-webpack-plugin

### Description
移动端调试webpack plugin

### Demo

![demo](https://raw.githubusercontent.com/hackerwust/console-debug-webpack-plugin/master/assets/demo.gif)

## Installation
Via npm:

`npm i console-debug-webpack-plugin --save-dev`

### Usage
```js
const consoleDebugWebpackPlugin = require('console-debug-webpack-plugin');

module.exports = {
    plugins: [
        new consoleDebugWebpackPlugin()
    ]
};
```