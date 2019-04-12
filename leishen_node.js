//命令
// npm run generate;node leishen_node.js;sh leishen.sh;
//
var fs = require("fs");
var path = require("path");
var rd = require('rd');
var comNode = require('./com_node');

var root = path.join(__dirname);
var root_dir = root + '/' + 'www';
var project_dir = 'www_leishen';
var project_dir_0 = '0';
var project_dir_1 = '1';
var project_dir_cn = 'cn';
var project_zh_lang = 'zh_CN'; //默认目录
var project_dir_en = 'en';

var project_index = 'index.html'; //html目录
var project_js = '_nuxt'; // js目录
var project_njs = '_njs'; // njs目录
var project_img = 'img'; // njs目录
var project_images = 'images'; // njs目录

console.log('######nodeJs 编译参数######');
var s_param = process.env.npm_lifecycle_event; //编译传递的参数
var npmParam = null;
if(process.env.npm_config_argv != null) {
    npmParam = JSON.parse(process.env.npm_config_argv).remain;
    npmParam = comNode.arrToObj(npmParam);
}
console.log(s_param);
console.log(npmParam);
console.log('######nodeJs 编译参数######END');

/**
 *
 */
mkProjectFolderCn();

/*****************************雷神****************************/

/*****************************雷神****************************/
/**
 * 创建项目目录 默认中文
 * @returns {Promise<void>}
 */
async function mkProjectFolderCn() {
    await comNode.deleteDirs('./' + project_dir);
    await comNode.mkdirs(project_dir);
    await comNode.mkdirs(project_dir + '/' + project_js);
    await comNode.mkdirs(project_dir + '/' + project_njs);
    await comNode.mkdirs(project_dir + '/' + project_img);
    await comNode.mkdirs(project_dir + '/' + project_images);
    await comNode.mkdirs(project_dir + '/' + project_dir_0);
    await comNode.mkdirs(project_dir + '/' + project_dir_en);
    await comNode.mkdirs(project_dir + '/' + project_dir_0 + '/' + project_dir_en);
    //
    await readDirSync(root_dir);
    //copy 目录
    comNode.copyFolder(root_dir + '/' + project_js, project_dir + '/' + project_js, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_njs, project_dir + '/' + project_njs, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_img, project_dir + '/' + project_img, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_images, project_dir + '/' + project_images, function () {
    });
}

/**
 * 遍历目录
 * @param path
 */
async function readDirSync(path) {
    const pa = await fs.readdirSync(path);
    pa.forEach(
        function (ele, index) {
            const info = fs.statSync(path + "/" + ele)
            if (info.isDirectory()) {
                if (!isExcludeDir(ele)) {
                    fs.statSync(path + "/" + ele);
                    //1 cn目录
                    readCnSync(path + "/" + ele + '/' + project_dir_1, ele, true);
                    //1 en目录
                    readEnSync(path + "/" + ele + '/' + project_dir_1, ele, true);
                    //0 cn目录
                    readCnSync(path + "/" + ele + '/' + project_dir_0, ele, false);
                    //0 en目录
                    readEnSync(path + "/" + ele + '/' + project_dir_0, ele, false);
                }
            }
        })
}

/**
 * cn目录
 */
function readCnSync(path, ele, isDefault) {
    try {
        ///////////////////////cn目录移动到根目录
        let zeroPaty = path + "/" + project_zh_lang + '/1';
        //检测目录是否存在
        const is_zero = fs.existsSync(zeroPaty);
        if (is_zero) {
            //复制目录
            let t_path = '';
            if (isDefault) {
                t_path = project_dir + '/';
            } else {
                t_path = project_dir + '/' + project_dir_0 + '/';
            }
            copyListDirs(ele, path + "/" + project_zh_lang, t_path);
            return;
        }
        let index = path + "/" + project_zh_lang + '/' + project_index;
        let newName = path + "/" + project_zh_lang + '/' + ele + '.html';
        let copyName = '';
        if (isDefault) {
            copyName = project_dir + '/' + ele + '.html';
        } else {
            copyName = project_dir + '/' + project_dir_0 + '/' + ele + '.html';
        }
        fs.rename(index, newName, function (err) {
            comNode.copyFile(newName, copyName, function () {
                console.log('模板页面生成成功!' + copyName);
            });
        });
    } catch (e) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~错误页面：' + path);
    }
}

/**
 * en目录
 */
function readEnSync(path, ele, isDefault) {
    try {
        let zeroPaty = path + "/" + project_dir_en + '/1';
        const is_zero = fs.existsSync(zeroPaty);
        if (is_zero) {
            //复制目录
            let t_path = '';
            if (isDefault) {
                t_path = project_dir + '/' + project_dir_en + '/';
            } else {
                t_path = project_dir + '/' + project_dir_0 + '/' + project_dir_en + '/';
            }
            copyListDirs(ele, path + "/" + project_dir_en, t_path);
            return;
        }
        //en目录
        let index = path + "/" + project_dir_en + '/' + project_index;
        let newName = path + "/" + project_dir_en + '/' + ele + '.html';
        let copyName = '';
        if (isDefault) {
            copyName = project_dir + '/' + project_dir_en + '/' + ele + '.html';
        } else {
            copyName = project_dir + '/' + project_dir_0 + '/' + project_dir_en + '/' + ele + '.html';
        }
        fs.rename(index, newName, function (err) {
            comNode.copyFile(newName, copyName, function () {
                console.log('模板页面生成成功!' + copyName);
            });
        });
    } catch (e) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~错误页面：' + path);
    }
}

/**
 * copy 翻页目录
 */
async function copyListDirs(dname, path, copyPath) {
    const pa = await fs.readdirSync(path);
    pa.forEach(
        function (ele, index) {
            let index_path = '';
            let newName = '';
            let copy_path = '';
            let copy_to_path = '';
            //
            index_path = path + '/' + ele + '/' + project_index;
            newName = '';
            if (ele == 1) {
                newName = dname;
            } else {
                newName = dname + ele;
            }
            copy_path = path + '/' + ele + '/' + newName + '.html';
            copy_to_path = copyPath + '/' + newName + '.html';
            // console.log(index_path);
            // console.log(copy_path);
            // console.log(copy_to_path);
            fs.rename(index_path, copy_path, function (err) {
                comNode.copyFile(copy_path, copy_to_path, function () {
                    console.log('模板页面生成成功!' + copy_to_path);
                });
            });
        }
    );
}

/*****************************雷神****************************/

/*****************************雷神****************************/
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
 * 是否排除的目录
 */
function isExcludeDir(dir) {
    comNode.excludeDir.push('zt-id');
    comNode.excludeDir.push('game-id');
    for(var i = 0;i < comNode.excludeDir.length;i++) {
        if(dir == comNode.excludeDir[i]) {
            return true;
        }
    }
    if(dir.indexOf('down') != -1 || dir.indexOf('game-') != -1) {
        return true;
    }
    return false;
}