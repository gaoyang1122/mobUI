const dev = require('./webpack-setting/webpack.dev.js');
const prod = require('./webpack-setting/webpack.prod.js');


// moblink 技术文档  -------------------- 不能共用一个webpack入口
const dev_moblink = require('./moblink/webpack.dev.js');
const prod_moblink = require('./moblink/webpack.prod.js');

/*
* webpck打包 输出路径
* */
var imgPath = 'images/',                    //图片 超出10kb自动分离到此文件路径
    cssPath = 'css/',                        //css
    componentPath = 'components/',           //按需加载模块(jsx组件)
    vendorPath = 'vendors/',                 //第三方库与框架 && 公共的js合并
    outputPath = 'js/',                      //全局global，等js
    htmlPath = '',                           //html存放  设置 '' 为输出文件夹(dist)的根
    staticPath = '/react-demo/f9/dist/';    //静态资源 cdn 绝对路径  如：html模板打包自动引入的链接路径(暂时只跟html插件相关)

// var debug,          // 是否开启调试
//     minimize;       // 是否开启压缩
//
// if (currentTarget == "build") { // online mode （线上模式）
//     debug = false; minimize = true;
// } else if (currentTarget == "dev") { // dev mode （开发模式）
//     debug = true; minimize = false;
// }
//
//
// var PATHS = {
//     node_modulesPath: path.resolve('./node_modules'),
// };

const currentTarget = process.env.npm_lifecycle_event; //检测NPM运行时 npm run 的值 (dev build dist)
var envHash = ''

module.exports = function (env) {

    console.log(currentTarget);
    console.log(env);

    if (env && env.dev) {
        envHash = '-[chunkhash:8]'
        return dev
    }else if(env && env.build){

        return prod

    }else if(env && env.dist){

    }else{

        if(env && env.devmoblink){
            return dev_moblink
        }
        if(env && env.distmoblink){
            return prod_moblink
        }
    }

    // var config = {
    //
    //     entry: entry,
    //
    //     output: output,
    //
    //     resolve: resolve,
    //
    //     module: {
    //         rules: rules
    //     },
    //
    //     plugins: plugins,
    //
    //     devServer: devServer,
    //
    // };

    // return config

};
