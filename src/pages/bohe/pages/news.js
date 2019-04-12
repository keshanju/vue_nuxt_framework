import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DetailsNews from "./components/DetailsNews";
import shareTo from "./components/shareTo";
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
        //获得最新资讯列表
        let url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        let param = new NewRequestModel();
        param.page = webParams.page;
        param.size = 4;
        param.support_type = 1;
        param.class_type = 2;
        param.label = '最新';
        param.region_code = webParams.region_code;
        let backData = await http.get(url, param);
        let newsListTop = backData.data.list;
        //获取资讯国服列表
        let chinaUrl = context.app.getBaseUrl + HttpClient.URL_NEWS;
        param.page = webParams.page;
        param.size = 5;
        param.support_type = 1;
        param.class_type = 2;
        param.label = '国服';
        param.region_code = webParams.region_code;
        let chinaBackData = await http.get(url, param);
        let total = Math.ceil(chinaBackData.data.total / param.size);
        if (total > 10) total = 10; //只渲染前10页的内容
        let newsList = chinaBackData.data.list;
        //获取热点资讯
        let hoturl = context.app.getBaseUrl + HttpClient.URL_NEWS;
        param.page = 0;
        param.size = 5;
        param.support_type = 1;
        param.class_type = 2;
        param.region_code = webParams.region_code;
        param.label = '热点';
        let hotBackData = await http.get(hoturl, param);
        let hotNewList = hotBackData.data.list;
        //获取手游资讯
        param.label = '手游';
        let phoneBackData = await http.get(hoturl, param);
        let mobilNewList = phoneBackData.data.list;
        return {
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            newsListTop,
            newsList,
            mobilNewList,
            hotNewList,
            total,
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
        "details-news": DetailsNews,
        "share-to": shareTo
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "",
            list: [],
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
            newsList: [],
            newsListTop: [],
            total: 0,
            current: false
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
        },
        goNewsDetail(id) {
            window.open('news_' + id + '.html','_blank');
        }
    }
}