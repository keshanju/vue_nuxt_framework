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
        return "http://dev-api1.leigod.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-api2.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        if (region_code == 0) {
            return "https://webapi.leigod.com";
        } else {
            return "https://webapi.leigod.com";
        }
    } else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vf-webapi.leigod.com";
    } else {
        return '';
    }
}
Vue.prototype.downUrl=function() {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://dev-xiazai.leigod.com/";
        // return 'http://localhost:8080';
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-xiazai.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://xiazai.leigod.com/";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vf-xiazai.leigod.com/";
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
        return "http://dev-picture.leigod.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-picture.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://picture.leigod.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vf-picture.leigod.com";
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
        return "http://dev-www.leigod.com";
        // return 'http://localhost:8080';
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-www.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://www.leigod.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vf-www.leigod.com";
    } else {
        return '';
    }
}

/**
 * 用户中心路径
 */
Vue.prototype.getUserBaseUrl = function() {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://dev-user.leigod.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-user.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://user.leigod.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "https://vf-user.leigod.com";
    } else {
        const origin = window.location.origin;
        return origin;
    }
}

/**
 * json资源地址
 */
Vue.prototype.getStafUrl = function () {
    if (Vue.prototype.server_type === 1) {
        // 开发环境
        return "http://dev-api1.leigod.com";
    } else if (Vue.prototype.server_type === 2) {
        // 测试环境
        return "http://test-api2.leigod.com";
    } else if (Vue.prototype.server_type === 3) {
        // 生产环境
        return "https://staffapi.leigod.com";
    }else if (Vue.prototype.server_type === 4) {
        // 验证环境
        return "http://vf-staffapi.leigod.com";
    } else {
        return '';
    }
}

/**
 * m路径
 */
Vue.prototype.getMobWebBaseUrl = function() {
    return 'https://m.leigod.com';
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
    app.getStafUrl = Vue.prototype.getStafUrl();
};

//meta配置
Vue.prototype.metaConfig = meta;