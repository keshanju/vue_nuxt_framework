<template>
    <div>
        <div class="aboutbanner">
            <!-- 头部导航 -->
            <div class="wrap_of_header">
                <head-nav :gw_url="gw_url" :region_code="region_code" :m_url="m_url" :language="language" :user_url="user_url"
                          :page_name="pageName"></head-nav>
            </div>
            <!--banner-->
            <div style="margin: 187px 0 20px;"></div>
            <div style="display: none" class="banner_box" v-show="region_code == 0">
                <h1 class="banner_title_font">{{$t("index.b1")}}</h1>
                <h2 style="margin: 30px auto;" class="banner_sub_title_font">{{$t("index.b2")}}</h2>
                <p style="margin: 0 auto 45px;">{{$t("index.b3")}}</p>
            </div>
            <div style="display: none" class="banner_box" v-show="region_code == 1">
                <h1 class="banner_title_font">{{$t("index.b20")}}</h1>
                <h2 style="margin: 30px auto;" class="banner_sub_title_font">{{$t("index.b21")}}</h2>
            </div>
            <!--content-->
            <div style="width: 1200px;margin: 0 auto;">
                <ul style="display: none" class="uls_1" v-show="region_code == 0">
                    <li class="lis_com_1">
                        <img src="../assets/images/1.png" alt="">
                        <p class="font_s5">{{$t("maboutus.w1")}}</p>
                        <p>{{$t("maboutus.w2")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/2.png" alt="">
                        <p class="font_s5">{{$t("maboutus.w3")}}</p>
                        <p>{{$t("maboutus.w4")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/3.png" alt="">
                        <p class="font_s5">{{$t("maboutus.w5")}}</p>
                        <p>{{$t("maboutus.w6")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/4.png" alt="">
                        <p class="font_s5">{{$t("maboutus.w7")}}</p>
                        <p>{{$t("maboutus.w8")}}</p>
                    </li>
                </ul>
                <ul style="display: none" class="uls_1" v-show="region_code == 1">
                    <li class="lis_com_1">
                        <img src="../assets/images/5.png" alt="">
                        <p class="font_s5">{{$t("about.ab1")}}</p>
                        <p>{{$t("about.ab5")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/6.png" alt="">
                        <p class="font_s5">{{$t("about.ab2")}}</p>
                        <p>{{$t("about.ab6")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/7.png" alt="">
                        <p class="font_s5">{{$t("about.ab3")}}</p>
                        <p>{{$t("about.ab7")}}</p>
                    </li>
                    <li class="lis_com_1">
                        <img src="../assets/images/8.png" alt="">
                        <p class="font_s5">{{$t("about.ab4")}}</p>
                        <p>{{$t("about.ab8")}}</p>
                    </li>
                </ul>
                <div style="padding: 70px 0 120px;">
                    <div class="clearfix_a">
                        <div class="f_left" style="padding-top: 120px;width: 50%;height: 372px;text-align: left;">
                            <p style="display: none" v-show="region_code == 0" class="font_s6">
                                {{$t("maboutus.w9")}}</p>
                            <p style="display: none" v-show="region_code == 0" class="font_s7">
                                {{$t("maboutus.w10")}}</p>
                            <p style="display: none" v-show="region_code == 1" class="font_s6">
                                {{$t("about.ab9")}}</p>
                            <p style="display: none" v-show="region_code == 1" class="font_s7">
                                {{$t("about.ab10")}}</p>
                        </div>
                        <div style="width: 50%;" class="f_right">
                            <img style="display: none" v-show="region_code == 0" src="../assets/images/11.png" alt="">
                            <img style="display: none" v-show="region_code == 1" src="../assets/images/11_cn.png"
                                 alt="">
                        </div>
                    </div>
                    <div class="clearfix_a">
                        <div class="f_right" style="padding-top: 60px;width: 50%;">
                            <p class="font_s6" style="text-align: left;">{{$t('maboutus.w11')}}</p>
                            <p class="font_s7">{{$t('maboutus.w12')}}</p>
                        </div>
                        <div class="f_left" style="width: 50%;height: 372px;text-align: left">
                            <img style="display: none" v-show="region_code == 0" src="../assets/images/22.png" alt="">
                            <img style="display: none" v-show="region_code == 1" src="../assets/images/23.png" alt="">
                        </div>
                    </div>
                    <div class="clearfix_a">
                        <div class="f_left" style="padding-top: 65px;width: 50%;height: 372px;text-align: left;">
                            <p class="font_s6">{{$t("maboutus.w13")}}</p>
                            <p class="font_s7">{{$t('maboutus.w14')}}</p>
                            <p class="font_s7">
                                <span v-show="region_code == 1">武汉薄荷科技有限公司</span>
                                <span v-show="region_code == 0">Bohe booster</span>是一家新型互联网科技公司，成立于2018年。公司旗下拳头产品“薄荷全球加速”是一款专为提升跨地域网页浏览，音乐欣赏，视频观看的网络加速软件，“薄荷全球加速器”通过专业核心技术及骨干网络专线能有效降低网络访问延迟。更好的为全球用户访问中国网站，视频，音乐提供加速服务，薄荷音乐加速，薄荷视频加速，薄荷直播加速，薄荷游戏加速。我们通过不断拓展互联网业务领域，致力于将薄荷加速器打造成一款为全球用户服务的优质加速软件。</p>
                        </div>
                        <div class="f_right" style="width: 50%;">
                            <img src="../assets/images/11copy.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./about.js">
</script>
