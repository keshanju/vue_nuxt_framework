import "babel-polyfill";
import HeadNav from "./components/downHeadNav";
import FootNav from "./components/downFootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);
        return {
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
            baseUrl:''
        };
    },
    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
        this.baseUrl=this.getWebBaseUrl()+'/'
    },
    methods: {
        /**
         * 初始化meta
         */
        initMeta() {
            // console.log(this.$route)
            this.gw_url = this.downUrl();
            this.imageHeadUrl = this.getImgBaseUrl();
            this.m_url = this.getMobWebBaseUrl();
            this.user_url = this.getUserBaseUrl();
            const htmlName = this.$route.name.split('-')[0];
            const config = this.metaConfig[this.region_code][this.language];
            this.title = config[htmlName].title;
            this.description = config[htmlName].description;
            this.keywords = config[htmlName].keywords;
        }
    }
};