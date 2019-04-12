import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import NewsOneImg from "./components/NewsOneImg";
import DownloadBox from "./components/DownloadBox";
import {ActivityModel} from "~/../../js/model.js";
import WebParams from "../../../js/params";
import HttpClient from "../../../js/httpclient";
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
        //游戏资讯
        const gameLableList = await http.getGameList(context,webParams.region_code);

        //热点资讯
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 2;
        params.size = 9;
        params.label = NewsModel.NEWS_HOT;
        let resData2 = await http.get(url, params);

        //
        return {
            gameLableList: gameLableList,
            newsList: resData2.data.list,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
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
        "news-one-img": NewsOneImg,
        "download-box": DownloadBox
    },
    data: function () {
        return {
            //必选参数meta
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
            //
            tabIndex: 0,
            gameLableList: [],
            newsList: [],
            gameNewsList: [],
            gameLabel: ''
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
        changeTabIndex(index) {
        }
    }
};