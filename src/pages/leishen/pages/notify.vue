<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url"
                  :page_name="pageName"></head-nav>

        <!-- banner -->
        <div id="app" class="gonggao_banner" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <p class="gonggao_title_font text-center">{{$t('news.d16')}}</p>
        </div>

        <!-- contend -->
        <div class="activity_content" style="padding-top: 70px;">
            <!-- 专题活动 -->
            <ul class="activity_lists">
                <li class="clear_fix notice_li" v-for="(item,index) in notifyList" :key="index">
                    <div class="notice_date f_left text-center">
                        <img class="riqi_box" src="../assets/images/riqi.png" alt="" style="width:70px;height:75px;">
                        <div style="position: relative;left: 0;top: 0;">
                            <h6 class="notice_date_year_month">{{item.publish_time_year + '-' +
                                item.publish_time_month}}</h6>
                            <h5 class="notice_date_day">{{item.publish_time_day}}</h5>
                        </div>
                    </div>
                    <div class="notice_info f_left">
                        <a class="activity_title" style="margin: 0;" :href="'notice_'+item.id+'.html'" target="_blank">
                            {{item.title}}
                        </a>
                        <h6 class="activity_msg">
                            {{item.summary}}
                        </h6>
                    </div>
                </li>
                <li style="text-align: center;margin-top: 30px;display: none;" v-show="notifyList.length > 0">
                    <div class="pagination">
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
                </li>
                <li style="display: none;" v-show="notifyList.length == 0">
                    <div class="empty_box" style="height: 400px;padding-top: 200px;">
                        <img src="../assets/images/empty.png" alt="" class="empty_img">
                        <p class="empty_msg">{{$t('news.d23')}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>

<script src="./notify.js">
</script>

<style scoped>
</style>
