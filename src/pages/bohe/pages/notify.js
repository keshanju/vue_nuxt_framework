import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DetailsNews from "./components/DetailsNews";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {NewRequestModel} from "../../../js/model";

export default {

    /**
     * 服务端动态数据
     */
    async asyncData(context) {

        const http = new HttpClient();
        const webParams = new WebParams(context);
        let url = context.app.getBaseUrl+HttpClient.URL_NEWS;
        let param = new NewRequestModel();
        param.page = webParams.page;
        param.size = 12;
        param.support_type = 1;
        param.class_type = 0;
        param.region_code = webParams.region_code;
        let backData = await http.get(url, param);
        let total = Math.ceil(backData.data.total / param.size);
        if (total>10) total = 10; //只渲染前10页的内容
        let notifyList = backData.data.list;
        return {
            total,
            notifyList,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName
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
        "foot-nav": FootNav,
        "details-news": DetailsNews
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "",
            total: 0,
            region_code: 0,
            language: "",
            page: 0,
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            jsonConfig: null,
            pageName: '', //页面
            activityList: []
        }
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
        }
    }
}