export default class LocalStorageUtil {
    /**
     * 读取cookie
     * @param key
     * @param isDomain 是否读取跨域cookie
     */
     static getCookie(key, isDomain = false) {
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
    static setCookie(key, value, exdays = -1, isDomain = false) {
        let cstr = key + "=" + value;
        // 时间
        if (exdays > 0) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
            const expires = "; expires=" + d.toUTCString();
            cstr = cstr + expires;
        }
        // 域名
        if (isDomain) {
            const domain = LocalStorageUtil.getDomain();
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
    static removeCookie(key,isDomain = false) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = LocalStorageUtil.getCookie(key);
        if (cval != null && cval != '') {
            let cstr = key + "=" + cval + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // 域名
            if (isDomain) {
                const domain = Util.getDomain();
                cstr = cstr + '; domain=' + domain;
            }
            cstr = cstr + '; path=/';
            document.cookie = cstr;
        }
    }

    /**
     * 获取dommain，格式示例：.bohe.com
     */
    static getDomain() {
        const hostname = window.location.hostname;
        const hostList = hostname.split('.');
        let domain = '';
        for(let i = 1;i < hostList.length;i++) {
            domain = domain + '.' +hostList[i];
        }
        return domain;
    }
}