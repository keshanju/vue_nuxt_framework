import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {NewsModel} from "../../../js/model";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = '';
        let params = '';
        //公告列表
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.page = webParams.page;
        params.size = 10;
        let resData1 = await http.get(url, params);
        let total = Math.ceil(resData1.data.total / params.size);
        if (total>10) total = 10;
        const notifyList = resData1.data.list;
        //
        return {
            notifyList: notifyList,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            total: total,
        };
    },
    /**
     * 头部
     */
    head() {
        return {
            title: this.title,
            meta: [
                {
                    name: "description",
                    content: this.description
                }, {
                    name: "keywords",
                    content: this.keywords
                },
            ]
        };
    },
    /**
     * 组件
     */
    components: {
        "head-nav": HeadNav,
        "foot-nav": FootNav,
        "download-box": DownloadBox
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "",
            description: "",
            keywords: "",
            region_code: 0,
            language: "",
            page: 1,
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            pageName: '', //页面
            chooseIndex: 0,
            notifyList: [],
            total: 0,
        };
    },
    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
        //
        if (process.client) {
        }
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
            //
            const htmlName = this.$route.name;
            const config = this.metaConfig[this.region_code][this.language];
            this.title = config[htmlName].title;
            this.description = config[htmlName].description;
            this.keywords = config[htmlName].keywords;
        },
        goActivityDetail() {
        },
        changeHotNews() {
        },
        goNotifyDetail() {
        },
        getNotifyList() {
        }
    }
};