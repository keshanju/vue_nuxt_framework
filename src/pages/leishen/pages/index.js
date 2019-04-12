import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import ActivityBox from "./components/ActivityBox";
import HttpClient from "~/../../js/httpclient.js";
import {ActivityModel} from "~/../../js/model.js";
import WebParams from "~/../../js/params.js";
import {ActivityPicModel, NewsModel} from "../../../js/model";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = '';
        let params = '';

        //系统时间
        url = context.app.getBaseUrl + HttpClient.URL_TOOL_SYSTEM_TIME;
        params = {};
        let resData = await http.get(url, params);
        const now_time = resData.data.time;

        //活动图片
        url = context.app.getBaseUrl + HttpClient.URL_ACTIVITY_PICTURE_LIST;
        params = new ActivityPicModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        let resData1 = await http.post(url, params);
        const activityList = resData1.data;

        //热点资讯
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 2;
        params.size = 3;
        params.label = NewsModel.NEWS_HOT;
        let resData2 = await http.get(url, params);

        //推荐
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.class_type = 2;
        params.size = 4;
        params.label = NewsModel.NEWS_TUIJIAN;
        let resData3 = await http.get(url, params);

        //公告
        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        params = new NewsModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        params.size = 4;
        let resData4 = await http.get(url, params);

        //config
        url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
        const jsonConfig = await http.getConfig(url);

        //
        return {
            activityList: activityList,
            hotNewsList: resData2.data.list,
            lastNewsList: resData3.data.list,
            notifyList: resData4.data.list,
            jsonConfig: jsonConfig.leigod,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            now_time: now_time
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
        "activity-box": ActivityBox
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
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
            activityList: [],
            activityInfo: null,
            hotNewsList: [],
            notifyList: [],
            jsonConfig: null,
            windowsDownloadUrl: '',
            macDownloadUrl: '',
            androidDownContent: '',
            now_time:''
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

            //下载
            const downConfig = this.jsonConfig.down_platform[this.from];
            this.windowsDownloadUrl = downConfig.windows.download_url;
            this.macDownloadUrl = downConfig.mac.download_url;

            //
            let lang = 'cn';
            if(this.language == 'zh_CN') {
                lang = 'cn';
            } else {
                lang = 'en';
            }
            this.androidDownContent = '<img style=\'width: 100px;\' width=\'100\' height=\'100\' src=\'/img/code_' + this.region_code + '_' + lang + '.png\' alt=\'雷神加速器\'>';
        },

        /**
         *
         */
        init() {
            this.getActivityInfo();
        },

        /**
         * 活动数据
         */
        getActivityInfo() {
            if (this.activityList.length <= 0) return;
            this.activityInfo = this.activityList[0];
            this.activityInfo['img_3'] = this.activityInfo.imgs.filter((a, b) => {
                return a.key == 3;
            })[0].img_url;
            this.activityInfo.img_3 = this.imageHeadUrl + this.activityInfo.img_3;
            if (this.activityInfo.url == '') {
                this.activityInfo.url = WebParams.HTML_NAME_DETAILS_ACTIVITY_NEW + '?id=' + this.activityInfo.id;
            }
        }
    }
};