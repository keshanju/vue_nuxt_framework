
// lsup 打包并上传到开发环境
// lsall 全部打包
// lsnotice 打包公告
// lsnotice_d 打包公告详情
// lsactivity 活动
var config = require('./project.config');
var utils = require('./utils');
let z_routes = [];
console.log('~~~~~~【当前环境】' + config.server_type + " 【版本号】" + config.verson + " 【执行的命令】" + process.env.npm_lifecycle_event + " 【当前项目】" + config.projectName);
module.exports = {
    vue: {
        config: {
            productionTip: false,
            devtools: false
        }
    },

    env: {
        server_type: config.server_type,
        verson: config.verson,
    },

    srcDir: config.srcDir,
    mode: 'universal',

    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0', // default: localhost,
    },

    /**
     * 插件
     */
    plugins: [
        "~/plugins/plugin.js",
    ],

    /**
     * 模块
     */
    css: [
        config.cssPath
    ],

    /**
     * head
     */
    head: {
        meta: [
            {charset: "UTF-8"},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {"http-equiv": "X-UA-Compatible", content: "ie=edge"},
        ],
        script: config.script,
    },

    /*
    ** Customize the progress-bar color
    */
    loading: false,

    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        loaders: {
            imgUrl: {limit: 1},
        },
        filenames: {
            app: () => '[name].js',
            chunk: () => '[name].js',
            css: () => '[name].css',
            img: () => 'img/[name].[ext]',
        }
    },

    /**
     * 自定义路由
     */
    router: {
        extendRoutes(routes, resolve) {
            z_routes = [];
            switch (config.site) {
                case 'xiazai':
                    break;
                default:
                    routes.forEach(v => {
                        v.path = "/" + v.name + "/:region_code?/:language?";
                        //需要翻页的
                        if (v.name == 'newslist' || v.name == 'news') {
                            v.path = v.path + '/:page?';
                        }
                        if (v.name == 'activity') {
                            v.path = v.path + '/:page?';
                        }
                        if (v.name == 'notify') {
                            v.path = v.path + '/:page?';
                        }
                        var r1, r2, r3, r4;
                        if (v.name.indexOf('components') == -1) {
                            //
                            if (v.path.indexOf('/:page') != -1) {
                                //page
                                for (var j = 1; j <= 10; j++) {
                                    r1 = '/' + v.name + '/0/en/' + j;
                                    z_routes.push(r1);
                                    r2 = '/' + v.name + '/0/zh_CN/' + j;
                                    z_routes.push(r2);
                                    r3 = '/' + v.name + '/1/en/' + j;
                                    z_routes.push(r3);
                                    r4 = '/' + v.name + '/1/zh_CN/' + j;
                                    z_routes.push(r4);
                                }
                            } else {
                                r1 = '/' + v.name + '/0/en';
                                z_routes.push(r1);
                                r2 = '/' + v.name + '/0/zh_CN';
                                z_routes.push(r2);
                                r3 = '/' + v.name + '/1/en';
                                z_routes.push(r3);
                                r4 = '/' + v.name + '/1/zh_CN';
                                z_routes.push(r4);
                            }
                        }
                    })
                    break;
            }
            //对应版本打包
            if(process.env.npm_lifecycle_event.indexOf('lsall')!=-1){
                console.log('~~~~~~~~~~~~leishen打包!~~~~~~~~~~');
            }else if(process.env.npm_lifecycle_event.indexOf('lsnotice')!=-1){
                z_routes = utils.buildNotice(z_routes);
            }else if(process.env.npm_lifecycle_event.indexOf('lsactivity')!=-1){
                z_routes = utils.buildActvity(z_routes);
            }else if(process.env.npm_lifecycle_event.indexOf('lszhuanti')!=-1){
                z_routes = utils.buildZhuanti(z_routes);
            }else if(process.env.npm_lifecycle_event.indexOf('lsdown')!=-1){
                z_routes = utils.buildDown(z_routes);
            }
        }
    },
    generate: {
        dir: config.dist,
        subFolders: config.subFolders,
        routes: function () {
            return z_routes;
        }
    }
}

