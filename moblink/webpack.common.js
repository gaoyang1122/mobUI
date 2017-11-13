/**
 * Created by zhangzeren on 2016/8/17.
 */
const path = require('path');
// var validate = require('webpack-validator'); //验证 config 是否正确
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空发布目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 创建html
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 将css文件单独输出  new ExtractTextPlugin('style-[contenthash:8].css'),

const copyWebpackPlugin = require('copy-webpack-plugin'); // 拷贝文件
const markdown = require('./webpack.markdown.js');

// markdown-loader
const marked = require("marked");
const renderer = new marked.Renderer();
marked.setOptions({
    custom: {
        key: 'demo', // 记号键名
        mark: ':::', // 记号
        render: function (oldStr, newStr) { // oldStr 原始字符串 newStr 处理后的字符串
            return '<div>'+
                '<div class="code-example bd-example">' + oldStr + '</div>'+
                '<div class="code-content">' + newStr + '</div>'+
                '<div class="code-control">显示代码</div>'+
                '</div>'
        }
    },
    highlight: function (code,lang) {
        return require('highlight.js').highlightAuto(code,[lang]).value;
    }
});

const currentTarget = process.env.npm_lifecycle_event; //检测NPM运行时 npm run 的值 (dev build dist)


// const glob = require('glob');
// // const mdfiles = glob.sync('./src/docs/components/*.md');
// var mdfiles = [];
//     glob.sync('./src/examples/*.html').forEach(function (ph) {
//         mdfiles.push(path.join(__dirname, ph))
//     });
// console.log(mdfiles)

var envHash = '-[chunkhash:8]';

/*
* 入口文件
* */
var entry = {
    //css
    'scss/bootstrap': path.join(__dirname, '../src/scss/bootstrap.scss'),

    main: path.join(__dirname, '../moblink/main.js'),

    // 'lib/utils/Global': [
    vendors: [// 依赖的第三方全局框架与库
        'babel-polyfill',
    ],
};

/*
* 输出配置
* */
var   output = {
    path: path.join(__dirname, '../dist'),//即入口文件最终要存放到哪里
    filename:'js/[name].js',
    chunkFilename: 'js/[name].js',
    //发布后静态资源引用的目录（ ‘发布目录’+资源目录）
    // publicPath: PATHS.publicPath,
};

var resolve = {
    extensions: ['.js', 'json', '.css', '.scss', '.jsx', '.vue', '.png', '.jpg'], //用于设置 webpack 处理的扩展名
    modules: [ //查找module的话从这里开始查找，必须绝对路径，搜索模块的优先级与数组的顺序有关，越靠前的越先匹配
        // path.join(__dirname, "src"),
        // PATHS.node_modulesPath
        'node_modules',
    ],
    alias: { // 别名配置，配置之后，可以在别的js文件中直接使用require('d3')，将导入的文件作为一个模块导入到你需要的项目中，不用配置别也可会当作模块导入项目中，只是你要重复写路径而已。
        'vue$': 'vue/dist/vue'
    }
};

/*
* 加载器配置
* */
var rules = [

    //html-loader
    {
        test: /\.html$/,
        use: [
            "html-loader" // loader: "html?-minimize"
        ]
    },

    {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    pedantic: true,
                    renderer
                }
            },
            // {
            //     loader: "file-loader",
            //     options: {
            //         name: "[name]-dist-md.html",
            //     },
            // },
        ]
    },

    // babel-loader
    {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        },
        exclude: /node_modules/  //排除不处理的目录(禁止编译 node_modules)，正常使用情况下，只需要/node_modules/
    },

    // vue loader
    {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            }
        ]

    },

    // vue-markdown-loader 配置
    // {
    //     test: /\.md$/,
    //     use: [
    //         {
    //             loader: 'vue-markdown-loader',
    //             options: markdown.getMarkDownSetting()
    //         }
    //     ]
    // },

    // css loader
    {
        test: /\.(sc|c)ss$/,
        use: ExtractTextPlugin.extract({ // 从js文件中提取CSS文件，减少JS文件大小，优化页面加载，但是它会增加包的时间，所以应该只在构建文件中使用
            fallback: 'style-loader',
            use: [
                'css-loader?sourceMap',
                {
                    loader: 'postcss-loader?sourceMap',// 自动添加css前缀的插件
                    options: {
                        plugins: () => [autoprefixer({browsers: ['last 2 versions']})]
                    }
                },
                'sass-loader?sourceMap'
            ],
            publicPath: '../'
        })
    },

    // img loader
    {
        test: /\.(png|gif|jpe?g)$/,
        use: [{
            loader: 'url-loader',
            query: {
                limit: 10000, // 图片文件使用 url-loader 来处理，小于10kb的直接转为base64
                name: 'images/[name]-[hash:8].[ext]'
            }
        }]
    },

    // font loader
    {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 5000,
                name: 'font/[name]-[hash:8].[ext]'
            }
        }]
    }

];
/*
* 插件
* */
var plugins = [

    new ExtractTextPlugin(`css/[name]${envHash}.css`),

    // 将公共库(vendor)和应用程序代码分离开来，并创建一个显式的 vendor chunk 以防止它频繁更改
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
    }),

    /*
     * 1、暴露到全局变量
     * 2、先找 .resolve.alias 中的属性，若没找到会找 node_modules 下的文件，直到找到为止
     * (可以单独使用 但不建议使用  使用webpack.optimize.CommonsChunkPlugin + entry)
     * */
    new webpack.ProvidePlugin({}),
    /*new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        'React' : 'react',
        "ReactDOM": "react-dom",
    }),*/

    // 生成保存在构建中的标识符（开发模式用NamedModulesPlugin）
    new webpack.HashedModuleIdsPlugin(),

    // new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {
        root: path.join(__dirname, '../'), // webpack.config.js 的地址
        verbose: true,// 将log写到 console.
        dry: false // 不要删除任何东西
    }),

    // 创建html
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '../moblink/index.html'),
        inject: 'true',
        // 需要依赖的模块
        // chunks: ['common','vendors', 'main', 'webpackAssets'],
        // 根据依赖自动排序
        chunksSortMode: 'dependency'
    }),

    /*
    * copy-webpack-plugin
    * from    定义要拷贝的源目录           from: __dirname + '/src/public'
    * to      定义要拷贝到的目标目录     from: __dirname + '/dist'
    * toType  file 或者 dir         可选，默认是文件
    * force   强制覆盖先前的插件           可选 默认false
    * context                         可选 默认base context可用specific context
    * flatten 只拷贝文件不管文件夹      默认是false
    * ignore  忽略拷贝指定的文件           可以用模糊匹配
    * */
    new copyWebpackPlugin([{
        from: path.join(__dirname, '../moblink/moblink.md'),
        to: path.join(__dirname, '../dist/docs'),
    }]),
    new copyWebpackPlugin([{
        from: path.join(__dirname, '../moblink/moblink-pro.md'),
        to: path.join(__dirname, '../dist/docs'),
    }]),

];



var config = {

    entry: entry,

    output: output,

    resolve: resolve,

    module: {
        rules: rules
    },

    plugins: plugins,

};

module.exports =  config;