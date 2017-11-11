const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const glob = require('glob');
const files = glob.sync('./src/examples/*.html');

const newEntries = {};
const plugins = [];

if(files.length > 1){
    files.forEach(function(f){
        var name = /.*\/(examples\/.*?)\.html/.exec(f)[1]; //得到apps/question/index 这样的文件名

        newEntries[name] = f;

        var plug =  new HtmlWebpackPlugin({
            filename: name + '.html',
            template: f
        });
        plugins.push(plug);
    });

}

module.exports = plugins;
