//命令
// npm run generate;node leishen_node.js;sh leishen.sh;
//
var fs = require("fs");
var path = require("path");
//需要排除的目录
var excludeDir = ['_nuxt','img','LICENSES','.nojekyll','200.html','components','_njs','images'];

module.exports = {
    mkdirs: mkdirs,
    deleteDirs: deleteDirs,
    copyFolder: copyFolder,
    copyFile: copyFile,
    arrToObj: arrToObj,
    excludeDir: excludeDir,
}

/**
 * 创建目录
 * @param dirname
 * @param callback
 */
async function mkdirs(dirname, callback = null) {
    await fs.mkdir(dirname, function (e) {
    });
    console.log('目录创建成功:' + dirname);
    return true;
}

/**
 * 删除文件夹
 * @param path
 */
async function deleteDirs(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteDirs(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

/**
 * copy文件夹及子文件夹
 * @param srcDir
 * @param tarDir
 * @param cb
 */
function copyFolder(srcDir, tarDir, cb) {
    fs.readdir(srcDir, function (err, files) {
        var count = 0
        var checkEnd = function () {
            ++count == files.length && cb && cb()
        }
        if (err) {
            checkEnd()
            return
        }
        files.forEach(function (file) {
            var srcPath = path.join(srcDir, file)
            var tarPath = path.join(tarDir, file)

            fs.stat(srcPath, function (err, stats) {
                if (stats.isDirectory()) {
                    fs.mkdir(tarPath, function (err) {
                        if (err) {
                            return
                        }
                        copyFolder(srcPath, tarPath, checkEnd)
                    })
                } else {
                    copyFile(srcPath, tarPath, checkEnd)
                }
            })
        })

        //为空时直接回调
        files.length === 0 && cb && cb()
    })
}

/**
 * 复制文件
 * @param srcPath
 * @param tarPath
 * @param cb
 */
function copyFile(srcPath, tarPath, cb) {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            // console.log('----------copy error!!', srcPath);
        }
        cb && cb(err)
    })

    var ws = fs.createWriteStream(tarPath)
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath);
        }
        cb && cb(err);
    })
    ws.on('close', function (ex) {
        cb && cb(ex);
    })
    rs.pipe(ws);
}

/**
 * 数组转obj
 */
function arrToObj(arr) {
    if (arr.length <= 0) return null;
    var i = 0;
    var str = null;
    var tempArr = null;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        str = arr[i];
        tempArr = str.split('=');
        obj[tempArr[0]] = tempArr[1];
    }
    return obj;
}