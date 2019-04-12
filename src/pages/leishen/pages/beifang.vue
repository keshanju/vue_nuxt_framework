<template>
    <div>
        <div class="back-to-index">
            <!-- 返回首页 -->
            <a href="index.html">{{$t('public.share65')}}</a>
        </div>
        <div class="beifang_banner" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <div class="zhuanti_contend_box">
                <div class="download-client-leigod">
                    <!-- 北方线路延迟 完爆市面上其他加速 -->
                    <h1 class="new_notice_font">北方线路延迟 完爆市面上其他加速器</h1>
                    <a class="click_to_download" :href="windowsDownloadUrl">
                        <img class="img_filter" src="../assets/images/beifangdownload.png" alt="">
                    </a>
                </div>
                <img class="abs_pauser_img" src="../assets/images/beifang_bg_1.png" style="max-width: 3000px;">
                <img class="abs_pauser_img" src="../assets/images/beifang_bg_2.png" style="max-width: 3000px;">
                <img class="abs_pauser_img" src="../assets/images/beifang_bg_3.png" style="max-width: 3000px;">
                <img class="abs_pauser_img" src="../assets/images/beifang_bg_4.png" style="max-width: 3000px;">
            </div>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script>
import "babel-polyfill";
import FootNav from "./components/FootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import {
    ActivityModel
} from "~/../../js/model.js";
import LocalStorageUtil from "~/../../js/cookie.js";
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

        //
        return {
            language: webParams.lang,
            region_code: webParams.region_code,
            jsonConfig: jsonConfig.leigod,
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
            meta: [{
                    name: "description",
                    content: this.description
                },
                {
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
        "download-box": DownloadBox,
        "foot-nav": FootNav
    },
    /**
     * 参数
     * @returns {{items: string[], list: Array, language: string}}
     */
    data: function () {
        return {
            title: "测试title",
            list: [],

            region_code: 0,
            language: "",
            page: 0,
            jsonConfig: null,
            windowsDownloadUrl: '',
            macDownloadUrl: '',
            wangbaDownloadUrl: ""
        };
    },
    created() {
        this.$i18n.locale = this.language;
        this.initMeta();
        this.init();
        //
        if (process.client) {}
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
        },
        init() {},
        windowsDownload() {}
    }
};
    
</script>

<style scoped>
</style>
