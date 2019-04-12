import Vue from "vue";
import VueI18n from "vue-i18n";
import lang from "~/assets/i18n/language.json";
import meta from "~/assets/meta/meta.json";

/////////////////////////////////////////////////配置////
/**
 * 环境配置
 */
Vue.prototype.isDebug = false;
/**
 * 1开发环境 2测试 3生产 4预发布
 */
Vue.prototype.server_type = process.env.server_type;

/**
 * 服务器url
 */
Vue.prototype.getBaseUrl = function (region_code = 1) {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://kfapi.bohe.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://testapi.bohe.com:8013";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://webapi.bohe.com";
    } else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vfapi.bohe.com";
    } else {
        return '';
    }
}

/**
 *  图片服务器路径imgurl
 */
Vue.prototype.getImgBaseUrl = function() {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://kfpicture.bohe.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://picture-test.bohe.com:8014";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://hkpicture.bohe.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "http://vfpicture.bohe.com";
    } else {
        return '';
    }
}

/**
 *  官网路径
 */
Vue.prototype.getWebBaseUrl = function() {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://dev-www.bohe.com";
        // return 'http://localhost:8080'
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-www.bohe.com:8013";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://www.bohe.com";
    } else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vfwww.bohe.com";
    } else {
        return '';
    }
}

/**
 * 用户中心路径
 */
Vue.prototype.getUserBaseUrl = function() {
    if (Vue.prototype.server_type === 1) {
        return "http://dev-user.bohe.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-user.bohe.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://user.bohe.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "http://vf-user.bohe.com";
    } else {
        const origin = window.location.origin;
        return origin;
    }
}

/**
 * m路径
 */
Vue.prototype.getMobWebBaseUrl = function() {
    return 'https://m.bohe.com';
}

/////////////////////////////////////////////////END////

/**
 *
 */
Vue.use(VueI18n);

/**
 * @param app
 * @param store
 */
export default ({app, store}) => {
    //语言配置
    app.i18n = new VueI18n({
        locale: 'zh_CN',
        messages: lang
    });

    app.getBaseUrl = Vue.prototype.getBaseUrl();
    app.getWebBaseUrl = Vue.prototype.getWebBaseUrl();
    app.getImgBaseUrl = Vue.prototype.getImgBaseUrl();
};

//meta配置
Vue.prototype.metaConfig = meta;