import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {BoheAtivityModel, NewRequestModel} from "../../../js/model";

export default {

    /**
     * 服务端动态数据
     */
    async asyncData(context) {

        const http = new HttpClient();
        const webParams = new WebParams(context);
        // 获取活动列表
        let activityList = []
        let activityUrl = context.app.context.app.getBaseUrl + HttpClient.URL_ACTIVITY_LIST;
        let param = new BoheAtivityModel();
        param.page = 0;
        param.size = 5;
        param.type = 1;
        param.plat_type = 1;
        param.region_code = webParams.region_code;
        let activityBackData = await http.get(activityUrl, param);
        activityList = activityBackData.data.list.slice(0, 1);
        // 获取公告列表
        let notifyList = []
        let notityUrl = context.app.context.app.getBaseUrl + HttpClient.URL_NEWS;
        param = new NewRequestModel();
        param.page = 0;
        param.size = 8;
        param.support_type = 1;
        param.class_type = 0;
        param.region_code = webParams.region_code;
        let notifyBackData = await http.get(notityUrl, param);
        notifyList = notifyBackData.data.list;
        // 获取资讯列表
        let newsList = []
        let newsUrl = context.app.context.app.getBaseUrl + HttpClient.URL_NEWS;
        param = new NewRequestModel();
        param.page = 0;
        param.size = 8;
        param.support_type = 1;
        param.class_type = 2;
        param.region_code = webParams.region_code;
        let newsBackData = await http.get(newsUrl, param);
        newsList = newsBackData.data.list;
        //config
        let url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
        const jsonConfig = await http.getConfig(url);
        return {
            jsonConfig,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            activityList,
            newsList,
            notifyList
        };
    },
    /**
     * 头部
     */
    head() {
        return {
            title: this.title,
            meta: [
                {name: "description", content: this.description},
                {name: "keywords", content: this.keywords},
            ]
        };
    },
    /**
     * 组件
     */
    components: {
        "head-nav": HeadNav,
        "foot-nav": FootNav
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "",
            region_code: 0,
            language: "",
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            jsonConfig: null,
            pageName: '', //页面
            androidDownContent: '',
            activityList: [],
            notifyList: [],
            newsList: []
        };
    },

    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
    },

    methods: {
        /**
         * 初始化meta
         */
        initMeta() {
            this.gw_url = this.getWebBaseUrl();
            this.imageHeadUrl = this.getImgBaseUrl();
            this.m_url = this.getMobWebBaseUrl();
            this.user_url = this.getUserBaseUrl();

            const htmlName = this.$route.name;
            let lang = 'cn';
            if (this.language == 'zh_CN') {
                lang = 'cn';
            } else {
                lang = 'en';
            }
            const config = this.metaConfig[this.region_code][lang];
            this.title = config[htmlName].title;
            this.description = config[htmlName].description;
            this.keywords = config[htmlName].keywords;
            //下载
            const downConfig = this.jsonConfig.bohe.down_platform[this.from];
            this.windowsDownloadUrl = downConfig.windows.download_url;
            this.macDownloadUrl = downConfig.mac.download_url;
            this.androidDownContent = '<img style=\'width: 100px;\' width=\'100\' height=\'100\' src=\'/img/code_' + this.region_code + '_' + lang + '.png\' alt=\'薄荷加速器\'>';
        },
    }
}