import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import LocalStorageUtil from "~/../../js/cookie.js";
import {
    NoticeDetailRequestModel,
    NewsModel
} from "../../../js/model";
import WebParams from "~/../../js/params.js";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = '';
        let params = '';
        //config
        url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
        const jsonConfig = await http.getConfig(url);
        let firstHelpId = jsonConfig.leigod.help.first_id;
        let secondHelpId = jsonConfig.leigod.help.second_id;

        //帮助详情1
        url = context.app.getBaseUrl + HttpClient.URL_NEWS_DETAIL + firstHelpId;
        params = new NoticeDetailRequestModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 1;
        params.support_type = 1;
        params.id = firstHelpId;
        let resData1 = await http.get(url, params);

        //帮助详情2
        url = context.app.getBaseUrl + HttpClient.URL_NEWS_DETAIL + secondHelpId;
        params = new NoticeDetailRequestModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 1;
        params.support_type = 1;
        params.id = secondHelpId;
        let resData2 = await http.get(url, params);

        //相关问答列表
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 1;
        params.size = 10;
        params.support_type = 1;
        let resData3 = await http.get(url, params);
        let questionList = resData3.data.list;
        let questionDetail = [];
        for (let i = 0; i < questionList.length;i++) {
            url = context.app.getBaseUrl + HttpClient.URL_NEWS_DETAIL + questionList[i].id;
            params = new NewsModel();
            params.project = HttpClient.PROJECT_LEIGOD;
            params.region_code = webParams.region_code;
            params.lang = webParams.lang;
            params.class_type = 1;
            params.support_type = 1;
            params.id = questionList[i].id;
            let resData2 = await http.get(url, params);
            questionDetail.push(resData2.data)
        }

        //
        return {
            jsonConfig: jsonConfig.leigod,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            tabIndex: webParams.tab,
            firstHelpDetail: resData1.data,
            secondHelpDetail: resData2.data,
            questionList: questionList,
            questionDetail: questionDetail
        };
    },
    /**
     * 头部
     */
    mounted() {
    },
    head() {
        return {
            title: this.title,
            meta: [{
                    name: "description",
                    content: this.description
                }, {
                    name: "keywords",
                    content: this.keywords
                }, ],
            script: [{
            }, ]
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
            list: [],
            region_code: 0,
            language: "",
            page: 0,
            tabIndex: 0,
            firstHelpDetail: {},
            secondHelpDetail: {},
            questionList: [],
            questionDetail: [],
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            pageName: '', //页面
            secondHelpId: 0,
            joinleftfix: 0,
            env:process.env.NODE_ENV,
            content: "",
            joinDatas: [
                {
                    title: 'OpenWRT开发工程师',
                    id: 'a1',
                    link: 'b1'
                },
                {
                    title: '运营总监',
                    id: 'a2',
                    link: 'b2'
                },
                {
                    title: '新媒体运营',
                    id: 'a3',
                    link: 'b3'
                },
                {
                    title: 'SEO主管',
                    id: 'a4',
                    link: 'b4'
                },
                {
                    title: '官网客服',
                    id: 'a5',
                    link: 'b5'
                },
                {
                    title: '网络推广',
                    id: 'a6',
                    link: 'b6'
                },
                {
                    title: 'Web前端开发工程师',
                    id: 'a7',
                    link: 'b7'
                }
            ]
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
        changeTabIndex() {},
        openSlide() {},
        goNotifyDetail() {},
        getNotifyList() {},
        hideSlide() {

        },
        swiperOption() {

        },
        onGetQuestionDetail() {

        }
    }
};