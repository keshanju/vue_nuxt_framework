import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";

export default {

    /**
     * 服务端动态数据
     */
    async asyncData(context) {

        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = "";
        let params = "";
        //
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
            title: "用户协议",
            description:"",
            keywords:"",
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
            wangbaDownloadUrl: "",
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

        }
    }
}