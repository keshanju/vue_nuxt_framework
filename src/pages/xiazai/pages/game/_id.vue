<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" base_url="https://www.leigod.com/" :region_code="region_code" :language="language"
                  :user_url="user_url"
                  :page_name="pageName"></head-nav>

        <div class="downsite_banner_box" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url"
             :leigod_url="leigod_url" style="height:270px;" :down_url="gameInfo.down_url" :region_code="region_code" :language="language">
            <img style="margin-left: -490px;" :src="gameInfo.banner_img">
            <div class="downsite_abs_box">
                <div v-html="gameInfo.info_img_url"></div>
                <div class="f_left text_left graphicbox-cell" style="margin-left: 40px;padding-top: 40px;">
                    <div style="margin: 25px 0 0;" class="clear_fix">
                        <h1 style="color: #fff;font-size: 24px;margin-left: -10px;">{{gameInfo.title}}</h1>
                    </div>
                </div>

            </div>
        </div>
        <div class="downsite_content_box">
            <div style="width: 1200px;margin: 0 auto;" class="clear_fix">
                <div style="width: 800px;" class="f_left">
                    <h2 class="border_l_red" style="padding: 10px 0 10px 8px">资源介绍</h2>
                    <p class="downlist_txt" v-html="gameInfo.explain">
                    </p>
                    <div>
                        <div class="down-box" style="display: inline-block; width:180px;"
                             :id="gameInfo.online=='1'?'user_game_download_btn':'any'">
                            <a :class="gameInfo.online==1?'winDownLink':''" style="width:100%;margin-left:0px;">
                                <img src="../../assets/images/down/btn_load.png" style="margin-top: -10px;"/>
                                <span >{{gameInfo.online=='1'?'立即下载':'敬请期待'}}</span>
                            </a>
                        </div>

                        <div class="soft-info">
                            <span style="margin-right: 8px; margin-left: 8px;">
                                <img
                                    src="../../assets/images/downsite_hot_icon.png"
                                    style="width: 16px;">
                                <span style="color: #ff4029;">人气: {{gameInfo.human_hot}}</span>
                            </span>
                            <span>
                                <img src="../../assets/images/down/icon_v.png" style="width: 16px;">
                                <span style="color:#666;margin-right: 8px;">版本号: {{gameInfo.version}}</span>
                            </span>
                            <span style="color: #666;margin-right:8px;">文件大小: <span>{{gameInfo.file_size}}</span></span>
                            <img src="../../assets/images/down/icon_new.png"
                                 style="width: 39px;">
                            <span style="color:#666;">更新时间: <span>{{gameInfo.game_update_time}}</span></span>
                        </div>
                    </div>

                    <div class="site-container">
                        <div class="site-special">
                            <img class="site-special__img" src="../../assets/images/down/icon_fast.png" alt="">
                            <p class="site-special__title">高速下载</p>
                            <p class="site-special__desc">不限速极致下载 理论用户带宽多大下载就有多快</p>
                        </div>
                        <div class="site-special">
                            <img  class="site-special__img" src="../../assets/images/down/icon_guan.png" alt="">
                            <p class="site-special__title" style="color: #08a774;">官方认证</p>
                            <p class="site-special__desc">官方源文件客户端 绿色无病毒 无修改 无广告植入</p>
                        </div>
                    </div>
                    <h2 class="border_l_red" v-if="false" style="padding: 10px 0 10px 8px">资源特色</h2>
                    <p class="downlist_txt" v-if="false" v-html="gameInfo.feature">
                    </p>

                </div>
                <div style="width: 355px;" class="f_right">
                    <h3 class="border_l_red" style="padding: 10px 0 10px 8px">其他热门下载</h3>
                    <p style="font-size: 14px;margin-top:4px;" class="gameLink__hover" v-for="item in otherGameArr"
                       :key="item.id"><a :href="item.id+'.html'" target="_blank">{{item.title}}</a></p>
                </div>
                <div style="width: 355px; margin-top: 32px;" class="f_right">
                    <div class="downlist_btn_box">
                        <a :href="leigod_url" class="winDownLinks">
                            <img src="../../assets/images/down/rightside01.png"/>
                        </a>
                        <div class="down-blow">
                            <h2>为什么使用雷神加速器?</h2>
                            <p class="down-desc">
                                <img src="../../assets/images/down/icon01.png"/>
                                <span>全程使用金融级专线技术</span>
                            </p>
                            <p class="down-desc">
                                <img src="../../assets/images/down/icon02.png"/>
                                <span>支持高速下载和专线加速apex英雄</span>
                            </p>
                            <p class="down-desc">
                                <img src="../../assets/images/down/icon03.png"/>
                                <span>一次性购买相当于长久使用</span></p>
                            <p class="down-desc">
                                <img src="../../assets/images/down/icon04.png"/>
                                <span>随时可暂停加速时间为用户节省每一秒</span></p>
                        </div>
                    </div>
                </div>
                <div style="width: 800px;" class="f_left">
                    <h2 class="border_l_red" style="padding: 10px 0 10px 8px;margin-bottom:10px;">安装教程</h2>
                    <div v-html="gameInfo.course">
                    </div>
                </div>

            </div>

        </div>
        <div class="public_dialog" id="user_need_login" v-show="showTip">
            <div class="public_dialog_model text-center public__dialog_out public__dialog_in">
                <img src="../../assets/images/help_close.png" id="close_tip_dialog"
                     class="dialog_close_box">
                <p style="margin-left: 20px;font-size: 14px;text-align: center;">为了给您提供更好的专线下载体验，请先登录！</p>
                <div class="public_btn" id="confirmLogin" style="margin-top: 30px;display: inline-block;">去登录</div>
            </div>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="gamesite_foot_nav" gameimg="../img/down_logo_footer.png" base_url="https://www.leigod.com/"
                  :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script>
    import "babel-polyfill";
    import HeadNav from "../components/downHeadNav";
    import FootNav from "../components/downFootNav";
    import DownloadBox from "../components/DownloadBox";
    import HttpClient from "~/../../js/httpclient.js";
    import WebParams from "~/../../js/params.js";

    export default {
        /**
         * 服务端动态数据
         */
        async asyncData(context) {
            const http = new HttpClient();
            const webParams = new WebParams(context);
            let url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
            const jsonConfig = await http.getConfig(url);
            const downConfig = jsonConfig.leigod.down_platform[webParams.from];
            const down_url = downConfig.windows.download_url;
            let resData1 = require('../../assets/json/gamelist.json');
            let resData2 = require('../../assets/json/gamedetail.json');
            let pageId = webParams.page;
            let OtherTempGameList = [];
            let currentGameObj = {}
            for (let key in resData1.data.list) {
                for (let pp = 0; pp < resData1.data.list[key].length; pp++) {
                    if (resData1.data.list[key][pp].id == pageId) {
                        currentGameObj = resData1.data.list[key][pp]
                    } else {
                        OtherTempGameList.push(resData1.data.list[key][pp])
                    }
                }
            }
            let OtherGameList = OtherTempGameList.sort(function (itemA, itemB) {
                return Number(itemB.human_hot) - Number(itemA.human_hot)
            });
            OtherGameList=OtherGameList.slice(0,5);
            for (let qq = 0; qq < resData2.data.list.length; qq++) {
                if (resData2.data.list[qq].id == pageId) {
                    for (let key in resData2.data.list[qq]) {
                        currentGameObj[key] = resData2.data.list[qq][key]
                    }
                }
            }
            return {
                otherGameArr: OtherGameList,
                gameInfo: currentGameObj,
                leigod_url: down_url,
                language: webParams.lang,
                region_code: webParams.region_code,
                page: webParams.page,
                from: webParams.from,
                pageName: webParams.pageName,
                header_title: currentGameObj.seo_title,
                header_description: currentGameObj.seo_desc,
                header_keywords: currentGameObj.seo_keywords,
            };
        },
        /**
         * 头部
         */
        head() {
            return {
                title: this.header_title,
                meta: [
                    {
                        name: "description",
                        content: this.header_description,
                    }, {
                        name: "keywords",
                        content: this.header_keywords
                    },
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
                header_title: '',
                header_description: '',
                header_keywords: '',
                gameInfo: {},
                showTip: false,
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
                leigod_url: ''
            };
        },
        created() {
            this.$i18n.locale = this.language;
            this.initMeta();
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
            }
        }
    };
</script>
