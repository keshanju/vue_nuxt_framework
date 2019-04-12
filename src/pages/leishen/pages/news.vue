<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <!--banner-->
        <div class="news_main_banner">
            <div class="news_sub_banner">
                <div id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
                    <p class="content_title">{{$t("news.d3")}}</p>
                    <p class="content_msg">{{$t("news.d4")}}</p>
                </div>
                <ul class="game_list clear_fix">
                    <li class="game_li f_left" :class="{'game_li_hover': tabIndex == 0}">
                        <a href="news.html">{{$t("news.d5")}}</a>
                    </li>
                    <li class="game_li f_left" v-for="(item,index) in gameLableList" :key="index"
                        :class="{'game_li_hover': tabIndex == index+1}">
                        <a :href="'newslist.html?label=' + item.label">{{item.label}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 资讯首页 -->
        <div class="news" style="display: none;" v-show="tabIndex == 0">
            <div class="clear_fix" style="">
                <div class="sy_news f_left">
                    <a href="news_50958.html" target="_blank">
                        <img src="../assets/images/web_zixun_banner.png" alt="" class="img_filter cursor lazyload">
                    </a>
                </div>
                <div class="tj_news f_right">
                    <div class="news_title">
                        <h5>{{$t("news.d6")}}</h5>
                    </div>
                    <ul class="news_list">
                        <li class="news_li" v-for="(item,index) in newsList" :key="index">
                            <a :href="'news_'+item.id+'.html'" target="_blank">{{item.title}}</a>
                        </li>
                    </ul>
                    <div class="empty_box" v-if="newsList.length == 0" style="height:200px;padding-top: 100px;">
                        <img src="../assets/images/empty.png" alt="" class="empty_img lazyload">
                        <p class="empty_msg">{{$t('news.d24')}}</p>
                    </div>
                </div>
            </div>
            <div style="margin-top: 20px;" v-if="gameLableList.length > 0">
                <div class="news_title clear_fix">
                    <h5 class="f_left" style="margin: 0;">{{gameLableList[0].label}}</h5>
                    <a class="cursor f_right" :href="'newslist.html?label=' + gameLableList[0].label" target="_blank">{{$t("news.d7")}}</a>
                </div>
                <ul class="clear_fix" style="min-height: 260px" v-if="gameLableList[0].list.length > 0">
                    <li class="new_with_img f_left" v-for="(item,index) in gameLableList[0].list.slice(0,4)" :key="index">
                        <a :href="'news_'+item.id+'.html'" target="_blank" style="width: 100%;">
                            <div class="news_img_box">
                                <img :data-original="imageHeadUrl + item.image_url" :alt="item.title" class="news_img lazyload">
                            </div>
                            <p class="game_title">{{item.title}}</p>
                            <p class="game_msg">{{item.summary}}</p>
                        </a>
                    </li>
                </ul>
                <div class="empty_box" v-show="gameLableList[0].list.length == 0"
                     style="height:200px;padding-top: 100px;">
                    <img src="../assets/images/empty.png" alt="" class="empty_img lazyload">
                    <p class="empty_msg">{{$t('news.d24')}}</p>
                </div>
            </div>
            <ul class="row-fluid" style="margin-top: 20px;">
                <li class="news_one_img f_left" style="padding-right: 28px;" v-if="gameLableList.length >= 2">
                    <news-one-img :tabindex="2" :gamename="gameLableList[1].label"
                                  :newlist="gameLableList[1].list" :imageHeadUrl="imageHeadUrl">
                    </news-one-img>
                    <div class="empty_box" v-show="gameLableList[1].list.length == 0"
                         style="height:200px;padding-top: 100px;">
                        <img src="../assets/images/empty.png" alt="" class="empty_img lazyload">
                        <p class="empty_msg">{{$t('news.d24')}}</p>
                    </div>
                </li>
                <li class="news_one_img f_left" style="padding: 0 14px;" v-if="gameLableList.length >= 3">
                    <news-one-img :tabindex="3" :gamename="gameLableList[2].label"
                                  :newlist="gameLableList[2].list" :imageHeadUrl="imageHeadUrl">
                    </news-one-img>
                    <div class="empty_box" v-show="gameLableList[2].list.length == 0"
                         style="height:200px;padding-top: 100px;">
                        <img src="../assets/images/empty.png" alt="" class="empty_img lazyload">
                        <p class="empty_msg">{{$t('news.d24')}}</p>
                    </div>
                </li>
                <li class="news_one_img f_left" style="padding-left: 28px;" v-if="gameLableList.length >= 4">
                    <news-one-img :tabindex="4" :gamename="gameLableList[3].label"
                                  :newlist="gameLableList[3].list" :imageHeadUrl="imageHeadUrl">
                    </news-one-img>
                    <div class="empty_box" v-show="gameLableList[3].list.length == 0"
                         style="height:200px;padding-top: 100px;">
                        <img src="../assets/images/empty.png" alt="" class="empty_img lazyload">
                        <p class="empty_msg">{{$t('news.d24')}}</p>
                    </div>
                </li>
            </ul>
            <div class="clear_fix" style="margin-top: 20px;">
                <div style="width: 786px;padding-right: 14px;" class="f_left" v-if="gameLableList.length > 4 && gameLableList[4].list.length > 0">
                    <div class="news_title clear_fix">
                        <h5 class="f_left" style="margin: 0;">{{gameLableList[4].label}}</h5>
                        <a class="cursor f_right" :href="'newslist.html?label=' + gameLableList[4].label" target="_blank">{{$t("news.d7")}}</a>
                    </div>
                    <ul class="news_row_img" style="min-height:276px;">
                        <li class="new_row_img_li clear_fix" v-for="(item,index) in gameLableList[4].list.slice(0,3)"
                            :key="index" style="margin-top: 15px;">
                            <a :href="'news_'+item.id+'.html'" target="_blank">
                                <div class="news_row_img_box f_left">
                                    <img :data-original="imageHeadUrl + item.image_url" :alt="item.title" class="new_row_img lazyload">
                                </div>
                                <div class="f_left">
                                    <p class="game_title">{{item.title}}</p>
                                    <p class="game_msg" style="width:100%;">{{item.summary}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="f_right" v-if="gameLableList.length > 5 && gameLableList[5].list.length > 0" style="width: 372px;padding-left: 28px;">
                    <div class="news_title clear_fix">
                        <h5 class="f_left" style="margin: 0;">{{gameLableList[5].label}}</h5>
                        <a class="cursor f_right" :href="'newslist.html?label=' + gameLableList[5].label">{{$t("news.d7")}}</a>
                    </div>
                    <div class="news_only_one">
                        <a :href="'news_'+gameLableList[5].list[0].id+'.html'" target="_blank" style="display:block;width:100%;height:100%;">
                            <img :data-original="imageHeadUrl + gameLableList[5].list[0].image_url" :alt="gameLableList[5].list[0].title" class="news_only_one_img lazyload">
                            <p class="news_only_one_msg">{{gameLableList[5].list[0].title}}</p>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="row-fluid" style="margin-top: 20px;">
                <li class="news_one_img f_left" style="padding-right: 28px;" v-if="gameLableList.length > 6 && gameLableList[6].list.length > 0">
                    <news-one-img :tabindex="4" :gamename="gameLableList[7].label" :newlist="gameLableList[6].list" :imageHeadUrl="imageHeadUrl"></news-one-img>
                </li>
                <li class="news_one_img f_left" style="padding: 0 14px;" v-if="gameLableList.length > 7 && gameLableList[7].list.length > 0">
                    <news-one-img :tabindex="4" :gamename="gameLableList[7].label" :newlist="gameLableList[7].list" :imageHeadUrl="imageHeadUrl"></news-one-img>
                </li>
                <li class="news_one_img f_left" style="padding-left: 28px;" v-if="gameLableList.length > 8 && gameLableList[8].list.length > 0">
                    <news-one-img :tabindex="4" :gamename="gameLableList[7].label" :newlist="gameLableList[8].list" :imageHeadUrl="imageHeadUrl"></news-one-img>
                </li>
            </ul>
        </div>

        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script src="./news.js">

</script>

<style scoped>
</style>
