import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DetailsNews from "./components/DetailsNews";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {ActivityDetailRequestModel} from "../../../js/model";

export default {

    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);
        let imgBaseUrl = context.app.getImgBaseUrl;
        // let url =context.app.getBaseUrl+ HttpClient.URL_ACTIVITY_DETAIL + webParams.id;
        let url =context.app.getBaseUrl+ HttpClient.URL_ACTIVITY_DETAIL + '2';

        let param = new ActivityDetailRequestModel();
        param.type = 1;
        // param.id = webParams.id||'2';
        param.id ='2';
        param.plat_type = 1;
        param.region_code = webParams.region_code;
        let backData = await http.get(url, param);
        backData.data.detail.image = imgBaseUrl +backData.data.detail.image
        let details =  backData.data.detail
        return {
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            details
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
    }
    ,
    /**
     * 组件
     */
    components: {
        "head-nav":
        HeadNav,
        "foot-nav":
        FootNav,
        "details-news":
        DetailsNews
    }
    ,
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "",
            region_code: 0,
            language: "",
            page: 0,
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            pageName: '', //页面
            details: {}
        };
    }
    ,

    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
    }
    ,

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
            //这里少了activity的meta值
            // this.title = config[htmlName].title;
            // this.description = config[htmlName].description;
            // this.keywords = config[htmlName].keywords;
        }
    }
}