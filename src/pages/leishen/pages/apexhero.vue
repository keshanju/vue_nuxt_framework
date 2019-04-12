<template>
    <div style="background-color:#e7e0d8;">
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <!--banner-->
        <div id="app" class="gametopic_banner_box" style="position:relative;" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <img class="pause_banner" src="../assets/images/apexhero/banner_t.jpg" alt="雷神加速器">
            <img class="pause_banner" src="../assets/images/apexhero/banner_c.jpg" alt="高速下载">
            <img class="pause_banner" src="../assets/images/apexhero/banner_b.jpg" alt="免费加速">
            <div class="topic_downbtn_box" style="top: 640px;">
                <a style="display: inline-block;" class="topic_downbox winDownLink" :href="windowsDownloadUrl">
                    <img src="../assets/images/apexhero/down_btn.png" alt="下载雷神PC客户端">
                </a>

                <a style="display: inline-block;margin-left: 30px;" class="topic_downbox" href="notice_51231.html" target="_blank">
                    <img src="../assets/images/apexhero/down_info.png" alt="Apex高速下载教程">
                </a>
                <div style="margin: 10px auto 0;color: #fefefe;">
                    <p style="font-size: 32px">全网提速Origin平台  Apex英雄下载加速</p>
                    <p style="font-size: 24px;margin: 5px auto;">用雷神加速器 玩Apex英雄就是快</p>
                    <div class="clear_fix" style="width: 330px;margin: 0 auto;font-size: 18px">
                        <div class="f_left">
                            <img src="../assets/images/apexhero/yanchi.png" alt="降低延迟">
                            <span>降低延迟</span>
                        </div>
                        <div class="f_left" style="margin-left: 18px;">
                            <img src="../assets/images/apexhero/kadun.png" alt="解决卡顿">
                            <span>解决卡顿</span>
                        </div>
                        <div class="f_left" style="margin-left: 18px;">
                            <img src="../assets/images/apexhero/diaoxian.png" alt="避免掉线">
                            <span>避免掉线</span>
                        </div>
                    </div>
                </div>
            </div>
            <img class="topic-banner_l_img" src="../assets/images/apexhero/banner_l.jpg" alt="雷神加速器，Apex英雄加速">
            <img class="topic-banner_r_img" src="../assets/images/apexhero/banner_r.jpg" alt="雷神加速器，Apex英雄加速">
        </div>
        <!--contend-->
        <div style="background-color:#e7e0d8;">
            <div style="width: 1200px;margin: 35px auto 55px;">
                <img src="../assets/images/apexhero/screen01.png" alt="裸连联机、雷神加速">
                <img style="margin-top: 35px;" src="../assets/images/apexhero/screen02.png" alt="Apex英雄">
                <!--<div style="margin-top: 35px;">-->
                    <!--<p style="font-size: 28px">雷神加速器支持上百款国内游戏加速</p>-->
                    <!--<img style="margin: 10px auto 25px;" src="../assets/images/apexhero/screen04.png" alt="英雄联盟，彩虹六号，坦克世界，战术小队，绝地求生等游戏加速">-->
                    <!--<p style="font-size: 16px">更多游戏体验  下载雷神加速器</p>-->
                <!--</div>-->
                <img style="margin-top: 35px;" src="../assets/images/apexhero/screen03.png" alt="英雄联盟，彩虹六号，坦克世界，战术小队，绝地求生等游戏加速">
            </div>
        </div>
        <!--download-->
        <div style="position: relative;background-color: #decebc;padding: 32px 0;">
            <div class="topic_downbtn_box" style="position: relative">
                <a style="display: inline-block;" class="topic_downbox winDownLink" :href="windowsDownloadUrl">
                    <img src="../assets/images/apexhero/down_btn_red.png" alt="下载雷神PC客户端">
                </a>

                <a style="display: inline-block;margin-left: 110px;" class="topic_downbox" href="notice_51231.html" target="_blank">
                    <img src="../assets/images/apexhero/down_info_red.png" alt="Apex高速下载教程">
                </a>
            </div>
        </div>

        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script>
    import "babel-polyfill";
    import HeadNav from "./components/HeadNav";
    import FootNav from "./components/FootNav";
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
            },
            init() {
            }
        }
    };
</script>

<style scoped>
</style>
