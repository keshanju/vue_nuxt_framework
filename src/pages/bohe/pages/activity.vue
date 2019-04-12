<template>
    <div>
        <!-- 头部导航 -->
        <div class="wrap_of_header bg_com2">
            <head-nav class="head_style" :gw_url="gw_url" :m_url="m_url" :region_code="region_code" :language="language"
                      :user_url="user_url"
                      :page_name="pageName"></head-nav>
        </div>
        <div style="padding-bottom: 30px;">
            <div class="top_mod_activity">
                <h1 class="page_title_font">{{$t("notify.y4")}}</h1>
            </div>
            <div class="inner_contentbox" style="padding: 40px 0;">
                <div class="f_left" style="width: 800px;">
                    <ul class="clearfix_a" v-show="activityList.length > 0">
                        <li class="subcontent_activity" v-for="(item , index) in activityList" :key="index"
                            @click="goActivityDetail(item)">
                            <div class="subcontent_activity-img">
                                <img :src="imageHeadUrl + item.image" alt="" class="img_filter">
                            </div>
                            <div class="subcontent_activity-info">
                                <div class="clearfix_a">
                                    <div class="activity-info_on" v-if="item.time_status == 1">进行中</div>
                                    <div class="activity-info_off" v-if="item.time_status == 0">已结束</div>
                                    <h3 class="activity-info_title">{{item.title}}</h3>
                                </div>
                                <p class="activity-info_msg words_flow">
                                    {{item.summary}}
                                </p>
                                <p class="activity-info_time">{{item.start_time}}</p>
                            </div>
                        </li>
                    </ul>
                    <div class="empty_box" v-show="activityList.length == 0">
                        <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                        <p class="empty_msg">{{$t("puser.r10")}}</p>
                    </div>
                    <div class="pagination" v-show="activityList.length > 0" style="text-align: center;">
                        <ul :page="page">
                            <li :class="{'disabled':page == 1}">
                                <a style="font-size: 20px;"
                                   :href="page == 1 ? 'javascript:;' : ('activity' + (page == 2 ? '' : (page - 1)) + '.html')">&laquo;</a>
                            </li>
                            <li v-for="index in total" :key="index" :class="{'active':index == page}">
                                <a :href="index == 1 ? 'activity.html' : 'activity' + index + '.html'">{{index}}</a>
                            </li>
                            <li :class="{'disabled':page == total}">
                                <a style="font-size: 20px;"
                                   :href="page == total ? 'javascript:;' : ('activity' + (page + 1) + '.html')">&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="f_right" style="width: 300px;margin-right: 10px;">
                    <!--下载列表-->
                    <div class="shadow_download shadow_box">
                        <h3 class="shadow_download-font_title">{{$t("foot.c12")}}</h3>
                        <ul class="clear_fix" style="margin: 20px 0;">
                            <li class="shadow_download-cell" style="margin: 0 10px 0 5px;" @click="windowsDownload">
                                <i class="spirit_box"></i>
                                <p class="shadow_download-txt">Windows</p>
                            </li>
                            <li class="shadow_download-cell android_down" style="margin: 0 10px;" data-html="true"
                                :data-content="androidDownContent" data-toggle="popover" data-container="body" data-trigger="hover"
                                data-placement="top">
                                <i class="spirit_box"></i>
                                <p class="shadow_download-txt">Android</p>
                            </li>
                            <li class="shadow_download-cell" style="margin: 0 10px;">
                                <i class="spirit_box"></i>
                                <p class="shadow_download-txt">Mac</p>
                            </li>
                            <li class="shadow_download-cell ios_down" style="margin: 0 5px 0 10px;" data-html="true"
                                :data-content="androidDownContent" data-container="body" data-toggle="popover" data-trigger="hover"
                                data-placement="top">
                                <i class="spirit_box"></i>
                                <p class="shadow_download-txt">iPhone/iPad</p>
                            </li>
                        </ul>
                    </div>
                    <!--薄荷资讯-->
                    <div style="margin-top: 35px;" class="shadow_box">
                        <div class="sidebar_cell-top">
                            <h3 class="sidebar_cell-title f_left">资讯</h3>
                            <a class="morefonts f_right" href="news.html">more+</a>
                        </div>
                        <ul style="margin-top: 20px;">
                            <li class="sidebar_cell-info" v-for="(item,index) in hotNewList" :key="index"
                                @click="gonewsdetail(item.id)">{{item.title}}
                            </li>
                        </ul>
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
<script src="./activity.js"></script>
