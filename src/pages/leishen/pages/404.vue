<template>
    <div>
        <!--顶部导航-->
        <!--<head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>-->
        <div style="background-color:#212122;">
            <div style="width: 1200px;margin: 0 auto;position: relative;">
                <img src="../assets/images/404_top.png" alt="">
                <img src="../assets/images/404_cen.png" alt="">
                <img src="../assets/images/404_bottom.png" alt="">
                <div class="nopage_info">
                    <p>哟, 这个页面不见了, 我们的工程师正在检测中...！</p>
                    <p>为了方便您的浏览, 系统会在5秒后返回主页</p>
                    <div class="text-center" style="margin-top: 50px;">
                        <a class="public_btn" style="padding: 18px 54px;" :href="windowsDownloadUrl">下载PC客户端</a>
                        <a class="back" style="padding: 17px 54px;margin-left: 20px;" href="http://www.leigod.com">立即返回首页</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "babel-polyfill";
    import HeadNav from "./components/HeadNav";
    import FootNav from "./components/FootNav";
    import DownloadBox from "./components/DownloadBox";
    import HttpClient from "~/../../js/httpclient.js";
    import {ActivityModel} from "~/../../js/model.js";
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
                page: webParams.page,
                from: webParams.from,
                pageName: webParams.pageName,
                jsonConfig: jsonConfig.leigod,
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
                    {"http-equiv": "refresh", content: "5;url=http://www.leigod.com"},
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
                this.title = "当前页面无法访问 - 雷神官方网站";
                this.description = "";
                this.keywords = "";

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
    .nopage_info {
        width: 100%;
        text-align: center;
        position: relative;
        top: -200px;
        color: #c3c3c3;
        font-size: 16px;
    }

    .nopage_info .public_btn {
        color: #363437;
        font-size: 18px;
        border-radius: 4px;
    }

    .nopage_info .public_btn:hover {
        color: #363437;
        font-size: 18px;
    }

    .nopage_info .back {
        color: #d0d0d0;
        font-size: 18px;
        border-radius: 4px;
        border: solid 3px #5f5f5f;
    }
</style>
