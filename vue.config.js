const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ['js', 'css']
const os = require("os");
const TerserPlugin = require("terser-webpack-plugin");
const varPostCss = require("postcss-css-variables");
// vw 适配插件
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    outputDir: 'dist',
    parallel: os.cpus().length > 1,
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        hot: true,
        port: '8080',
        open: true,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: "https://app.nxteams.com",
                ws: false,
                changOrigin: true,
                pathRewrite: {
                    "^/api": "" //需要rewrite的,
                }
            },
            '/bpi': {
                target: 'https://www.zhipin.com',
                ws: false,
                changOrigin: true,
                pathRewrite: {
                    "^/bpi": "" //需要rewrite的,
                }
            }
        },
    },
    css: {
        extract: process.env.NODE_ENV === 'production',
        sourceMap: false,
        requireModuleExtension: true,
        loaderOptions: {
            postcss: {
                plugins: [
                    varPostCss({ preserve : false, preserveAtRulesOrder: true }),
                    // require('postcss-px-to-viewport')({
                    //     "viewportWidth": 1920,
                    //     "viewportHeight": 921,
                    //     "unitPrecision": 3,
                    //     "viewportUnit": "vw",
                    //     "selectorBlackList": [".ignore"],
                    //     "minPixelValue": 1,
                    //     "mediaQuery": false,
                    //     "replace": true,
                    //     "exclude": /(\/|\\)(node_modules)(\/|\\)/,
                    //   }),
                    postcssAspectRatioMini({}),
                    postcssWriteSvg({
                      utf8: false
                    }),
                    postcssCssnext({
                      warnForDuplicates: false
                    }),
                    cssnano(),
                ]
            },
            scss: {
                additionalData: `@import "@/assets/css/global.scss";`
            },
            less: {}
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))  // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@static', resolve('./src/static'))
            .set('@components', resolve('./src/components'))
            .set('@http', resolve('./src/http'))
            .set('@pages', resolve('./src/pages'))
            .set('@utils', resolve('./src/utils'))
        // 静态资源处理
        config.module
            .rule('images')
            .use('url-loader')
            // .set('exclude',[resolve('./node_modules')])
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))

    },
    // 扩展库
    configureWebpack: () => {

        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...

            return {
                optimization: {
                    minimizer: [
                        new TerserPlugin({
                            test: /\.js(\?.*)?$/i,
                            cache: true,
                            parallel: 4,
                        })
                    ]
                },
                externals: {
                    /**
                    *key: main.js中全局引入的路径
                    *value: 全局暴露出来的对象名
                    */
                    "vue-router": "VueRouter",
                    "vuex": "Vuex",
                    "axios": "axios",
                    "vue": "Vue",
                    "vant": 'vant'
                },
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/g,//匹配文件夹名称
                        threshold: 10240,// 对超过10kb的进行压缩
                        deleteOriginalAssets: false, //是否删除源文件
                    }, {
                        asset: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                        threshold: 10240,
                        minRatio: 0.8
                    }),
                    
                ]
            }
        } else {
            // mutate for development...
            return {
                output: {
                    libraryExport: 'default'
                },
                externals: {
                    /**
                    *key: main.js中全局引入的路径
                    *value: 全局暴露出来的对象名
                    */
                    "vue-router": "VueRouter",
                    "vuex": "Vuex",
                    "axios": "axios",
                    "vue": "Vue",
                    "vant": 'vant'
                },
            }

        }
    },
    pwa: {
        name: 'Browsing-Exp',
        themeColor: '#6476DB',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        }
    },
}