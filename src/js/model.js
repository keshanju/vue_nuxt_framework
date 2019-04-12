/**
 * 活动列表
 * @param project 0 薄荷 1雷神
 */
export class ActivityModel {
    project = 0;
    type = 1;
    size = 5;
    plat_type = 1;
    page = 1;
    region_code = 1;
    lang = 'zh_CN';
}

/**
 * 活动图片
 */
export class ActivityPicModel {
    project = 0; //0 薄荷 1雷神
    activity_id = '';
    plat_type = 1;
    region_code = 1;
    lang = 'zh_CN';
}

/**
 * 活动列表请求参数
 */
export class ActivityRequestModel {
    project = 0; //0 薄荷 1雷神
    type = 0; //活动类型 1专题活动 2公从号活动 3活动中奖名单 4手机APP活动 5seo问答  6seo新闻 7推荐注册活动   8推荐购买活动
    size = 0; //页面显示条数
    plat_type = 0; //平台类型  0,//所有类型   1,//pc官网   2,//移动端  3,//windows客户端
    page = 1; //当前页
    region_code = 1;
}

/**
 * 新闻资讯
 */
export class NewsModel {

    static NEWS_CHINA = '国服';//国服资讯
    static NEWS_MOBIL = '手游';//手游资讯
    static NEWS_LAST = '最新';//最新资讯 切换到json，会废弃
    static NEWS_HOT = '热点';//热门资讯
    static NEWS_TUIJIAN = '推荐';//最新推荐

    project = 0; //0 薄荷 1雷神
    page = 0;
    size = 5;
    support_type = 1; //0all   1pc官网   2移动端  3windows客户端
    class_type = 0; //0 公告  1帮助  2资讯
    region_code = 0;
    label = ""; //资讯类型
}

export class downGameModel {
    page = 1;
    size = 9; //每页多少条数据
    label = 0; //平台类型：0全部 1 steam  2：origion 3:Ulay
    key_word = ''; //关键字
    region_code = 1;
    lang = 'zh_CN';
}

/**
 * 公告详情请求参数
 */
export class NoticeDetailRequestModel {
    id = 0;
    class_type = 0;
    support_type = 0;
}

/**
 * 资讯列表请求参数
 */
export class NewRequestModel {
    page = 0;
    size = 5;
    support_type = 0; //0,//all   1,//pc官网   2,//移动端  3,//windows客户端
    class_type = 0; //0 公告  1帮助  2资讯
    region_code;
    label = ""; //资讯类型
}

/**
 * 活动列表请求参数
 */
export class BoheAtivityModel {
    type = '1'; //活动类型 1专题活动 2公从号活动 3活动中奖名单 4手机APP活动 5seo问答  6seo新闻 7推荐注册活动   8推荐购买活动 10周五活动
    size = 0; //页面显示条数
    plat_type = 0; //平台类型  0,//所有类型   1,//pc官网   2,//移动端  3,//windows客户端
    page = 1; //当前页
    region_code;
}

/**
 * 活动详情请求参数
 */
export class ActivityDetailRequestModel {
    type = 0;
    plat_type = 0;
    account_token;
    id = 0;
    region_code;
}

export class UchatUtil {
    // var WEBCHAT_BASE_URL = "http://uchat.im-cc.com/webchat_new/static/";
    WEBCHAT_BASE_URL = document.location.protocol + "//uchat.im-cc.com/webchat_new/static/";
    WEBCHAT_PC_URL = '';
    WEBCHAT_IE_URL = '';
    WEBCHAT_MOBILE_URL = '';
    WEBCHAT_WX_URL = '';

    imnumber;
    isstatic;
    hastab;
    openid;
    params;
    box;

    constructor() {
        this.WEBCHAT_PC_URL = this.WEBCHAT_BASE_URL + "google/index.html";
        this.WEBCHAT_IE_URL = this.WEBCHAT_BASE_URL + "ie8/index.html";
        this.WEBCHAT_MOBILE_URL = this.WEBCHAT_BASE_URL + "moblie/index.html";
        this.WEBCHAT_WX_URL = this.WEBCHAT_BASE_URL + "wx/index.html";
    }

    pop(mod) {
        this.imnumber = mod.imnumber;
        this.isstatic = mod.isstatic;
        this.hastab = mod.hastab;
        this.openid = mod.openid;
        this.params = mod.params;
        this.box = mod.box;
    }

    getReferrer() {
        var relUrl = ''
        var referrer = ''
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
        return relUrl
    }

    show() {
        document.getElementById("adaptation").style.display = "block";
    }

    ready(callback) {
        var sourceURL = this.getReferrer()
        var win_w = 600;
        var win_h = 450;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var ua = window.navigator.userAgent.toLowerCase();
            // @ts-ignore
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                var url = this.WEBCHAT_WX_URL;
            } else {
                url = this.WEBCHAT_MOBILE_URL;
            }
            url += "?ht=" + this.imnumber;
            if (this.openid && this.openid !== '0') {
                url += "&openid=" + this.openid;
            }
            if (this.params) {
                url += "&params=" + this.params;
            }
            url += "&timestamp=" + new Date().getTime();
            url += "&sourceURL=" + sourceURL;
            window.location.href = url;
        } else {
            if (!this.box) {
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
            var url = this.WEBCHAT_PC_URL;
            if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") || navigator.userAgent.indexOf("Firefox") > 0) {
                url = this.WEBCHAT_IE_URL;
            }
            url += "?ht=" + this.imnumber;
            if (this.openid && this.openid !== '0') {
                url += "&openid=" + this.openid;
            }
            if (this.hastab) {
                if (!this.box) {
                    document.getElementById("adaptation").style.width = '900px';
                    document.getElementById("adaptation").style.height = '600px';
                }
                win_w = 900;
                win_h = 600;
                url += "&hastab=" + this.hastab;
            }
            if (this.params) {
                url += "&params=" + this.params;
            }
            url += "&timestamp=" + new Date().getTime();
            url += "&sourceURL=" + sourceURL;
            if (this.isstatic && this.isstatic == "true") {
                window.location.href = url;
            } else if (this.box) {
                var params_str = "height=" + win_h + ",width=" + win_w + ",toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,top=50,left=200";
                window.open(url, '_blank', params_str)
            } else {
                // @ts-ignore
                document.getElementById("mainiframe").src = url;
            }
        }
        if (callback != null) callback(this);
    }

    /**
     * 打开网页聊天
     */
    openWeb(isOpen = false) {
        let sourceURL = this.getReferrer()
        let url = this.WEBCHAT_PC_URL;
        url += "?ht=" + this.imnumber;
        url += "&openid=" + this.openid;
        url += "&timestamp=" + new Date().getTime();
        if (this.openid && this.openid !== '0') {
            url += "&openid=" + this.openid;
        }
        if (this.params) {
            url += "&params=" + this.params;
        }
        url += "&sourceURL=" + sourceURL;
        if (isOpen) {
            window.open(url);
        }
        return url;
    }
}

/**
 * @param imnumber
 * @param hastab true=存在右侧标签页,不存在则没有该参数
 * @param isstatic true=弹出框不可隐藏,false弹出框可隐藏
 * @param openid 访问者唯一标识(可选参数，默认为0或者为空)
 * @param params 自定义参数, JSON字符串格式UTF8编码经base64转码
 * @param box true为弹窗，false为不弹窗
 */
export class UchatModels {
    imnumber = '0';
    hastab = true;
    isstatic = false;
    openid = '0';
    params = '';
    box = true;
}