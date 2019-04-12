<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url"
                  :page_name="pageName"></head-nav>

        <!-- banner -->
        <div id="app" class="activity_banner" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <div class="activity_sub_banner">
                <!-- 雷神活动 -->
                <p class="gonggao_title_font text-center">{{$t('news.d20')}}</p>
            </div>
        </div>
        <!-- content -->
        <div class="activity_content" style="padding-top: 70px;">
            <div class="activity_lists">
                <!--tab 栏-->
                <ul class="activity_tab_nav clear_fix">
                    <li style="margin-right: 50px;" class="f_left li_zhuanti activity_tab_li">
                        <div class="activi_tab_cell_zhuanti f_left"></div>
                        <!-- 专题活动 -->
                        <a class="activity_title_font f_right" href="activity.html">{{$t('news.d21')}}</a>
                    </li>
                    <li class="f_right li_zhouwu activity_tab_li">
                        <div class="activi_tab_cell_five f_left"></div>
                        <!-- 每周五活动 -->
                        <a class="activity_title_font f_right" href="activity.html?tab=1">{{$t('news.d22')}}</a>
                    </li>
                </ul>
                <!-- 专题活动 -->
                <ul :data-g_tab="0" class="activity_list hide">
                    <li class="clear_fix activity_li" style="" v-for="(item,index) in ztActivityList" :key="index">
                        <a class="f_left activity_img" :href="item.url == ''?'activdetails.html?id='+item.id:item.url" target="_blank">
                            <img :data-original="imageHeadUrl + item.image" :alt="item.title" class="lazyload img_filter box_radius">
                        </a>
                        <div class="f_left activity_info">
                            <div class="clear_fix">
                                <a :href="item.url == ''?'activdetails.html?id='+item.id:item.url" target="_blank" class="f_left activity_title">{{item.title}}</a>
                                <small class="f_right activity_date">{{item.create_time}}</small>
                            </div>
                            <h6 class="activity_msg">
                                {{item.summary}}
                            </h6>
                            <div class="shop_showlist" v-html="item.prize">
                            </div>
                        </div>
                    </li>
                    <li style="text-align: center;margin-top: 30px;display: none;" v-show="ztActivityList.length > 0">
                        <div class="pagination">
                            <ul :page="page">
                                <li :class="{'disabled':page == 1}">
                                    <a style="font-size: 20px;" :href="page == 1 ? 'javascript:;' : ('activity' + (page == 2 ? '' : (page - 1)) + '.html')">&laquo;</a>
                                </li>
                                <li v-for="index in zttotal" :key="index" :class="{'active':index == page}">
                                    <a :href="index == 1 ? 'activity.html' : 'activity' + index + '.html'">{{index}}</a>
                                </li>
                                <li :class="{'disabled':page == zttotal}">
                                    <a style="font-size: 20px;" :href="page == zttotal ? 'javascript:;' : ('activity' + (page + 1) + '.html')">&raquo;</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="empty_box" v-show="ztActivityList.length == 0"
                             style="height:200px;padding-top: 100px;">
                            <img src="../assets/images/empty.png" :alt="$t('news.d25')" class="empty_img">
                            <p class="empty_msg">{{$t('news.d25')}}</p>
                        </div>
                    </li>
                </ul>
                <!-- 每周五活动 -->
                <ul :data-g_tab="1" class="activity_list hide">
                    <li class="clear_fix activity_li"
                        v-for="(item,index) in zwActivityList" :key="index">
                        <div class="activity_img f_left">
                            <a class="f_left activity_img" :href="item.url == ''?'activdetails.html?id='+item.id:item.url" target="_blank">
                                <img :data-original="imageHeadUrl + item.image" :alt="item.title" class="lazyload img_filter box_radius">
                            </a>
                        </div>
                        <div class="activity_info f_left">
                            <div class="clear_fix">
                                <a :href="item.url == ''?'activdetails.html?id='+item.id:item.url" target="_blank" class="f_left activity_title">{{item.title}}</a>
                                <small class="activity_date f_right">{{item.create_time}}</small>
                            </div>
                            <h6 class="activity_msg">
                                {{item.summary}}
                            </h6>
                            <div class="shop_showlist" v-html="item.prize">
                            </div>
                        </div>
                    </li>
                    <li style="text-align: center;margin-top: 30px;" v-show="zwActivityList.length > 0">
                        <div class="pagination">
                            <ul :page="page">
                                <li :class="{'disabled':page == 1}">
                                    <a style="font-size: 20px;" :href="page == 1 ? 'javascript:;' : ('activity' + (page - 1) + '.html?tab=1')">&laquo;</a>
                                </li>
                                <li v-for="index in zwtotal" :key="index" :class="{'active':index == page}">
                                    <a  :href="index == 1 ? 'activity.html?tab=1' : 'activity' + index + '.html?tab=1'">{{index}}</a>
                                </li>
                                <li :class="{'disabled':page == zwtotal}">
                                    <a style="font-size: 20px;" :href="page == zwtotal ? 'javascript:;' : 'activity' + (page + 1) + '.html?tab=1'">&raquo;</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="empty_box" v-show="zwActivityList.length == 0"
                             style="height:200px;padding-top: 100px;">
                            <img src="../assets/images/empty.png" :alt="$t('news.d25')" class="empty_img">
                            <p class="empty_msg">{{$t('news.d25')}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script src="./activity.js">
</script>

<style scoped>
</style>
