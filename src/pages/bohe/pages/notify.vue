<template>
    <div>
        <!-- 头部导航 -->
        <div class="wrap_of_header">
            <head-nav logo_url="./img/logo.png"  class="head_style" :m_url="m_url" :gw_url="gw_url" :region_code="region_code" :language="language"
                      :user_url="user_url"
                      :page_name="pageName"></head-nav>
        </div>
        <div style="padding-bottom: 30px; background: #ededf2;">
            <div class="top_mod_notify">
                <h1 class="page_title_font">{{$t("notify.y1")}}</h1>
            </div>
            <div class="inner_contentbox" style="padding: 30px 0;">
                <ul class="clearfix_a">
                    <li class="subcontent_notify" v-for="(item , index) in notifyList" :key="index">
                        <div style="margin-bottom: 20px;position: relative;">
                            <span class="subcontent_notify-time"
                                  v-text="item.publish_time_month+'.'+item.publish_time_day"></span><span
                                class="subcontent_notify-year" v-text="item.publish_time_year"></span>
                        </div>
                        <p class="subcontent_notify-title" style="height: 48px;" v-text="item.title"></p>
                        <i class="line_notify-solid"></i>
                        <p class="subcontent_notify-txt" v-text="item.summary" style="height:144px;"></p>
                        <div style="margin: 20px auto;" class="text-center">
                            <a class="font_s23" :href="'notice_'+item.id+'.html'" target="_blank" style="color: #5198ff;">{{$t("notify.y2")}}</a>
                        </div>
                    </li>
                </ul>
                <div class="pagination" v-show="notifyList.length > 0" style="text-align: center;">
                    <ul :page="page">
                        <li :class="{'disabled':page == 1}">
                            <a style="font-size: 20px;" :href="page == 1 ? 'javascript:;' : ('notify' + (page == 2 ? '' : (page - 1)) + '.html')">&laquo;</a>
                        </li>
                        <li v-for="index in total" :key="index" :class="{'active':index == page}">
                            <a :href="index == 1 ? 'notify.html' : 'notify' + index + '.html'">{{index}}</a>
                        </li>
                        <li :class="{'disabled':page == total}">
                            <a style="font-size: 20px;" :href="page == total ? 'javascript:;' : ('notify' + (page + 1) + '.html')">&raquo;</a>
                        </li>
                    </ul>
                </div>
                <div class="empty_box" v-show="notifyList.length == 0">
                    <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                    <p class="empty_msg">{{$t("puser.r13")}}</p>
                </div>
            </div>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./notify.js"></script>

