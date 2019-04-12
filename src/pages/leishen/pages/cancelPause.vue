<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <div class="zhuanti_banner_box" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <img v-if="language == 'zh_CN'" style="max-width: none" src="../assets/images/nbcn_banner.png" :alt="$t('index.a1')" class="pause_banner">
            <img v-if="language == 'en'" style="max-width: none" src="../assets/images/nben_banner.jpg" :alt="$t('index.a1')" class="pause_banner">
        </div>
        <div class="zhuanti_contend_box">
            <img v-if="language == 'zh_CN'" src="../assets/images/nbcn_screen01.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'en'" src="../assets/images/nben_screen01.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'zh_CN'" src="../assets/images/nbcn_screen02.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'en'" src="../assets/images/nben_screen02.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'zh_CN'" src="../assets/images/nbcn_screen03.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'en'" src="../assets/images/nben_screen03.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'zh_CN'" src="../assets/images/nbcn_screen04.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'en'" src="../assets/images/nben_screen04.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'zh_CN'" src="../assets/images/nbcn_screen05.png" class="pause_banner" :alt="$t('index.a1')">
            <img v-if="language == 'en'" src="../assets/images/nben_screen05.png" class="pause_banner" :alt="$t('index.a1')">
            <div v-if="language == 'zh_CN'" id="kefu_weixin" class="new_side_box"></div>
            <div v-if="language == 'en'" id="kefu_weixin" class="new_en_side_box"></div>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script>
    import "babel-polyfill";
    import HeadNav from "./components/HeadNav";
    import FootNav from "./components/FootNav";
    import DownloadBox from "./components/DownloadBox";
    import HttpClient from "~/../../js/httpclient.js";
    import {ActivityModel} from "~/../../js/model.js";
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

            //
            return {
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
            "download-box": DownloadBox
        },
        /**
         * 参数
         * @returns {{items: string[], list: Array, language: string}}
         */
        data: function () {
            return {
                title: "测试title",
                list: [],
                webParam: [],
                region_code: 0,
                language: "zh_CN",
                page: 0,
                joinleftfix: 0
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
            init() {
            }
        }
    };
</script>

<style scoped>
</style>
