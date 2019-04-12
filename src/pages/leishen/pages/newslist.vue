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
                    <li class="game_li f_left">
                        <a href="news.html">{{$t("news.d5")}}</a>
                    </li>
                    <li class="game_li f_left" :data-g_label="item.label" v-for="(item,index) in gameLableList" :key="index">
                        <a :href="'newslist.html?label=' + item.label">{{item.label}}</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 游戏资讯列表 -->
        <div :data-g_label="item.label" class="game_news hide" v-for="(item,index) in gameNewsList" :key="index">
            <p class="news_path">
                <a style="font-size: 14px;" class="cursor" href="news.html">{{$t("news.d5")}}</a>
                <span style="font-size: 14px;">></span>
                <a style="font-size: 14px;">{{item.label}}</a>
            </p>
            <ul class="game_news_list" style="min-height:600px;" v-if="item.list.length > 0">
                <li class="clear_fix" style="margin-top: 10px;" v-for="(model,index) in item.list"
                    :key="index">
                    <div class="game_news_img_box f_left">
                        <a :href="'news_'+model.id+'.html'" target="_blank">
                            <img :data-original="imageHeadUrl + model.image_url" :alt="model.title" class="lazyload game_news_img">
                        </a>
                    </div>
                    <div class="game_news_info f_left">
                        <p class="game_news_title">
                            <a :href="'news_'+model.id+'.html'" target="_blank">{{model.title}}</a>
                        </p>
                        <p class="game_news_msg" style="width:100%;">{{model.summary}}</p>
                        <div class="clear_fix">
                            <p class="f_left">{{model.publish_time_year+ '-' + model.publish_time_month + '-' + model.publish_time_day}}</p>
                            <div class="share text-center f_right" style="width:200px;"></div>
                        </div>
                    </div>
                </li>
            </ul>
            <div style="text-align: center;" class="news_pagenation_box" v-show="item.list.length > 0">
                <div class="pagination">
                    <ul :page="page">
                        <li :class="{'disabled':page == 1}">
                            <a style="font-size: 20px;" :href="page == 1 ? 'javascript:;' : ('newslist' + (page == 2 ? '' : (page - 1)) + '.html?label=' + item.label)">&laquo;</a>
                        </li>
                        <li v-for="index in item.total" :key="index" :class="{'active':index == page}">
                            <a :href="index == 1 ? 'newslist.html?label=' + item.label : 'newslist' + index + '.html?label=' + item.label">{{index}}</a>
                        </li>
                        <li :class="{'disabled':page == item.total}">
                            <a style="font-size: 20px;" :href="page == item.total ? 'javascript:;' : 'newslist' + (page + 1) + '.html?label=' + item.label">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="empty_box" v-show="item.list.length == 0" style="height: 400px;padding-top: 200px;">
                <img src="../assets/images/empty.png" alt="" class="empty_img">
                <p class="empty_msg">{{$t('news.d24')}}</p>
            </div>
        </div>

        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script src="./newslist.js">

</script>

<style scoped>
</style>
