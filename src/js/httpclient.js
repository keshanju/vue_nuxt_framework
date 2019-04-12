import axios from 'axios';

/**
 * 错误码
 */
const HTTP_ERROR_NEW_CODE = -50000; // 网络错误

export default class HttpClient {

    /**
     * 请求地址
     */
    static URL_ACTIVITY_PICTURE_LIST = "/api/activity/picture/list"; //获取活动图片列表
    static URL_ACTIVITY_LIST = "/api/activity"; //获取活动列表
    static URL_ACTIVITY_DETAIL = "/api/activity/"; //获取活动详情+id
    static URL_NEWS = "/api/news"; //资讯
    static CONFIG_JSON = "/config.json" + "?t=" + new Date().valueOf();
    static URL_NEWS_DETAIL = "/api/news/";//帮助详情
    static URL_TOOL_SYSTEM_TIME = '/tools/system_time';

    static PROJECT_BOHE = 0; //薄荷
    static PROJECT_LEIGOD = 1; //雷神

    /**
     * get请求
     * @param url
     * @param params
     * @returns {Promise<*>}
     */
    async get(url, params) {
        params["lang"] = 'zh_CN';
        params = {params};

        try {
            let backData = await axios.get(url, params);

            return backData.data;
        } catch (e) {
            let errorData = {};
            errorData.code = HTTP_ERROR_NEW_CODE;
            errorData.msg = "网络错误!";
            errorData.data = {};
            errorData.data.list = [];

            return errorData;
        }
    }

    /**
     * post
     * @param url
     * @param params
     */
    async post(url, params) {
        params["lang"] = 'zh_CN';
        try {
            let backData = await axios.post(url, params);

            return backData.data;
        } catch (e) {
            let errorData = {};
            errorData.code = HTTP_ERROR_NEW_CODE;
            errorData.msg = "网络错误!";
            errorData.data = {};
            errorData.data.list = [];

            return errorData;
        }
    }

    /**
     * 读取配置文件
     */
    async getConfig(url) {
        const configJson = await this.get(url,{});
        return configJson;
    }

    /**
     * 游戏资讯
     */
    async getGameList(context,region_code) {
        let url = context.app.getStafUrl + '/news/news_' + region_code + '_1_news_game.json';
        let list = await this.get(url,{});
        if (list == null) list = [];
        // 解析label标签
        let keyList = [];
        let tmpObj = {};
        Object.keys(list).forEach(function (key, value) {
            tmpObj = {};
            tmpObj["label"] = key;
            tmpObj["list"] = list[key];
            keyList.push(tmpObj);
        });
        return keyList;
    }
};