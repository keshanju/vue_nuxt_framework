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
    var soft_url = $('#app').attr('down_url'); //游戏的下载链接
    var pageSize = $('#tabContainer').attr('data-pagesize'); //游戏的下载链接
    if (!region_code) region_code = 1;
    if (!language) language = 'zh_CN';
    var windowsDownloadUrl =''
    var macDownloadUrl =''
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
        document.getElementById('h_headImg').onerror=function () {
            $(this).attr('src','http://xiazai.leigod.com/images/default_avatar.png')
            this.onerror=null;
        }

    } else {
        isLogin = false;
        $(h_userNoLogin).removeClass('hide');
    }
    //切换语言
    $('.h_zh_cn_btn').click(function () {
        setCookie(COOKIE_LANGUAGE_TYPE, 'cn', -1, false);
    });
    $('.h_en_btn').click(function () {
        setCookie(COOKIE_LANGUAGE_TYPE, 'en', -1, false);
    });
    // 保持渠道信息
    var menuCount=9;
    var search=window.location.search
    for(var iii=0;iii<=menuCount;iii++){
        var tempHref= $( $('.head_content a')[iii]).attr('href')
        console.log(tempHref)
        $( $('.head_content a')[iii]).attr('href',tempHref+search)
    }
    /**
     * 在线客服
     */
    $('.weixin_focus').popover();
    $('.weibo_focus').popover();
    $('#wechat_ewm').popover();
    $('#weibo_ewm').popover();
    var kefu = document.querySelectorAll(".newmodal");
    for (var i = 0; i < kefu.length; i++) {
        kefu[i].onclick = function () {
            getWebchat('2FAepT', '在线客服');
        };
    }

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
        if(window.location.pathname.indexOf("apexhero") != -1) {
            window.location.href = m_url + '/apexhero.html';
        }else {
            window.location.href = m_url;
        }
    }
    //下载
    if ($('.winDownLink').length != 0) {
        $.get('/config.json', function (data) {
            var from = getUrlParam('from');
            if (from == '') from = 'guanwang';
            var downConfig = data.leigod.down_platform[from];
            windowsDownloadUrl = downConfig.windows.download_url;
            macDownloadUrl = downConfig.mac.download_url;
            $('.winDownLinks').attr('href', windowsDownloadUrl)
        });
    }

    //下载详情游戏页面,可以找到下载的这个dom节点
    if ($("#user_game_download_btn").length > 0) {
        if (soft_url === '' || soft_url === undefined) {
            $('#user_game_download_btn').click(function () {
                $(this).children('a').attr('href', windowsDownloadUrl)
            })
        } else {
            if (userInfo != null && userInfo != '') {
                //如果已经登陆
                $('#user_game_download_btn').click(function () {
                    $(this).children('a').attr('href', soft_url)
                })
            } else {
                $('#user_game_download_btn').click(function () {
                    if (userInfo != null && userInfo != '') {
                        //如果已经登陆
                        $(this).children('a').attr('href', soft_url)
                    }else{
                        $('#user_need_login').show();
                        $('#close_tip_dialog').click(function () {
                            $('#user_need_login').hide();
                        })
                    }
                })
                $('#confirmLogin').click(function () {
                    $('#user_need_login').hide();
                    var tempHref= window.location.origin+window.location.pathname.replace('.html','');
                    window.location.href = user_url + '/login.html?page=1&region_code=' + region_code + '&language=' + language+'&to='+tempHref; // 后更改页面地址
                })
            }
        }
    }
    // 下载页的主界面
    if ($('#xiazaiLeigod_Index').length > 0) {
        var tabProgramClick=true;
        $('.gamesite_list').each(function (index, item) {
            $(item).click(function () {
                $('.game_list_output').each(function (indexDiv, itemDiv) {
                    if (index == indexDiv) {
                        setCookie('tab',index,1,true);
                        if(tabProgramClick){
                            //如果不是程序触发了点击事件
                            var href=window.location.href;
                            var protocol=window.location.protocol
                            var host=window.location.host
						    if(href!=protocol+'//'+host&&href!=protocol+'//'+host+'/'&&href!=protocol+'//'+host+'/index.html'){
                                window.location.href=protocol+'//'+host+'/index.html'
                            }
                        }
                        // IE下的分页的兼容处理
                        var page= Math.ceil($($('.gamesite_list')[index]).attr('data-length')/pageSize)
                        if(page==0){
                            $('.pagination').hide()
                        }else{
                            $('.pagination').show()
                            if(page==1){
                                $($('.pagination ul').children('li:last-child').children('a')).attr({href:"javascript:;"})
                                $($('.pagination ul').children('li:last-child')).addClass('disabled')
                            }else{
                                $($('.pagination ul').children('li:last-child').children('a')).attr({href:(page+'.html')})
                                $($('.pagination ul').children('li:last-child')).removeClass('disabled')
                            }
                            for(var zz=$('.pagination .mycustompage').length;zz>0;zz--){
                                if(zz>page){
                                    $($('.pagination .mycustompage')[zz-1]).hide()
                                }else{
                                    $($('.pagination .mycustompage')[zz-1]).show()
                                }
                            }
                        }
                        setTimeout(function(){
                            tabProgramClick=true
                        },500)
                        $(itemDiv).show()
                    } else {
                        $(itemDiv).hide()
                    }
                })
                $('.gamesite_list').each(function (indexSapn, itemSapn) {
                    $(itemSapn).removeClass('web_public_btn')
                })
                $(this).addClass('web_public_btn')
            })
        })
        if(getCookie('tab')){
            var tab=Number(getCookie('tab'))
             if(!$($('.gamesite_list')[tab]).hasClass('web_public_btn')){
                tabProgramClick=false
               $($('.gamesite_list')[tab]).trigger('click')
            }
        }
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
        userInfo.nickname=userInfo.nickname||userInfo.mobile||userInfo.email
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

    /**
     * 判断是否移动版
     * @param jumpUrl 跳转地址 ==''不跳转
     */
    // function checkMobile(jumpUrl = '') {
    //     var sUserAgent = navigator.userAgent.toLowerCase();
    //     var is_mobile = false;
    //     if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
    //         is_mobile = true;
    //         if(jumpUrl != '') window.location.href = jumpUrl;
    //     }
    //
    //     return is_mobile;
    // }

    ////////////////////////公共代码 END/////////////////////
}