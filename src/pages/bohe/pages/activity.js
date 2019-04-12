import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DetailsNews from "./components/DetailsNews";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {NewRequestModel, ActivityRequestModel} from "../../../js/model";

export default {

    /**
     * 服务端动态数据
     */
    async asyncData(context) {

        const http = new HttpClient();
        const webParams = new WebParams(context);

        let url = context.app.getBaseUrl + HttpClient.URL_ACTIVITY_LIST;
        let param = new ActivityRequestModel();
        param.page = webParams.page;
        param.size = 6;
        param.type = 0;
        param.plat_type = 1;
        // 临时添加的
        param.region_code = 0;
        let backData = await http.get(url, param);
        let total = Math.ceil(backData.data.total / param.size);
        if (total > 10) total = 10; //只渲染前10页的内容
        let activityList = backData.data.list;
        for (var i = 0; i < activityList.length; i++) {
            let date = new Date();
            let time = date.getTime();
            let date1 = new Date(activityList[i].end_time.replace(/-/g, "/"));
            let time1 = date1.getTime();
            if (time1 > time) {
                activityList[i]['time_status'] = 1;
            } else {
                activityList[i]['time_status'] = 0;
            }
        }

        url = context.app.getBaseUrl + HttpClient.URL_NEWS;
        param = new NewRequestModel();
        param.page = 0;
        param.size = 8;
        param.support_type = 1;
        param.class_type = 2;
        param.region_code = webParams.region_code;
        param.label = '热点';
        let newsBackData = await http.get(url, param);
        let hotNewList = newsBackData.data.list;
        // 获取windows的下载链接
        url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
        const jsonConfig = await http.getConfig(url);
        return {
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            hotNewList,
            activityList,
            total,
            jsonConfig
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
            activityList: [],
            newsList: [],
            jsonConfig: [],
            androidDownContent: '',
            windowsDownloadUrl:'',
            macDownloadUrl:''

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

            const downConfig = this.jsonConfig.bohe.down_platform[this.from];
            this.windowsDownloadUrl = downConfig.windows.download_url;
            this.macDownloadUrl = downConfig.mac.download_url;
            this.androidDownContent = '<img style=\'width: 100px;\' width=\'100\' height=\'100\' src=\'/img/code_' + this.region_code + '_' + lang + '.png\' alt=\'薄荷加速器\'>';
        }
        ,
        windowsDownload() {
            window.location.href=this.windowsDownloadUrl
        }
        ,
        gonewsdetail(id) {
            window.open(window.location.origin+'/news_'+id+'.html','_blank')
        }
        ,
        goActivityDetail(item) {
            if (item.url_type == 1) {
                if(item.time_status==1){
                    //正在进行中的活动
                    let activityHtml=item.url.split('/')[item.url.split('/').length-1]
                    window.open(window.location.href.replace('activity.html',activityHtml))
                }
            } else {
                if(item.time_status==1) {
                    //正在进行中的活动
                    window.open('activdetails.html?id=' + item.id)
                }
            }

        }
    }
}