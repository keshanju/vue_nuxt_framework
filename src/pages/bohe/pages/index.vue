<template>
    <div :class="region_code == 1 ? 'index_cn' : 'index_en'">
        <!--banner展示区+下载列表-->
        <div class="banner">
            <!-- 头部导航 -->
            <div class="wrap_of_header">
                <head-nav :gw_url="gw_url" :region_code="region_code" :m_url="m_url" :language="language" :user_url="user_url" :pageName="pageName"></head-nav>
            </div>
            <!-- 头部导航 -->
            <img style="margin: 187px 0 20px;" src="../assets/images/logo_header.png" alt="">
            <div style="display: none" class="banner_box" v-show="region_code == 0">
                <h1 class="banner_title_font">{{$t("index.b1")}}</h1>
                <h2 style="margin: 30px auto;" class="banner_sub_title_font">{{$t("index.b2")}}</h2>
                <p style="margin: 0 auto 45px;">{{$t("index.b3")}}</p>
            </div>
            <div style="display: none" class="banner_box" v-show="region_code == 1">
                <h1 class="banner_title_font">{{$t("index.b20")}}</h1>
                <h2 style="margin: 30px auto;" class="banner_sub_title_font">{{$t("index.b21")}}</h2>
            </div>
            <!--免费使用-->
            <div class="clearfix_a" style="width: 395px;margin: 0 auto;">
                <a class="btnbox-transparent f_left" :href="windowsDownloadUrl">{{$t("index.b4")}}</a>
                <a class="btnbox-transparent f_left" href="about.html" style="margin-left: 15px;">{{$t("index.b5")}}</a>
            </div>
            <!-- v-show="webParam.infrom == 0"-->
            <div style="margin-top: 130px;" class="downclient">
                <div class="top_title">
                    {{$t("index.b6")}}
                </div>
                <div class="downclientbox">
                    <ul class="clearfix_a">
                        <li class="downclientbox-cell">
                            <i class="iconbox windows_icon"></i>
                            <p>Windows</p>
                        </li>
                        <li style="display: none" class="downclientbox-cell">
                            <i class="iconbox mac_icon"></i>
                            <p>Mac</p>
                        </li>
                        <li class="downclientbox-cell android_down" data-html="true"  :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                            <i class="iconbox android_icon"></i>
                            <p>Android</p>
                        </li>
                        <li class="downclientbox-cell ios_down" data-html="true"  :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                            <i class="iconbox ios_icon"></i>
                            <p>iOS</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--主内容区main-content-->
        <!-- 薄荷加速涵盖范围(国外显示) -->
        <div style="display: none;margin: 0 auto;" class="" v-show="region_code == 0">
            <ul class="clearfix_a">
                <li class="item_imgone item_img">
                    <a class="video_acc_bh show_bh">
                        <img src="../assets/images/vidio.png" alt="" class="img_filter">
                        <div class="item_main">
                            <i class="item_icon icon_video"></i>
                            <p class="item_title">{{$t("index.b10")}}</p>
                        </div>
                        <div class="item_msg">
                            <div class="item_shadow">
                                <p class="item_title">{{$t("index.b10")}}</p>
                                <p class="item_content">{{$t('index.b11')}}
                                </p>
                                <img class="item_content_img" src="../assets/images/vidio 2.png">
                            </div>
                        </div>
                    </a>
                </li>
                <li class="item_imgone item_img">
                    <a class="game_acc_bh show_bh">
                        <img src="../assets/images/game.png" alt="" class="img_filter">
                        <div class="item_main">
                            <i class="item_icon icon_game"></i>
                            <p class="item_title">{{$t("index.b12")}}</p>
                        </div>
                        <div class="item_msg">
                            <div class="item_shadow">
                                <p class="item_title">{{$t("index.b12")}}</p>
                                <p class="item_content">{{$t('index.b13')}}</p>
                                <img class="item_content_img" src="../assets/images/game 2.png">
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="clearfix_a">
                <li class="item_imgtwo item_img">
                    <a class="live_acc_bh show_bh">
                        <img src="../assets/images/live.png" alt="" class="img_filter">
                        <div class="item_main">
                            <i class="item_icon icon_live"></i>
                            <p class="item_title">{{$t("index.b14")}}</p>
                        </div>
                        <div class="item_msg">
                            <div class="item_shadow">
                                <p class="item_title">{{$t("index.b14")}}</p>
                                <p class="item_content">{{$t('index.b15')}}</p>
                                <img class="item_content_img" src="../assets/images/live 2.png">
                            </div>
                        </div>
                    </a>
                </li>
                <li class="item_imgtwo item_img">
                    <a class="music_acc_bh show_bh">
                        <img src="../assets/images/music.png" alt="" class="img_filter">
                        <div class="item_main">
                            <i class="item_icon icon_muic"></i>
                            <p class="item_title">{{$t("index.b16")}}</p>
                        </div>
                        <div class="item_msg">
                            <div class="item_shadow">
                                <p class="item_title">{{$t("index.b16")}}</p>
                                <p class="item_content">{{$t('index.b17')}}</p>
                                <img class="item_content_img" src="../assets/images/muic 2.png">
                            </div>
                        </div>
                    </a>
                </li>
                <li class="item_imgtwo item_img">
                    <a class="web_acc_bh show_bh">
                        <img src="../assets/images/web.png" alt="" class="img_filter">
                        <div class="item_main">
                            <i class="item_icon icon_web"></i>
                            <p class="item_title">{{$t("index.b18")}}</p>
                        </div>
                        <div class="item_msg">
                            <div class="item_shadow">
                                <p class="item_title">{{$t("index.b18")}}</p>
                                <p class="item_content">{{$t('index.b19')}}</p>
                                <img class="item_content_img" src="../assets/images/web 2.png">
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 薄荷加速涵盖范围(国内显示) -->
        <div style="display: none" v-show="region_code == 1">
            <ul class="advantagebox clear_fix">
                <li class="advantage-cell">
                    <div class="advantage-cell_img">
                        <img style="width: 70px;height: 70px;" src="../assets/images/advantage_img01.png" alt="">
                    </div>
                    <h3 class="advantage-cell_title">{{$t("index.b26")}}</h3>
                    <p class="advantage-cell_detail">{{$t("index.b30")}}</p>
                </li>
                <li class="advantage-cell">
                    <div class="advantage-cell_img">
                        <img style="width: 70px;height: 70px;" src="../assets/images/advantage_img02.png" alt="">
                    </div>
                    <h3 class="advantage-cell_title">{{$t("index.b27")}}</h3>
                    <p class="advantage-cell_detail">{{$t("index.b31")}}</p>
                </li>
                <li class="advantage-cell">
                    <div class="advantage-cell_img">
                        <img style="width: 70px;height: 70px;" src="../assets/images/advantage_img03.png" alt="">
                    </div>
                    <h3 class="advantage-cell_title">{{$t("index.b28")}}</h3>
                    <p class="advantage-cell_detail">{{$t("index.b32")}}</p>
                </li>
                <li class="advantage-cell">
                    <div class="advantage-cell_img">
                        <img style="width: 70px;height: 70px;" src="../assets/images/advantage_img04.png" alt="">
                    </div>
                    <h3 class="advantage-cell_title">{{$t("index.b29")}}</h3>
                    <p class="advantage-cell_detail">{{$t("index.b33")}}</p>
                </li>
            </ul>
        </div>
        <!-- 薄荷活动活动公告咨询 -->
        <div class="wrap_of_content_bh clearfix_a" style="display: none" v-show="region_code == 0">
            <!-- 最新活动 -->
            <div style="width: 428px;" class="f_left">
                <!--顶部公用-->
                <div class="clearfix_a" style="margin-bottom: 24px;">
                    <p style="font-size: 18px" class="f_left">{{$t("index.b7")}}</p>
                    <a class="f_right" href="activity.html">more+</a>
                </div>
                <!--图片展示-->
                <div style="max-height: 260px;" class="clear_fix" v-for="(item , index) in activityList" :key="index">
                    <a class="show_bh">
                        <img :src="imageHeadUrl + item.image" alt="" class="show_bh img_filter">
                    </a>
                </div>
                <!--图片为空-->
                <div style="display: none" class="empty_show" v-show="activityList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" style="width: 92px;height: 92px;"
                         alt="">
                    <p class="empty_msg">{{$t("index.b23")}}</p>
                </div>
            </div>
            <!-- 公告列表 -->
            <div style="width: 340px;margin-left: 35px;" class="f_left">
                <div class="clearfix_a" style="margin-bottom: 24px;">
                    <p style="font-size: 18px" class="f_left">{{$t("index.b8")}}</p>
                    <a class="f_right" href="notify.html">more+</a>
                </div>
                <div class="item_notice clearfix_a" v-for="(item , index) in notifyList" :key="index">
                    <a style="width: 75%;" class="f_left words_flow" :href="'notice_'+item.id+'.html'" v-text="item.title"></a>
                    <span style="width: 25%;;text-align: right;" class="f_right words_flow">{{item.publish_time_year}}/{{item.publish_time_month}}/{{item.publish_time_day}}</span>
                </div>
                <div style="display: none" class="empty_show" v-show="notifyList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                    <p class="empty_msg">{{$t("index.b24")}}</p>
                </div>
            </div>
            <!-- 资讯列表 -->
            <div style="width: 340px;margin-left: 35px;" class="f_left">
                <div class="clearfix_a" style="margin-bottom: 24px;">
                    <p style="font-size: 18px" class="f_left">{{$t("index.b9")}}</p>
                    <a class="f_right" href="news.html">more+</a>
                </div>
                <div class="item_notice clearfix_a" v-for="(item , index) in newsList" :key="index">
                    <a style="width: 75%;" class="f_left words_flow" :href="'news_'+item.id+'.html'" v-text="item.title"></a>
                    <span style="width: 25%;text-align: right;" class="f_right words_flow">{{item.publish_time_year}}/{{item.publish_time_month}}/{{item.publish_time_day}}</span>
                </div>
                <div style="display: none" class="empty_show" v-show="newsList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                    <p class="empty_msg">{{$t("index.b25")}}</p>
                </div>
            </div>
        </div>
        <!-- 薄荷活动公告咨询 -->
        <div class="wrap_of_content_bh clearfix_a" style="display: none" v-show="region_code == 1">
            <!-- 公告列表 -->
            <div style="width: 554px;margin-left: 35px;" class="f_left">
                <div class="clearfix_a" style="margin-bottom: 24px;">
                    <p style="font-size: 18px" class="f_left">{{$t("index.b8")}}</p>
                    <a class="f_right morefonts" href="notify.html">more+</a>
                </div>
                <div class="item_notice clearfix_a" v-for="(item , index) in notifyList" :key="index">
                    <a style="width: 75%;" class="f_left words_flow item_notice_font" :href="'notice_'+item.id+'.html'" v-text="item.title"></a>
                    <span style="width: 25%;;text-align: right;" class="f_right words_flow item_notice_font">{{item.publish_time_year}}/{{item.publish_time_month}}/{{item.publish_time_day}}</span>
                </div>
                <div style="display: none" class="empty_show" v-show="notifyList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                    <p class="empty_msg">{{$t("index.b24")}}</p>
                </div>
            </div>
            <!-- 资讯列表 -->
            <div style="width: 554px;margin-left: 35px;" class="f_left">
                <div class="clearfix_a" style="margin-bottom: 24px;">
                    <p style="font-size: 18px" class="f_left">{{$t("index.b9")}}</p>
                    <a class="f_right morefonts" href="news.html">more+</a>
                </div>
                <div class="item_notice clearfix_a" v-for="(item , index) in newsList" :key="index">
                    <a style="width: 75%;" class="f_left words_flow item_notice_font" :href="'news_'+item.id+'.html'" v-text="item.title"></a>
                    <span style="width: 25%;text-align: right;" class="f_right words_flow item_notice_font">{{item.publish_time_year}}/{{item.publish_time_month}}/{{item.publish_time_day}}</span>
                </div>
                <div style="display: none" class="empty_show" v-show="newsList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                    <p class="empty_msg">{{$t("index.b25")}}</p>
                </div>
            </div>
        </div>
        <!-- 国内显示 ，注册免费加速-->
        <div style="display: none" class="wrap_service" v-show="region_code == 1">
            <ul class="service clearfix_a">
                <li class="service_item">
                    <div class="service-icon">
                        <img src="../assets/images/fw_icon01.png" alt="" v-show="language == 'zh_CN'">
                        <img src="../assets/images/fw_icon01_en.png" alt="" v-show="language == 'en'">
                    </div>
                    <div class="service-msg">
                        <p class="service_title-msg">{{$t("index.b34")}}</p>
                        <p class="service_content-msg">{{$t("index.b37")}}</p>
                    </div>
                </li>
                <li class="service_item">
                    <div class="service-icon">
                        <img src="../assets/images/fw_icon02.png" alt="">
                    </div>
                    <div class="service-msg">
                        <p class="service_title-msg">{{$t("index.b35")}}</p>
                        <p class="service_content-msg">{{$t("index.b38")}}</p>
                    </div>
                </li>
                <li class="service_item">
                    <div class="service-icon">
                        <img src="../assets/images/fw_icon03.png" alt="">
                    </div>
                    <div class="service-msg">
                        <p class="service_title-msg">{{$t("index.b36")}}</p>
                        <p class="service_content-msg">{{$t("index.b39")}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./index.js">
</script>