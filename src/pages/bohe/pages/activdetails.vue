<template>
    <div>
        <!-- 头部导航 -->
        <div class="wrap_of_header bg_com2">
            <head-nav class="head_style" :gw_url="gw_url" :m_url="m_url" :region_code="region_code" :language="language"
                      :user_url="user_url"
                      :page_name="pageName"></head-nav>
        </div>
        <div style="padding-bottom: 30px;">
            <div class="main_mod_notify" style="padding: 60px 0 50px">
                <!-- 活动详情 -->
                <div>
                    <div class="activity_news_title_box">
                        <h4 class="activity_news_title" style="float:none;">{{details.title}}</h4>
                        <span style="margin-right: 40px; color: #666;">{{details.create_time}}</span>
                    </div>
                    <!-- 内容区-->
                    <div style="margin-top:40px;">
                        <img :src="details.image" class="item_activity_img"/>
                        <div class="item_activity_content" id="content" style="color:#666;" v-html="details.content">
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
<script src="./activdetails.js"></script>
