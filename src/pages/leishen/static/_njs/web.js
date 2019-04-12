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
    var start_time = '2019/3/22 09:00:00';//首冲特惠开始时间(可修改)
    var end_time = '2019/3/31 23:59:59';//首冲特惠结束时间(可修改)
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
        document.getElementById('h_headImg').onerror=function () {
            $(this).attr('src','http://xiazai.leigod.com/images/default_avatar.png')
            this.onerror=null;
        }

    } else {
        isLogin = false;
        $(h_userNoLogin).removeClass('hide');
    }
    // 保持渠道信息
    var menuCount=9;
    var search=window.location.search
    $('#apexhreoId').attr('href',$('#apexhreoId').attr('href')+search)
    for(var iii=0;iii<=menuCount;iii++){
        var tempHref= $( $('.head_content a')[iii]).attr('href')
        console.log(tempHref)
        $( $('.head_content a')[iii]).attr('href',tempHref+search)
    }
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

    //新版本推广页
    if (window.location.pathname.indexOf("brandnew") != -1) {
        if (userInfo != null) {
            $('.br_goumai_btn').click(function () {
                window.location.href = user_url + '/user.html?page=1&region_code=' + region_code + '&language=' + language
            })
        } else {
            $('.br_goumai_btn').click(function () {
                window.location.href = user_url + '/login.html?region_code=' + region_code + '&language=' + language;
            })
        }
    }

    //随时暂停推广页
    if (window.location.pathname.indexOf("cancelPause") != -1) {
        window.onscroll = function () {
            pageScroll(720);
        };

        function pageScroll(h) {
            var scrT = scroll().top;
            if (scrT < h) {
                $('#kefu_weixin').removeClass('fixed_share');
            } else {
                $('#kefu_weixin').addClass('fixed_share');
            }
        }
    }
    //下载
    if ($('.winDownLink').length != 0) {
        $.get('/config.json', function (data) {
            var from = getUrlParam('from');
            if (from == '') from = 'guanwang';
            var downConfig = data.leigod.down_platform[from];
            var windowsDownloadUrl = downConfig.windows.download_url;
            var macDownloadUrl = downConfig.mac.download_url;
            $('.winDownLink').attr('href', windowsDownloadUrl);
        });
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
        var now_time = new Date(); //系统时间
        var nowDate = new Date(now_time).getTime();
        var endDate = new Date(end_time).getTime();
        var startDate = new Date(start_time).getTime();//首冲特惠开始时间(可做修改)
        if(nowDate > startDate && nowDate < endDate){
            if(search){
                $('.sc_show').attr('href',$('.sc_show').attr('href')+'&'+search.substr(1))
            }
            $('.sc_show').removeClass('hide');
        }else {
            if(search) {
                $('.sc_hide').attr('href', $('.sc_hide').attr('href') + '&' + search.substr(1))
            }
            $('.sc_hide').removeClass('hide');
        }
    }

    //套餐页
    if (window.location.pathname.indexOf("recharge") != -1) {
        var now_time = new Date();
        var nowDate = new Date(now_time).getTime();
        var endDate = new Date(end_time).getTime();
        var startDate = new Date(start_time).getTime();
        if(nowDate > startDate && nowDate < endDate){
            $('.sc_show').removeClass('hide');
            var payuser_num = getPayUserNum(start_time,now_time,15);//首冲特惠人数计算
            $('#payuser_num').text(payuser_num);
            setInterval(function(){
                var num = Math.round((Math.random()*90 + 30)/60);
                payuser_num += num;
                $('#payuser_num').text(payuser_num);
            },6000)
        }else {
            $('.sc_hide').removeClass('hide');
        }
    }

    //帮助中心
    if (window.location.pathname.indexOf("help") != -1) {
        //图片懒加载
        // var src = '';
        // $(".help_content_lazyload").find("img").each(function (index,img) {
        //     src = img.src;
        //     $(img).removeAttr('src');
        //     $(img).attr('data-original',src);
        //     $(img).lazyload();
        // });
        var tab = getUrlParam('tab');
        var g_tab = '';
        $(".help_tab").each(function () {
            g_tab = $(this).data('g_tab');
            $(this).addClass('hide');
            if (tab == g_tab) {
                $(this).removeClass('hide');
            }
        });
        $(".help_tab_li").each(function () {
            g_tab = $(this).index();
            if (tab == g_tab) {
                $(this).addClass('help_tab_li_active');
            }
        });
        //轮播图初始化
        var mySwiper = new Swiper('.swiper-container', {});
        $(help1).click(function () {
            $(helpDialog).removeClass('hidden');
            mySwiper.swipeTo(0);
        });
        $(help2).click(function () {
            $(helpDialog).removeClass('hidden');
            mySwiper.swipeTo(1);
        });
        $(questions).click(function () {
            $(helpDialog).removeClass('hidden');
            mySwiper.swipeTo(2);
        });
        $('#help_close').click(function () {
            $(helpDialog).addClass('hidden');
        });
        $('#prev').click(function () {
            mySwiper.swipePrev();
        });
        $('#next').click(function () {
            mySwiper.swipeNext();
        });

        var questionList = $('.question_li');
        var questionDetailList = $('.questiondetail_li');
        if (questionDetailList.length > 0) {
            $(questionDetailList[0]).removeClass('hide');
            $(questionList[0]).find('a').addClass('question_li_active');
        }
        for (var i = 0; i < questionList.length; i++) {
            $(questionList[i]).click(function () {
                for (var j = 0; j < questionDetailList.length; j++) {
                    $(questionDetailList[j]).addClass('hide');
                    $(questionList[j]).find('a').removeClass('question_li_active');
                }
                var index = $(this).attr('index');
                $(questionDetailList[index]).removeClass('hide');
                $(questionList[index]).find('a').addClass('question_li_active');
            })
        }

        window.onscroll = function () {
            pageScroll(770, 8);
        };

        function pageScroll(h, num) {
            var scrT = scroll().top;
            if (scrT < h) {
                $('#join_nav').removeClass('join_fix');
            } else {
                $('#join_nav').addClass('join_fix');
            }
            for (var i = 1; i < num; i++) {
                if (document.getElementById('b' + i).offsetTop - 250 < scrT) {
                    for (var j = 1; j < num; j++) {
                        $('#a' + j).removeClass('join_cur');
                    }
                    $('#a' + i).addClass('join_cur');
                }
            }
        }
    }

    //活动页
    if (window.location.pathname.indexOf("activity") != -1) {
        var tab = getUrlParam('tab');
        var g_tab = '';
        $(".activity_list").each(function () {
            g_tab = $(this).data('g_tab');
            if (tab == g_tab) {
                $(this).removeClass('hide');
            }
        });
        $(".activity_tab_li").each(function () {
            g_tab = $(this).index();
            if (tab == g_tab) {
                if (tab == 0) {
                    $(this).addClass('contact_zthd_active');
                } else if (tab == 1) {
                    $(this).addClass('contact_mzlhd_active');
                }
            }
        });
    }

    //newslist
    if (window.location.pathname.indexOf("newslist") != -1) {
        var label = getUrlParam('label');
        var g_label = '';
        $(".game_news").each(function () {
            g_label = $(this).data('g_label');
            if (label == g_label) {
                $(this).removeClass('hide');
            }
        });
        $(".game_li").each(function () {
            g_label = $(this).data('g_label');
            if (label == g_label) {
                $(this).addClass('game_li_hover');
            }
        });
        $('#change_lang_en').attr('href', gw_url + '/en/newslist.html?label=' + label);
        $('#change_lang_cn').attr('href', gw_url + '/newslist.html?label=' + label);
    }
    //下载详情游戏页面,可以找到下载的这个dom节点
    if ($("#user_game_download_btn").length > 0) {
        if (soft_url === '' || soft_url === undefined) {
            $('#user_game_download_btn').click(function () {
                $(this).children('a').attr('href', leigod_url)
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
    //down的下载页面
    if ($('#xiazaiLeigod_Index').length > 0) {
        $('.gamesite_list').each(function (index, item) {
            $(item).click(function () {
                $('.game_list_output').each(function (indexDiv, itemDiv) {
                    if (index == indexDiv) {
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
     * 获取当前首冲转化人数
     */
    function getPayUserNum(startTime, now_time, speed){
        var startDate = new Date(startTime);
        var startStep = startDate.getTime();
        var nowDate = new Date(now_time);
        var nowStep = nowDate.getTime();
        var step = nowStep - startStep;
        return Math.round(step*speed/60000);
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
