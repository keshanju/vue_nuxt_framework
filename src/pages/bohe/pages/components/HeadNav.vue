<template>
    <div class="headnav_box" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url">
        <!-- 官网logo -->
        <div class="logo_box f_left">
            <a style="margin-left: 10px;" class="show_bh">
                <!--logo区分显示-->
                <img :src="NavLogo" alt="薄荷加速器" class="img_filter">
            </a>
        </div>
        <!-- 官网导航 -->
        <div class="mainnav_box">
            <ul class="headnav_items clear_fix">
                <li class="headnav_item">
                    <a :class="{'tab_active': pageName == 'index.html' }" href="index.html">{{$t("head.a1")}}</a>
                </li>
                <li class="headnav_item" v-show="region_code == 0">
                    <a :class="{'tab_active': pageName == 'recharge.html'}" href="recharge.html">{{$t("head.a2")}}</a>
                </li>
                <li class="headnav_item">
                    <a :class="{'tab_active': pageName == 'notify.html'}" href="notify.html">{{$t("head.a3")}}</a>
                </li>
                <li class="headnav_item" v-show="region_code==0">
                    <a :class="{'tab_active': pageName == 'activity.html'}" href="activity.html">{{$t("head.a4")}}</a>
                </li>
                <li class="headnav_item">
                    <a :class="{'tab_active': pageName == 'news.html'}" href="news.html">{{$t("head.a5")}}</a>
                </li>
                <li class="headnav_item">
                    <a :class="{'tab_active': pageName == 'about.html'}" href="about.html">{{$t("head.a7")}}</a>
                </li>
            </ul>
        </div>
        <!--语言+登录注册按钮-->
        <div class="enternav_box web-nav-cell">
            <!--语言选择栏-->
            <div class="langnav_box f_left">
                <div class="btn-group">
                    <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown">
                        {{language == 'en'?'EN':'中文'}}
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="h_zh_cn_btn" v-if="region_code==0" style="color: #606266;"  :href="gw_url+'/cn/'+pageName">中文</a>
                            <a class="h_en_btn" v-if="region_code==1" style="color: #606266;" :href="gw_url+'/'+pageName">中文</a>
                        </li>
                        <li>
                            <a id="change_lang_en" class="h_zh_cn_btn" v-if="region_code==0"
                               :href="gw_url+'/'+pageName" style="color: #606266;">EN</a>
                            <a id="change_lang_cn" class="h_en_btn" v-if="region_code==1"
                               :href="gw_url+'/en/'+pageName" style="color: #606266;">EN</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--登录注册按钮-->
            <div class="f_right">
                <!--未登录-->
                <div class="clear_fix">
                    <a class="f_left public_btn" style="margin-right: 10px;color: #fff;" :href="user_url+'/'+'register.html?region_code='+region_code+'&language='+language">{{$t("head.a9")}}</a>
                    <a style="padding: 5px 12px;" class="f_left">{{$t("head.a10")}}</a>
                </div>
                <!--已登录-->
                <div id="h_userLogin" class="btn-group hide" style="margin-top: 3px">
                    <img class="head_avatar f_left" src="../../assets/images/default_avatar.png"/>
                    <p class="btn dropdown-toggle" data-toggle="dropdown">
                        <span id="h_userName"></span>
                        <span class="caret"></span>
                    </p>
                    <ul class="dropdown-menu">
                        <li style="padding: 10px 20px">
                            <a :href="user_url+'/'+'user.html?region_code='+region_code+'&language='+language" style="color: #606266;">会员中心</a>
                        </li>
                        <li style="padding: 10px 20px">
                            <a id="exitLoginBtn" style="color: #606266;">退出登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            region_code: Number,
            pageName: String,
            gw_url: String,
            language: String,
            user_url: String,
            logo_url: String,
            m_url:String
        },
        data() {
            return {
                NavLogo: this.logo_url || './img/logo_nav.png'
            }
        }
    }
</script>

<style scoped>

</style>