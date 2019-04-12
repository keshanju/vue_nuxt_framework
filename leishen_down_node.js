//命令
// npm run generate;node leishen_node.js;sh leishen.sh;
//
var fs = require("fs");
var path = require("path");
var rd = require('rd');
var comNode = require('./com_node');
var config = require('./nuxt.config');
var project_onfig = require('./project.config');
var version = config.env.verson;

var root = path.join(__dirname);
var root_dir = root + '/' + 'www';
var project_dir = project_onfig.leishen_xiazai_dir;

var project_index = 'index.html'; //html目录
var project_js = '_nuxt'; // js目录
var project_njs = '_njs'; // njs目录
var project_img = 'img'; // njs目录
var project_images = 'images'; // njs目录
var project_game = 'game'; //game目录
var is_game = false; //是否是game目录

//
mkProjectFolderCn();

async function mkProjectFolderCn() {
    //新建目录
    await comNode.deleteDirs('./' + project_dir);
    await comNode.mkdirs(project_dir);
    await comNode.mkdirs(project_dir + '/' + project_js);
    await comNode.mkdirs(project_dir + '/' + project_njs);
    await comNode.mkdirs(project_dir + '/' + project_img);
    await comNode.mkdirs(project_dir + '/' + project_images);
    await comNode.mkdirs(project_dir + '/' + project_game);

    //copy 目录
    comNode.copyFolder(root_dir + '/' + project_js, project_dir + '/' + project_js, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_njs, project_dir + '/' + project_njs, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_img, project_dir + '/' + project_img, function () {
    });
    comNode.copyFolder(root_dir + '/' + project_images, project_dir + '/' + project_images, function () {
    });

    //移动目录
    readDirSync(root_dir);
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
                    readSync(path + "/" + ele, ele);
                }
            }
        })
}

/**
 * 移动目录
 */
async function readSync(path, ele) {
    if(ele.indexOf('game') != -1) {
        readGameSync(path,ele);
    }else {
        readOtherSync(path,ele);
    }
}

/**
 * game目录
 */
async function readGameSync(path, ele) {
    try {
        const pa = await fs.readdirSync(path);
        pa.forEach(
            function (ele, i) {
                let index = path + '/' + ele + '/' + project_index;
                let newName = path + '/' + ele + '/' + ele + '.html';
                let copyName = project_dir + '/' + project_game + '/' + ele + '.html';
                //
                fs.rename(index, newName, function (err) {
                    comNode.copyFile(newName, copyName, function () {
                        console.log('模板页面生成成功!' + copyName);
                    });
                });
            }
        );
    } catch (e) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~错误页面：' + path);
    }
}

/**
 * 普通目录
 */
function readOtherSync(path, ele) {
    try {
        console.log(path,ele);
        let index = path + '/' + project_index;
        let newName = index;
        var copyName = project_dir + '/' + project_index;
        //
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
 * 是否排除的目录
 */
function isExcludeDir(dir) {
    comNode.excludeDir.push('zt-id');
    for(var i = 0;i < comNode.excludeDir.length;i++) {
        if(dir == comNode.excludeDir[i]) {
            return true;
        }
    }

    return false;
}