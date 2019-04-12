<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <!-- banner -->
        <div class="user_server_banner" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <!-- 会员服务条款 -->
            <h2 class="user_server_title">{{$t("user.b70")}}</h2>
        </div>
        <!-- content -->
        <div class="user_server_box components_cell">
            <div class="agreement_box">
                <h2 class="user_headfont">{{$t("agreement.e1")}}</h2>
                <p class="user_agreement_font text_indent">{{$t("agreement.e2")}}</p>
                <h4 class="user_aggrement_h4font">{{$t("agreement.e3")}}</h4>
                <p class="user_agreement_font text_indent">{{$t("agreement.e4")}}</p>
                <h4 class="user_aggrement_h4font">{{$t("agreement.e5")}}</h4>
                <p class="user_agreement_font text_indent">{{$t("agreement.e6")}}</p>
                <p class="user_agreement_font text_indent">{{$t("agreement.e7")}}</p>
                <p class="user_agreement_font text_indent">{{$t("agreement.e8")}}</p>
                <h4 class="user_aggrement_h4font">{{$t("agreement.e9")}}</h4>
                <p class="user_agreement_font text_indent">{{$t("agreement.e10")}}</p>
                <p class="user_agreement_font text_indent">{{$t("agreement.e11")}}</p>
                <h4 class="user_aggrement_h4font">{{$t("agreement.e12")}}</h4>
                <p class="user_agreement_font text_indent">{{$t("agreement.e13")}}</p>
                <p class="user_agreement_font text_indent">{{$t("agreement.e14")}}</p>
                <p class="user_agreement_font text_indent_3em">{{$t("agreement.e15")}}</p>
                <p class="user_agreement_font text_indent_3em">{{$t("agreement.e16")}}</p>
                <p class="user_agreement_font text_indent_3em">{{$t("agreement.e17")}}</p>
                <p class="user_agreement_font text_indent_3em">{{$t("agreement.e18")}}</p>
                <p class="user_agreement_font text_indent_3em">{{$t("agreement.e19")}}</p>
                <!--<p class="user_agreement_font text_indent_3em">{{$t("agreement.e20")}}</p>-->
                <p class="user_agreement_font text_indent">{{$t("agreement.e21")}}</p>
                <p class="user_agreement_font text_indent">{{$t("agreement.e22")}}</p>
                <img src="../assets/images/fuwuitemszhang.png" class="user_server_zhang" alt="">
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
                region_code: 0,
                language: "",
                page: 0,
                gw_url: '', //官网地址
                m_url: '', //m站地址
                user_url: '', //user站地址
                imageHeadUrl: '', //图片地址
                from: '', //来源
                pageName: '', //页面
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
            },
            init() {
            }
        }
    };
</script>

<style scoped>
</style>
