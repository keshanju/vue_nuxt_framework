<template>
    <div>
        <!-- 头部导航 -->
        <div class="wrap_of_header">
            <head-nav logo_url="./img/logo.png"   class="head_style" :gw_url="gw_url" :m_url="m_url" :region_code="region_code" :language="language"
                      :user_url="user_url"
                      :page_name="pageName"></head-nav>
        </div>
        <div class="main_container_2" style="width:1200px;margin:0 auto;" >
            <div style="cursor: pointer;">
                <img @click="goNewsDetail(2)" src="./../assets/images/zixun_banner.jpg" alt="">
            </div>
            <div class="pos_r" style="margin-top: 15px;">
                <b class="icon_s1"></b>
                <p class="font_s10">{{$t("detailsnews.d3")}}</p>
                <div class="ul_com_s2 clear_fix" style="margin: 20px 0;">
                    <div class="li_com_s2" v-for="(item , index) in newsListTop" :key="index"
                         @click="goNewsDetail(item.id)">
                        <a>
                            <img style="height: 130px;" :src="imageHeadUrl + item.image_url" alt="">
                            <h1 class="font_s9" v-text="item.title"></h1>
                            <p class="news_summary" v-text="item.summary"></p>
                        </a>
                    </div>
                    <div class="empty_show" v-show="newsListTop.length == 0">
                        <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                        <p class="empty_msg">{{$t("pgame.n2")}}</p>
                    </div>
                </div>
            </div>
            <div class="clearfix_a">
                <div style="width:80%;float: left;" class="pos_r">
                    <b class="icon_s1"></b>
                    <p class="font_s10">{{$t("detailsnews.d4")}}</p>
                    <ul class="ul_com_s2">
                        <li class="news_li clearfix_a" v-for="(item , index) in newsList" :key="index">
                            <a>
                                <div class="news_picture" style="width: 25%;float: left;" @click="goNewsDetail(item.id)">
                                    <img class="img_filter new_img" :src="imageHeadUrl + item.image_url" alt="">
                                </div>
                            </a>
                            <div class="news_info">
                                <a>
                                    <h1 class="font_s9" v-text="item.title" @click="goNewsDetail(item.id)"></h1>
                                    <p class="news_summary" v-text="item.summary"></p>
                                </a>
                                <div class="data_share clearfix_a">
                                    <div class="data" style="color:#333;"
                                         v-text="item.publish_time_year + '-' + item.publish_time_month + '-' + item.publish_time_day"></div>
                                    <div class="share">
                                        <share-to :item="item" :current="current"></share-to>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="empty_show" v-show="newsList.length == 0">
                        <img class="empty_img" src="../assets/images/empty_event.png" alt="">
                        <p class="empty_msg">{{$t("pgame.n2")}}</p>
                    </div>
                    <div class="pagination" v-show="newsList.length > 0" style="text-align: center;">
                        <ul :page="page">
                            <li :class="{'disabled':page == 1}">
                                <a style="font-size: 20px;"
                                   :href="page == 1 ? 'javascript:;' : ('news' + (page == 2 ? '' : (page - 1)) + '.html')">&laquo;</a>
                            </li>
                            <li v-for="index in total" :key="index" :class="{'active':index == page}">
                                <a style="color: #999999;" :href="index == 1 ? 'news.html' : 'news' + index + '.html'">{{index}}</a>
                            </li>
                            <li :class="{'disabled':page == total}">
                                <a style="font-size: 20px;color: #999999;"
                                   :href="page == total ? 'javascript:;' : ('notify' + (page + 1) + '.html')">&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="width:20%;float: right;" class="pos_r">
                    <details-news :mobilNewList="mobilNewList" :hotNewList="hotNewList"></details-news>
                </div>
            </div>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./news.js"></script>
