import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import LocalStorageUtil from "~/../../js/cookie.js";
import WebParams from "~/../../js/params.js";
import {
    ActivityRequestModel
} from "../../../js/model";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = '';
        let params = '';
        //专题活动
        url = context.app.getBaseUrl + HttpClient.URL_ACTIVITY_LIST;
        params = new ActivityRequestModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.type = '1,7,8,9';
        params.plat_type = 1;
        params.size = 6;
        params.page = webParams.page;
        let resData1 = await http.get(url, params);
        let zttotal = Math.ceil(resData1.data.total / params.size);
        if (zttotal > 10) zttotal = 10;

        //周五活动
        url = context.app.getBaseUrl + HttpClient.URL_ACTIVITY_LIST;
        params = new ActivityRequestModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.type = 10;
        params.plat_type = 1;
        params.size = 6;
        params.page = webParams.page;
        let resData2 = await http.get(url, params);
        let zwtotal = Math.ceil(resData2.data.total / params.size);
        if (zwtotal > 10) zwtotal = 10;


        //
        return {
            ztActivityList: resData1.data.list,
            zwActivityList: resData2.data.list,
            zttotal: zttotal,
            zwtotal: zwtotal,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            tabIndex: webParams.tab
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
            zwActivityList: [],
            ztActivityList: [],
            title: "测试title",
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
            zttotal: 0,
            zwtotal: 0,
            tabIndex: 0,
        };
    },
    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
        this.init();
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
        init() {},
        goActivityDetail() {},
        changeHotNews() {},
        goNotifyDetail() {},
        getNotifyList() {},
        changeTabIndex(index) {
        }
    }
};