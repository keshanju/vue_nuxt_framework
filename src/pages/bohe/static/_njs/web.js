window.onload = function () {
    //cookie
    var STORAGES_USER_INFO = 'user_info';
    var STORAGES_USER_TOKEN = 'account_token';
    var COOKIE_LANGUAGE_TYPE = 'user_lang'; //语言

    //公共参数
    var m_url = $('#app').attr('m_url'); //m站地址
    var gw_url = $('#app').attr('gw_url'); //官网地址
    var user_url = $('#app').attr('user_url'); //user站地址
    var region_code = $('#app').attr('region_code'); //region_code
    var language = $('#app').attr('language'); //语言
    var leigod_url = $('#app').attr('leigod_url'); //雷神客户端下载链接
    var soft_url = $('#app').attr('down_url'); //游戏的下载链接
    if (!region_code) region_code = 1;
    if (!language) language = 'zh_CN';

    //////////Head/////////////
    // setTestUserInfo();
    var isLogin = true;
    var userInfo = null;
    var h_userNoLogin = "#h_userNoLogin";
    var h_userLogin = "#h_userLogin";
    var h_userName = "#h_userName";
    var h_headImg = "#h_headImg";
    var exitLoginBtn = "#exitLoginBtn";
    var helpDialog = "#help_dialog";
    var help1 = "#help_1";
    var help2 = "#help_2";
    var questions = "#questions";

    var userInfo = getUserInfo();
    //设置头像
    if (userInfo != null && userInfo != '') {
        isLogin = true;
        $(h_userLogin).removeClass('hide');
        $(h_userName).text(userInfo.nickname);
        $(h_headImg).attr("src", userInfo.avatar);
    } else {
        isLogin = false;
        $(h_userNoLogin).removeClass('hide');
    }
    //底部的下载andriod和IOS
    $('#footerDownAndroid').popover();
    $('#footerDownIos').popover();
    //切换语言
    $('.h_zh_cn_btn').click(function () {
        setCookie(COOKIE_LANGUAGE_TYPE, 'cn', -1, false);
    });
    $('.h_en_btn').click(function () {
        setCookie(COOKIE_LANGUAGE_TYPE, 'en', -1, false);
    });

    /**
     * 在线客服
     */
    $('.weixin_focus').popover();
    $('.weibo_focus').popover();
    $('#wechat_ewm').popover();
    $('#weibo_ewm').popover();

    //图片懒加载
    if ($("img.lazyload") != null) {
        setTimeout(function () {
            $("img.lazyload").lazyload();
            $(window).scrollTop(1);
        }, 100)
    }

    //是否登录跳转
    if (userInfo != null) {
        $('.go_recharge').click(function () {
            window.location.href = user_url + '/user.html?page=1&region_code=' + region_code + '&language=' + language;
        })
    } else {
        $('.go_recharge').click(function () {
            window.location.href = 'https://www.leigod.com/recharge.html';
        })
    }

    //判断是否手机端登录
    var sUserAgent = navigator.userAgent.toLowerCase();
    if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
        window.location.href = m_url;
    }

    //首页
    if (window.location.pathname.indexOf("index") != -1
        || window.location.pathname == '/' || window.location.pathname == '/en/'
        || window.location.pathname == '/intl/' || window.location.pathname == '/intl/en/'
        || window.location.pathname == '/0/' || window.location.pathname == '/0/en/') {
        $('.carousel').carousel();
        $('.mac_down').tooltip();
        $('.ios_down').popover();
        $('.android_down').popover();
        $('#sd_cancel_icon').click(function () {
            $('#sd_activity_box').addClass('hide');
        });
    }

    //帮助中心
    if (window.location.pathname.indexOf("recharge") != -1) {
        var questionList = $('.li_com_s3');
        var questionDetailList = $('.ul_com_s4');
        $('.li_com_s3').each(function (index, item) {
            $(item).click(function () {
                $('.ul_com_s4').each(function (indexDiv, itemDiv) {
                    if (index == indexDiv) {
                        $(itemDiv).show()
                    } else {
                        $(itemDiv).hide()
                    }
                })
                $('.li_com_s3').each(function (indexSapn, itemSapn) {
                    $(itemSapn).removeClass('lis_active_s1')
                })
                $(this).addClass('lis_active_s1')
            })
        })
        $('.font_s15').click(function () {
            if (userInfo != null && userInfo != '') {
                //如果用户已经登陆
                window.location.href = user_url + '/user.html' + window.location.search
            } else {
                window.location.href = user_url + '/login.html' + window.location.search
            }
        })
    }
    //首页
    if (window.location.pathname.indexOf("activity") != -1) {
        $('.ios_down').popover();
        $('.android_down').popover();
    }
    if (window.location.pathname.indexOf("news") != -1) {
        $('.weChartShare').popover();
    }
    //退出登录
    $(exitLoginBtn).click(function () {
        removeCookie(STORAGES_USER_INFO, true);
        removeCookie(STORAGES_USER_TOKEN, true);
        localStorage.removeItem(STORAGES_USER_INFO);
        location.reload();
    });

    /**
     * 测试数据
     */
    function setTestUserInfo() {
        userInfo = {};
        userInfo.avatar = 'https://picture.leigod.com/uploads/bohe/2018-12-25/leigod1545697684520416.jpeg';
        userInfo.nickname = 'oliwen';
        var str = JSON.stringify(userInfo);
        setCookie(STORAGES_USER_INFO, str, 2, false);
    }

    //切换语言
    //////////Head END/////////////

    /**
     * 从cookie获取用户信息
     */
    function getUserInfo() {
        var userInfoStr = getCookie(STORAGES_USER_INFO);
        if (userInfoStr == '') return null;
        var userInfo = JSON.parse(userInfoStr);
        return userInfo;
    }

    ////////////////////////公共代码/////////////////////
    /**
     * 读取cookie
     * @param key
     * @param isDomain 是否读取跨域cookie
     */
    function getCookie(key, isDomain) {
        var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
        return '';
    }

    /**
     * 设置cookie
     * @param key
     * @param cvalue
     * @param value 单位小时
     * @param isDomain 是否设置domain，解决跨域访问
     */
    function setCookie(key, value, exdays, isDomain) {
        var cstr = key + "=" + value;
        // 时间
        if (exdays > 0) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
            var expires = "; expires=" + d.toUTCString();
            cstr = cstr + expires;
        }
        // 域名
        if (isDomain) {
            var domain = getDomain();
            // ProjectConfig.log('cookie设置的域名:' + domain);
            cstr = cstr + '; domain=' + domain;
        }
        //path
        cstr = cstr + '; path=/';
        document.cookie = cstr;
    }

    /**
     * 删除cookie
     * @param name
     */
    function removeCookie(key, isDomain) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(key);
        if (cval != null && cval != '') {
            var cstr = key + "=" + '' + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // 域名
            if (isDomain) {
                var domain = getDomain();
                cstr = cstr + '; domain=' + domain;
            }
            cstr = cstr + '; path=/';
            document.cookie = cstr;
        }
    }

    /**
     * 获取dommain，格式示例：.bohe.com
     */
    function getDomain() {
        var hostname = window.location.hostname;
        var hostList = hostname.split('.');
        var domain = '';
        for (var i = 1; i < hostList.length; i++) {
            domain = domain + '.' + hostList[i];
        }
        return domain;
    }

    /**
     * 获取滚动的高度和宽度
     * 用法 scroll().top  获取滚动高度
     * 用法 scroll().left  获取滚动宽度
     */
    function scroll() {
        if (window.pageYOffset !== undefined) {
            return {
                top: window.pageYOffset,
                left: window.pageXOffset
            }
        } else if (document.compatMode === "CSS1Compat") { //符合W3C标准
            return {
                top: document.documentElement.scrollTop,
                left: document.documentElement.scrollLeft
            }
        } else {
            return {
                top: document.body.scrollTop,
                left: document.body.scrollLeft
            }
        }
    }

    /**
     * 读取地址栏参数
     * @param name
     */
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return '';
    }
    function uchart() {
        var WEBCHAT_BASE_URL = document.location.protocol + "//uchat.im-cc.com/webchat_new/static/";
        var WEBCHAT_PC_URL = WEBCHAT_BASE_URL + "google/index.html";
        var WEBCHAT_IE_URL = WEBCHAT_BASE_URL + "ie8/index.html";
        var WEBCHAT_MOBILE_URL = WEBCHAT_BASE_URL + "moblie/index.html";
        var WEBCHAT_WX_URL = WEBCHAT_BASE_URL + "wx/index.html";
        var modObj = {
            imnumber: '6712',
            hastab: true,
            isstatic: false,
            openid: 0,
            box: true
        }
        var relUrl = '';
        var referrer = '';
        try {
            referrer = window.top.document.referrer
        } catch (e) {
            referrer = ''
        }
        if (referrer === '') {
            relUrl = referrer
        } else {
            var arrUrl = referrer.split('//')
            var start = arrUrl[1].indexOf('/')
            relUrl = arrUrl[1].substring(0, start)
        }
        var win_w = 600;
        var win_h = 450;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var ua = window.navigator.userAgent.toLowerCase();
            // @ts-ignore
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                var url = WEBCHAT_WX_URL;
            } else {
                url = WEBCHAT_MOBILE_URL;
            }
            url += "?ht=" + modObj.imnumber;
            if (modObj.openid && modObj.openid !== '0') {
                url += "&openid=" + modObj.openid;
            }
            if (modObj.params) {
                url += "&params=" + modObj.params;
            }
            url += "&timestamp=" + new Date().getTime();
            url += "&relUrl=" + relUrl;
            window.location.href = url;
        } else {
            if (!modObj.box) {
                var mydiv = document.createElement('div');
                mydiv.style.display = "none";
                mydiv.style.width = "600px";
                mydiv.style.height = "450px";
                mydiv.style.overflow = "hidden";
                mydiv.style.margin = "1% auto";
                mydiv.id = "adaptation";
                var iframe = document.createElement('iframe');
                iframe.src = "";
                iframe.id = "mainiframe";
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.frameBorder = '0';
                mydiv.appendChild(iframe);
                document.body.appendChild(mydiv)
            }
            var url = WEBCHAT_PC_URL;
            if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") || navigator.userAgent.indexOf("Firefox") > 0) {
                url = WEBCHAT_IE_URL;
            }
            url += "?ht=" + modObj.imnumber;
            if (modObj.openid && modObj.openid !== '0') {
                url += "&openid=" + modObj.openid;
            }
            if (modObj.hastab) {
                if (!modObj.box) {
                    document.getElementById("adaptation").style.width = '900px';
                    document.getElementById("adaptation").style.height = '600px';
                }
                win_w = 900;
                win_h = 600;
                url += "&hastab=" + modObj.hastab;
            }
            if (this.params) {
                url += "&params=" + modObj.params;
            }
            url += "&timestamp=" + new Date().getTime();
            url += "&relUrl=" + relUrl;
            if (modObj.isstatic && modObj.isstatic == "true") {
                window.location.href = url;
            } else if (modObj.box) {
                var params_str = "height=" + win_h + ",width=" + win_w + ",toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,top=50,left=200";
                window.open(url, '_blank', params_str)
            } else {
                // @ts-ignore
                document.getElementById("mainiframe").src = url;
            }
        }

    }
    var kefu = document.querySelectorAll(".public_btn");
    for (var i = 0; i < kefu.length; i++) {
        kefu[i].onclick = uchart
    }
    ////////////////////////公共代码 END/////////////////////
}