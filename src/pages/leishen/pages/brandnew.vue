<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <!--banner模块-->
        <div id="app" class="brand_new_banner_box clear_fix" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <img src="../assets/images/brand_new_bg_2.png" alt="雷神加速器" class="abs_banner_img" height="465" style="height: 465px;">
            <div class="abs_showimg_box">
                <div class="f_left">
                    <!--国内显示banner-->
                    <img v-if="region_code == 1" src="../assets/images/brand_new_cn_titile.png" alt="雷神加速器">
                    <!--国外显示banner-->
                    <img v-if="region_code == 0" src="../assets/images/brand_new_en_title.png" alt="雷神加速器">
                </div>
                <div class="abs_br_gif">
                    <video autoplay muted class="video_box" width="590" height="465">
                        <source src="../assets/images/new_leigod_video.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="br_btn_box">
                <!-- 立即体验 -->
                <a :href="windowsDownloadUrl" class="br_tiyan_btn">{{$t('index.a29')}}</a>
            </div>
        </div>

        <!--特点模块-->
        <div class="brand_new_tedian_box clear_fix">
            <img src="../assets/images/brand_new_bg_3.png" alt="雷神加速器" class="abs_banner_img" style="height: 289px;" height="289">
            <div class="sub_tedian_box clear_fix">
                <div class="text-center f_left" style="width: 20%">
                    <img src="../assets/images/brand_new_icon1.png" alt="雷神加速器">
                    <!-- 自研LD驱动级加速内核 -->
                    <p class="td_title_font">{{$t('index.a30')}}</p>
                    <div class="td_contend_font">
                        <!-- 金融级专线支持 -->
                        <p>{{$t('index.a31')}}</p>
                        <!-- 网游加速更稳定 -->
                        <p>{{$t('index.a32')}}</p>
                        <!-- CPU、内存占用率更低 -->
                        <p>{{$t('index.a33')}}</p>
                    </div>
                </div>
                <div class="text-center f_left" style="height: 174px;width: 20%;">
                    <img src="../assets/images/brand_new_icon2.png" alt="雷神加速器">
                    <!-- 服务器技术更新升级 -->
                    <p class="td_title_font">{{$t('index.a34')}}</p>
                    <div class="td_contend_font">
                        <!-- 全球上万台服务器金融内网搭建成功 -->
                        <p>{{$t('index.a35')}}</p>
                        <!-- 游戏加速更快 -->
                        <p>{{$t('index.a36')}}</p>
                    </div>
                </div>
                <div class="text-center f_left" style="width: 20%">
                    <img src="../assets/images/brand_new_icon3.png" alt="雷神加速器">
                    <!-- 全球加速游戏 -->
                    <p class="td_title_font">{{$t('index.a37')}}</p>
                    <div class="td_contend_font">
                        <!-- 新增部署全球上万节点 -->
                        <p>{{$t('index.a38')}}</p>
                        <!-- 游戏全球加速互联专线 -->
                        <p>{{$t('index.a39')}}</p>
                        <!-- 支持全球数千款PC网游和手游 -->
                        <p>{{$t('index.a40')}}</p>
                    </div>
                </div>
                <div class="text-center f_left" style="width: 20%">
                    <img src="../assets/images/brand_new_icon4.png" alt="雷神加速器">
                    <!-- 随时可暂停 -->
                    <p class="td_title_font">{{$t('index.a41')}}</p>
                    <div class="td_contend_font">
                        <!-- 按分钟计费的加速器 -->
                        <p>{{$t('index.a42')}}</p>
                        <!-- 随时可暂停加速时间 -->
                        <p>{{$t('index.a3')}}</p>
                        <!-- 一次购买相当于用久使用 -->
                        <p>{{$t('index.a43')}}</p>
                    </div>
                </div>
                <div class="text-center f_left" style="width: 20%">
                    <img src="../assets/images/brand_new_icon5.png" alt="雷神加速器">
                    <!-- 全新UI体验 -->
                    <p class="td_title_font">{{$t('index.a44')}}</p>
                    <div class="td_contend_font">
                        <!-- 全新UI，崭新外貌 -->
                        <p>{{$t('index.a45')}}</p>
                        <!-- 实时节点走势图 -->
                        <p>{{$t('index.a46')}}</p>
                        <!-- 资讯内嵌，游戏热点一手掌握 -->
                        <p>{{$t('index.a47')}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--购买按钮链接模块-->
        <div class="brand_new_link_box clear_fix">
            <img src="../assets/images/brand_new_bg_5.png" alt="雷神加速器" style="height: 198px;" class="abs_tedian_img">
            <div class="br_link_cell text-center">
                <div class="com_cart_box clear_fix" style="margin-right: 20px">
                    <div class="f_left">
                        <p class="br_buy_title_font">8760{{$t('recharge.c19')}}/188{{$t('recharge.c32')}}</p>
                        <p class="br_buy_tpis_font">{{$t('recharge.c33')}}412{{$t('recharge.c32')}}</p>
                    </div>
                    <a class="br_goumai_btn f_right">{{$t('recharge.c22')}}</a>
                </div>
                <div class="com_cart_box clear_fix">
                    <p class="br_buy_title_font f_left">720{{$t('recharge.c19')}}/45{{$t('recharge.c32')}}</p>
                    <a class="br_goumai_btn f_right">{{$t('recharge.c22')}}</a>
                </div>
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
                jsonConfig: null,
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

                //下载
                const downConfig = this.jsonConfig.down_platform[this.from];
                this.windowsDownloadUrl = downConfig.windows.download_url;
                this.macDownloadUrl = downConfig.mac.download_url;
            },
            init() {
            },
            windowsDownload() {
            },
            buyNow() {
            }
        }
    };
</script>

<style scoped>
</style>
