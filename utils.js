
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

/**
 * 打包公告列表
 */
function buildNotice(a_routes) {
    console.log('~~~~~~~~~~~~~打包公告列表~~~~~~~~~~~~~~~');
    let list = [];
    a_routes.forEach(function (value, i) {
        if (value.indexOf('/notify/') != -1 || value.indexOf('/index/') != -1) {
            list.push(value);
        }
    });

    return list;
}

/**
 * 打包活动列表
 */
function buildActvity(a_routes) {
    console.log('~~~~~~~~~~~~~打包活动列表~~~~~~~~~~~~~~~');
    let list = [];
    a_routes.forEach(function (value, i) {
        if (value.indexOf('/activity/') != -1) {
            list.push(value);
        }
    });

    return list;
}

/**
 * 专题
 * @param a_routes
 */
function buildZhuanti(a_routes) {
    if (npmParam == null) throw new Error('打包专题参数错误!');
    if (!npmParam.hasOwnProperty('id')) throw new Error('打包专题无id参数错误!');
    if (!npmParam.hasOwnProperty('name')) throw new Error('打包专题无name参数错误!');
    var id = npmParam.id;
    var name = npmParam.name;
    console.log('~~~~~~~~~~~~~打包专题' + '【id=' + id + '】【name=' + name + '】~~~~~~~~~~~~~~~');
    let list = [];
    var r1 = '/zt-id/1';
    list.push(r1);

    return list;
}

/**
 * 打包下载
 * npm run lsdown id=1 page=10
 */
function buildDown(a_routes) {
    let list = [];
    if(npmParam != null && npmParam.hasOwnProperty('id')) {
        //基于id生成
        var id = npmParam.id;
        list.push('/game/' + id);
        console.log('~~~~~~~~~~~~~通过ID打包雷神下载页面 id=' + id + '~~~~~~~~~~~~~~~');
    }else {
        var page = 40;
        if (npmParam != null && npmParam.hasOwnProperty('page')) page = npmParam.page;
        for (let range = 1; range <= page; range++) {
            list.push('/game/' + range);
        }
        for (let range = 1; range <= 5; range++) {
            if(range!=1){
                list.push('/'+range);
            }
        }
        console.log('~~~~~~~~~~~~~打包雷神下载所有页面 page=' + page + '~~~~~~~~~~~~~~~');
    }
    return list;
}
//参数 npm run lsnotice id=10 name=100
var npmParam = null;
console.log(process.env.npm_config_argv)
if (process.env.npm_config_argv != null) {
    var npmParam = JSON.parse(process.env.npm_config_argv).remain;
    npmParam = arrToObj(npmParam);
    console.log('参数:' + JSON.stringify(npmParam));
}
module.exports={
    arrToObj,
    buildNotice,
    buildActvity,
    buildZhuanti,
    buildDown
}