var fs = require("fs");
var path = require("path");
var rd = require('rd');
var config = require('./nuxt.config');
var version = config.env.verson;

replaceVersion();

/**
 * 将生成的html的引用的js和css文件进行替换和去除window__NUXT__这一段js代码
 */
async function replaceVersion() {
    var distDir = '/' + config.generate.dir;
    rd.eachFileFilterSync(path.resolve(__dirname + distDir), /\.html$/, function (f, s) {
        fs.readFile(f, 'utf8', function (err, files) {
            // 将.js文件替换成.js?version=v1.0
            var result = files.toString()
            var scriptReg=new RegExp('<script.*?>','gm')
            var linkReg=new RegExp('<link.*?>','gm')
            // 找到<script>里的内容，并转化为数组
            var scriptArr= result.match(scriptReg)
            // 找到<link>里的内容，并转化为数组
            var linkArr= result.match(linkReg)
            // <script>里面的src的正则表达式,里面的为双引号-注意
            var srcReg=new RegExp('src\=\".*?\"')
            // <link>里面的href的正则表达式，里面的为双引号-注意
            var hrefReg=new RegExp('href\=\".*?\"')
            // 在<script开始的src标签里面的.js和.css替换为.js?version=和.css?version=
            for(let ii=0;ii<scriptArr.length;ii++){
                if(scriptArr[ii].indexOf('src=')!==-1){
                    var tempScript= scriptArr[ii].match(srcReg)[0]
                    // 剔除掉百度的统计的https://hm.baidu.com/hm.js?9513e0c1768e0f11b637a3b4be7d9131
                    if(tempScript.indexOf('.js?')==-1){
                        var tempScriptReg=new RegExp(tempScript,'g')
                        result=result.replace(tempScriptReg,tempScript.slice(0,tempScript.length-1)+'?version='+version+'"')
                    }
                }
            }
            // 在<link开始的href标签里面的.js和.css替换为.js?version=和.css?version=
            for(let pp=0;pp<linkArr.length;pp++){
                if(linkArr[pp].indexOf('href=')!==-1){
                    var tempLink=linkArr[pp].match(hrefReg)[0]
                    // 剔除掉百度的统计的https://hm.baidu.com/hm.js?9513e0c1768e0f11b637a3b4be7d9131
                    if(tempLink.indexOf('.js?')==-1){
                        var tempLinkReg=new RegExp(tempLink,'g')
                        result=result.replace(tempLinkReg,tempLink.slice(0,tempLink.length-1)+'?version='+version+'"')
                    }
                }
            }

            var indexBegin = result.indexOf('<script>window.__NUXT__')
            //替换')</script>或者}</script>
            var indexend = -1
            if (result.indexOf(')</script>') !== -1) {
                indexend = result.indexOf(')</script>')
            } else {
                indexend = result.indexOf('}</script>')
            }
            if (indexend !== -1) {
                // 删除window.__NUXT__的js部分
                // result = result.replace(result.substring(indexBegin, indexend + 10), '')
            }
            fs.writeFile(f, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        })
    });
}