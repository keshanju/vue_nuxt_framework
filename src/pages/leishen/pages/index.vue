<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>
        <!--页面banner展示-->
        <div id="app" class="banner clear_fix" :now_time="now_time" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <div class="banner_content">
                <div class="banner_box f_left overflow">
                    <a href="apexhero.html" id="apexhreoId" target="_blank" class="f_left text_right" v-if="region_code == 1">
                        <img src="../assets/images/APEX_index.png" alt="" class="mar_t25">
                    </a>
                    <!--<p class="logo_font" style="margin-top: 270px;">{{$t("index.a1")}}</p>-->
                    <p class="h1_title_font">{{$t("index.a2")}}</p>
                    <p class="h2_title_font">{{$t("index.a3")}}</p>
                    <div class="pos_banner_txt1">
                        <p class="banner-txt1_font">{{$t("index.a4")}}</p>
                        <p class="banner-txt1_font">{{$t("index.a5")}}</p>
                    </div>
                    <div class="banner-txt2_font mar_t60">立即下载 <i></i> 免费试用</div>
                    <!--国内显示-->
                    <ul v-if="region_code == 1" class="download_box mar_t25">
                        <li class="download_cell" style="padding: 10px 12px;">
                            <div class="f_left pos_download_icon">
                                <img src="../assets/images/windows.png" alt="雷神加速器Windows下载" style="width: 18px;vertical-align: top">
                            </div>
                            <!-- Windows下载 -->
                            <a :href="windowsDownloadUrl" class="f_right h5_title_font winDownLink">Windows下载</a>
                        </li>
                        <li class="download_cell mac_down" id="mac_down" data-toggle="tooltip" data-placement="bottom" title="即将上线，敬请期待！">
                            <div class="f_left pos_download_icon">
                                <img src="../assets/images/mac.png" alt="雷神加速器Mac下载" style="width: 18px;vertical-align: top">
                            </div>
                            <!-- Mac下载 -->
                            <span class="f_left h5_title_font">Mac下载</span>
                        </li>
                        <li class="download_cell ios_down" id="ios_down" data-html="true" :data-content="androidDownContent" data-toggle="popover" data-trigger="hover" data-placement="top">
                            <div class="f_left pos_download_icon">
                                <img src="../assets/images/ios.png" alt="雷神加速器IOS下载" style="width: 18px;vertical-align: top">
                            </div>
                            <!-- IOS下载 -->
                            <div class="f_left h5_title_font">IOS下载</div>
                        </li>
                        <li class="download_cell android_down" id="android_down" data-html="true" :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                            <div class="f_left pos_download_icon">
                                <img src="../assets/images/android.png" alt="雷神加速器Android下载" style="width: 18px;vertical-align: top">
                            </div>
                            <!-- Android下载 -->
                            <span class="f_right h5_title_font">Android下载</span>
                        </li>
                    </ul>
                    <!--国外显示-->
                    <ul v-if="region_code == 0" class="download_box mar_t25">
                        <li class="download_foreign_cell" style="padding: 13px 12px;">
                            <div class="f_left">
                                <div class="f_left windows_icon pos_download_icon"></div>
                                <a :href="windowsDownloadUrl" class="f_left h5_title_font winDownLink">Windows</a>
                            </div>
                            <img class="f_right" src="../assets/images/download_btn@2x.png" alt="Windows" style="width: 16px;" width="16">
                        </li>
                        <li class="download_foreign_cell mac_down" data-toggle="tooltip" data-placement="bottom" title="即将上线，敬请期待！">
                            <div class="f_left">
                                <div class="f_left mac_icon pos_download_icon"></div>
                                <span class="f_left h5_title_font">Mac</span>
                            </div>
                            <img class="f_right" style="width: 16px;" src="../assets/images/download_btn@2x.png" alt="Mac" width="16">
                        </li>
                        <li class="download_foreign_cell ios_down" data-html="true" :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                            <div class="f_left">
                                <div class="f_left ios_icon pos_download_icon"></div>
                                <span class="f_left h5_title_font">IOS</span>
                            </div>
                            <img class="f_right" style="width: 16px;" src="../assets/images/code_btn@2x.png" alt="IOS" width="16">
                        </li>
                        <li class="download_foreign_cell android_down"  data-html="true" :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                            <div class="f_left">
                                <div class="f_left android_icon pos_download_icon"></div>
                                <span class="f_left h5_title_font">Android</span>
                            </div>
                            <img class="f_right" style="width: 16px;" src="../assets/images/code_btn@2x.png" alt="Android" width="16">
                        </li>
                    </ul>
                </div>
                <div class="banner_box f_right">
                    <div id="testBtn" class="banner_dz">
                        <img src="../assets/images/banner_dz.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_logo">
                        <img src="../assets/images/banner_logo.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_cs">
                        <img src="../assets/images/banner_cs.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_dota">
                        <img src="../assets/images/banner_dota.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_pubg">
                        <img src="../assets/images/banner_pubg.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_fk">
                        <img src="../assets/images/banner_fk.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                    <div class="banner_fk2">
                        <img src="../assets/images/banner_fk2.png" :alt="$t('index.a1')" class="img_filter">
                    </div>
                </div>
            </div>
        </div>
        <!--活动、资讯、公告-->

        <!--页面主体内容-->
        <div class="main_content">
            <div class="content_box">
                <!--最新活动-->
                <div class="index_activity_box">
                    <div class="f_left activity_box">
                        <a :href="(activityInfo&&activityInfo.url)?activityInfo.url:'javascript:void(0)'" target="_blank" class="img_filter">
                            <img class="img_filter box_radius cursor lazyload" :data-original="(activityInfo&&activityInfo.img_3)?activityInfo.img_3:''" :alt="(activityInfo&&activityInfo.title)?activityInfo.title:''">
                        </a>
                    </div>
                    <!--轮播图-->
                    <div class="f_right slideshow_box">
                        <div class="carousel slide" style="height: 320px;">
                            <!--<ol class="carousel-indicators">-->
                                <!--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>-->
                                <!--<li data-target="#myCarousel" data-slide-to="1" class=""></li>-->
                                <!--<li data-target="#myCarousel" data-slide-to="2" class=""></li>-->
                            <!--</ol>-->
                            <!-- Carousel items -->
                            <!--<div class="carousel-inner">-->
                                <!--<div class="active item">-->
                                    <!--<a href="cancelPause.html">-->
                                        <!--<img v-if="region_code == 1" src="../assets/images/zant.png" width="400"-->
                                             <!--style="width: 400px;">-->
                                        <!--<img v-if="region_code == 0" src="../assets/images/zant_en.png" width="400"-->
                                             <!--style="width: 400px;">-->
                                    <!--</a>-->
                                <!--</div>-->
                                <!--<div class="item">-->
                                    <!--<a href="brandnew.html">-->
                                        <!--<img v-if="region_code == 1" src="../assets/images/new_leigod_net.png"-->
                                             <!--width="400" style="width: 400px;">-->
                                        <!--<img v-if="region_code == 0" src="../assets/images/new_leigod_en_net.png"-->
                                             <!--width="400" style="width: 400px;">-->
                                    <!--</a>-->
                                <!--</div>-->
                                <!--<div class="item">-->
                                    <!--<a v-if="region_code == 1" href="beifang.html">-->
                                        <!--<img src="../assets/images/beif.png" width="400" style="width: 400px;">-->
                                    <!--</a>-->
                                <!--</div>-->
                                <div class="item">
                                    <a href="brandnew.html" v-if="region_code == 0" target="_blank">
                                        <img src="../assets/images/new_leigod_en_net.png"
                                             width="400" style="width: 400px;height: 320px">
                                    </a>
                                    <a href="apexhero.html" v-if="region_code == 1" target="_blank">
                                        <img src="../assets/images/apexindexbanner.png" width="400" >
                                    </a>
                                </div>
                            <!--</div>-->
                            <!-- Carousel nav -->
                            <!--<a class="carousel-control left" href="#myCarousel" data-slide="prev" data-interval="3000">&lsaquo;</a>-->
                            <!--<a class="carousel-control right" href="#myCarousel" data-slide="next" data-interval="3000">&rsaquo;</a>-->
                        </div>
                    </div>
                </div>
                <!--资讯&公告-->
                <div class="clear_fix">
                    <div class="f_left" style="width: 619px; height: 343px;">
                        <div class="clear_fix pos_activity_banner ">
                            <div class="f_left">
                                <span class="web_title_font">{{$t("public.share23")}}</span>
                                <span class="title_icon"></span>
                            </div>
                            <div class="f_right cursor" style="margin-top: 5px;">
                                <span class="arrow_more_font pos_arrow_more f_left"></span>
                                <span class="arrow_more_font pos_arrow_more f_left"></span>
                                <a href="news.html" class="h5_font14_white f_right" style="margin-top: 5px;">more+</a>
                            </div>
                        </div>
                        <!--资讯布局修改暂定-->
                        <ul class="row-fluid hot_news_box">
                            <li class="cursor span4" v-for="(item , index) in hotNewsList" :key="index">
                                <div class="box_radius">
                                    <a :href="'news_'+item.id+'.html'" target="_blank">
                                        <img style="width: 200px;height: 120px;" class="box_radius lazyload" :data-original="imageHeadUrl + item.image_url" :alt="item.title" width="200" height="120">
                                    </a>
                                </div>
                                <div class="" style="margin-top: 15px;">
                                    <a :href="'news_'+item.id+'.html'" target="_blank" class="news_title_font" style="width: 200px;">{{item.title}}</a>
                                    <p class="product_font">{{item.publish_time_year + '-' + item.publish_time_month + '-' + item.publish_time_day}}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="solid_dot_line"></div>
                        <!--资讯布局修改暂定-->
                        <ul class="clear_fix">
                            <li class="f_left index_news" style="width: 48%;margin-bottom: 15px;"
                                v-for="(item , index) in lastNewsList" :key="index">
                                <a :href="'news_'+item.id+'.html'" target="_blank" class="h5_font14_white f_left" style="width: 220px">{{item.title}}</a>
                                <p class="product_font f_left">{{item.publish_time_year + '-' + item.publish_time_month + '-' + item.publish_time_day}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="f_right" style="width: 610px; height: 343px;">
                        <div class="clear_fix pos_activity_banner">
                            <div class="f_left">
                                <span class="web_title_font">{{$t("public.share22")}}</span>
                                <span class="title_icon"></span>
                            </div>
                            <a class="h5_font14_white f_right" href="notify.html" style="margin-top: 5px;">more+</a>
                        </div>
                        <div>
                            <ul class="">
                                <li class="notice_box clear_fix" v-for="(item , index) in notifyList" :key="index">
                                    <div class="notice_cell f_left">
                                        <p class="news_month_font">{{item.publish_time_month + '/' + item.publish_time_day}}</p>
                                        <p class="news_year_font">{{item.publish_time_year}}</p>
                                    </div>
                                    <div style="padding: 0 20px;box-sizing: border-box;margin-top: 12px;" class="f_left">
                                        <a :href="'notice_'+item.id+'.html'" target="_blank" class="news_title_font" style="width: 480px;">{{item.title}}</a>
                                        <p class="notify_summury_font" style="width: 480px;">{{item.summary}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 页面副内容 -->
        <div class="sub_content">
            <div class="content_box">
                <!--雷神加速器说明-->
                <div class="web_tedian_box">
                    <ul class="row-fluid">
                        <li class="span2" style="width: 20%;">
                            <img
                                    class="pos_tedian"
                                    src="../assets/images/tedian_5.png"
                                    alt="雷神加速器"
                                    width="124"
                                    style="width: 124px;">
                            <p class="product_title_font pos_tedian">{{$t("index.a12")}}</p>

                            <div class="product_font">
                                <p>{{$t("index.a13")}}</p>
                                <p>{{$t("index.a14")}}</p>
                                <p>{{$t("index.a14_1")}}</p>
                            </div>
                        </li>
                        <li class="span3" style="width: 20%;">
                            <img
                                    class="pos_tedian"
                                    src="../assets/images/tedian_2.png"
                                    alt="雷神加速器"
                                    width="124"
                                    style="width: 124px;"
                            >
                            <p class="product_title_font pos_tedian">{{$t("index.a15")}}</p>
                            <div class="product_font">
                                <p>{{$t("index.a16")}}</p>
                                <p>{{$t("index.a17")}}</p>
                                <p>{{$t("index.a17_1")}}</p>
                            </div>
                        </li>
                        <li class="span2" style="width: 20%;">
                            <img
                                    class="pos_tedian"
                                    src="../assets/images/tedian_3.png"
                                    alt="雷神加速器"
                                    width="124"
                                    style="width: 124px;">
                            <p class="product_title_font pos_tedian">{{$t("index.a18")}}</p>
                            <div class="product_font">
                                <p>{{$t("index.a19")}}</p>
                                <p>{{$t("index.a20")}}</p>
                                <p>{{$t("index.a20_1")}}</p>
                            </div>
                        </li>
                        <li class="span3" style="width: 20%;">
                            <img
                                    class="pos_tedian"
                                    src="../assets/images/tedian_1.png"
                                    alt="雷神加速器"
                                    width="124"
                                    style="width: 124px;">
                            <p class="product_title_font pos_tedian">{{$t("index.a21")}}</p>
                            <div class="product_font">
                                <p>{{$t("index.a22")}}</p>
                                <p>{{$t("index.a23")}}</p>
                                <p>{{$t("index.a23_1")}}</p>
                            </div>
                        </li>
                        <li class="span2" style="width: 20%;">
                            <img
                                    class="pos_tedian"
                                    src="../assets/images/tedian_4.png"
                                    alt="雷神加速器"
                                    width="124"
                                    style="width: 124px;">
                            <p class="product_title_font pos_tedian">{{$t("index.a24")}}</p>
                            <div class="product_font">
                                <p>{{$t("index.a25")}}</p>
                                <p>{{$t("index.a25_1")}}</p>
                                <p>{{$t("index.a26")}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--活动展示盒子-->
         <activity-box v-if="region_code == 1" :region_code="region_code" :activityurl="(activityInfo&&activityInfo.url)?activityInfo.url:'javascript:void(0)'"></activity-box>
        <!--底部导航-->
        <foot-nav :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script src="./index.js">
</script>

<style scoped>
</style>
