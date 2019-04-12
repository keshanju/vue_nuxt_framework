<template>
    <div style="color: #333333">
        <div class="head">
            <div class="head_content">
                <div class="row-fluid" style="position:relative;">
                    <div class="webnav_box" style="left: 0;">
                        <div class="row-fluid web-nav-cell">
                            <div class="span2"><a :href="base_url+'index.html'" class="webnav_font">{{$t("nav.navlist1")}}</a></div>
                            <div class="span2" style="margin: 0 20px;"><a  href="https://netbar.leigod.com/" target="_blank" class="webnav_font">{{$t("nav.navlist2")}}</a></div>
                            <div class="span2" style="margin-left: 0;"><a :href="base_url+'recharge.html'" :class="{'webnav_font_active': page_name == 'recharge.html'}" class="webnav_font go_recharge">{{$t("nav.navlist3")}}</a></div>
                            <div class="span3" style="margin: 0 5px 0 5px;"><a :href="base_url+'notify.html'" :class="{'webnav_font_active': page_name == 'notify.html'}" class="webnav_font">{{$t("nav.navlist4")}}</a></div>
                            <div class="span3" style="margin-left: -5px;"><a :href="base_url+'activity.html'" :class="{'webnav_font_active': page_name == 'activity.html'}" class="webnav_font">{{$t("nav.navlist5")}}</a></div>
                        </div>
                    </div>
                    <div class="web_logo_box">
                        <div class="logo">
                            <a :href="base_url+'index.html'">
                                <img src="../../assets/images/nav_logo.png" alt="雷神全球加速器" class="nav_logo">
                            </a>
                        </div>
                    </div>
                    <div class="webnav_box" style="right: 0">
                        <div class="row-fluid web-nav-cell">
                            <!--<div class="span3"><a :href="env==='development'?'help':'help.html'" :class="{'webnav_font_active': page_name == 'help.html'}" class="webnav_font">{{$t("nav.navlist6")}}</a></div>-->
                            <!--<div class="span3" style="margin-left: 0;"><a  :href="env==='development'?'news':'news.html'" :class="{'webnav_font_active': page_name == 'news.html'}" class="webnav_font">{{$t("nav.navlist7")}}</a></div>-->
                            <!--游戏下载专题-->
                            <div class="span3" style="margin-left: 24px;position:relative;">
                                <a :href="siteHref" class="webnav_font_active webnav_font">{{$t("nav.navlist28")}}</a>
                                <img class="nav_newest_icon" src="../../assets/images/nav_up_icon.png" alt="">
                            </div>
                            <!--新增更多，包括帮助和资讯-->
                            <div class="span3" style="margin-left: 80px;width: 100px;">
                                <div class="btn-group">
                                    <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown">{{$t("nav.navlist27")}}<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a :href="base_url+'help.html'">{{$t("nav.navlist6")}}</a>
                                        </li>
                                        <li>
                                            <a :href="base_url+'news.html'">{{$t("nav.navlist7")}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--新增更多，包括帮助和资讯-->
                            <!--<div class="span3" style="margin-left: 0;">-->
                                <!--<div class="btn-group">-->
                                    <!--<a class="btn btn-mini dropdown-toggle" data-toggle="dropdown">-->
                                        <!--{{language == 'en'?'EN':'中文'}}-->
                                        <!--<span class="caret"></span>-->
                                    <!--</a>-->
                                    <!--<ul class="dropdown-menu">-->
                                        <!--<li>-->
                                            <!--<a class="h_zh_cn_btn" v-if="region_code==0" :href="gw_url+'/intl/'+page_name">中文</a>-->
                                            <!--<a class="h_en_btn" v-if="region_code==1" :href="gw_url+'/'+page_name">中文</a>-->
                                        <!--</li>-->
                                        <!--<li>-->
                                            <!--<a id="change_lang_en" class="h_zh_cn_btn" v-if="region_code==0" :href="gw_url+'/intl/en/'+page_name">EN</a>-->
                                            <!--<a id="change_lang_cn" class="h_en_btn" v-if="region_code==1" :href="gw_url+'/en/'+page_name">EN</a>-->
                                        <!--</li>-->
                                    <!--</ul>-->
                                <!--</div>-->
                            <!--</div>-->
                            <div class="span3" style="margin-left: 80px;">
                                <!--未登录-->
                                <ul id="h_userNoLogin" class="clear_fix hide" style="margin-top: 20px;width: 155px;">
                                    <li class="f_left">
                                        <a :href="user_url+'/'+'register.html?region_code='+region_code+'&language='+language"
                                           class="register_font web_public_btn">{{$t("public.share26")}}</a>
                                    </li>
                                    <li class="f_left" style="margin-left:5px;">
                                        <a :href="user_url+'/'+'login.html?region_code='+region_code+'&language='+language" class="login_font">{{$t("public.share27")}}</a>
                                    </li>
                                </ul>
                                <!--已登录-->
                                <div id="h_userLogin" class="btn-group hide">
                                    <img id="h_headImg" class="head_avatar"/>
                                    <p class="btn dropdown-toggle" data-toggle="dropdown">
                                        <span id="h_userName"></span>
                                        <span class="caret"></span>
                                    </p>

                                    <ul class="dropdown-menu">
                                        <li class="head_nav_control">
                                            <a :href="user_url+'/'+'user.html?region_code='+region_code+'&language='+language">会员中心</a>
                                        </li>
                                        <li class="head_nav_control">
                                            <a id="exitLoginBtn">退出登录</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav_guang"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            gw_url: String,
            region_code: Number,
            language: String,
            user_url: String,
            page_name: String,
            base_url:String
        },

        data() {
            return {
                env:process.env.NODE_ENV,
                userName: 'leigod',
                siteHref:''
            };
        },
        created() {
            this.siteHref=this.downUrl()
        },

        methods: {}
    };
</script>

<style scoped>
</style>
