var verson = 'v1.1.3'; //版本
/**
 * 1开发环境 2测试 3生产 4预发布
 */
// var server_type = 1;
// var server_type = 2;
// var server_type = 4;
var server_type = 3;
var srcDir = ''; //判断项目根目录
var projectName = ''; //项目名称
var site=''
var subFolders=true
var dist=''
var script = [
    //百度统计
    {src: "/_njs/jquery.1.11.1.min.js"},
    {src: "/_njs/bootstrap.min.js"},
    {src: "/_njs/swiper2.7.6.min.js"},
    {src: "/_njs/jquery.lazyload.min.js"},
    {src: "/_njs/web.js"},
];
var cssPath = ''; //css的路径

var s_param = process.env.npm_lifecycle_event; //编译传递的参数
if(s_param.indexOf('dev')!=-1){
    server_type=1
}else if(s_param.indexOf('vf')!=-1){
    server_type=4
}
if (s_param.indexOf('bh') != -1) {
    /************薄荷项目************/
    projectName = '薄荷官网';
    srcDir = "src/pages/bohe/";
    cssPath = "~/assets/css/bohe.less"
    site='bh'
    dist='www_bohe'
} else {
    cssPath = "~/assets/css/leishen.less"
    script.push({src: "https://hm.baidu.com/hm.js?0eb4303e084ff5791f2a25e3df421cea"});
    script.push({
        src: "https://u.im-cc.com/uccwebchat/uccwebchat.min.js",
        type: "text/javascript",
        'data-url': "https://uchat.im-cc.com/webchat_new_ssl/static/html/index.html?isstatic=true",
        'data-function': "getWebchat('2FAepT','在线客服');",
        'data-btn': "true",
        id: "imcc-iframe",
        body: true
    });
    if(s_param.indexOf('down')!=-1){
        projectName = '雷神下载站';
        srcDir = "src/pages/xiazai/";
        subFolders=false
        site='xiazai'
        dist='www_leishen_xiazai'
    }else{
        projectName = '雷神官网';
        srcDir = "src/pages/leishen/";
        site='ls'
        dist='www'
    }
}
module.exports = {
    verson: verson,
    server_type: server_type,
    srcDir: srcDir,
    script: script,
    projectName:projectName,
    cssPath:cssPath,
    subFolders:subFolders,
    site:site,
    dist:dist
}
