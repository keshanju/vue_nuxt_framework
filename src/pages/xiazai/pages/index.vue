<template>
    <div id="xiazaiLeigod_Index">
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :base_url="baseUrl" :region_code="region_code" :language="language" :user_url="user_url"
                  :page_name="pageName"></head-nav>

        <div class="downsite_banner_box" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url"
             :region_code="region_code" :language="language" >
            <img style="max-width: none" src="../assets/images/downsite_banner.png"
                 class="pause_banner">
            <div class="downsite_abs_box">
                <img class="f_left" src="../assets/images/downsite_top_logo.png">
                <div class="f_left" style="margin-left: 40px;">
                    <h3 class="site_title">雷神游戏下载专题站</h3>
                    <div class="site_info" style="max-width:760px;">
本站提供最新版网络游戏安装包、Apex英雄、绝地求生、PUBG lite、战地风云等火热游戏光速下载， 另支持Origin（橘子平台）、Uplay（育碧）、Steam等平台游戏下载，热门主机/单机/联机/手游/网游应用程序在线极速下载。 支持电信、移动、联通、铁通等网络下载，金融级专线节点遍布全国，最高达到20M/S， 游戏随下随玩。使用阿里云、腾讯云高级服务器配置，再也不用100kb/S的苦苦等待。雷神游戏下载站，下载、游戏加速，为您打造一站式体验！
                    </div>
                </div>
            </div>
        </div>
        <div class="downsite_content_box">
                <nuxt-child/>
        </div>
        <!--<div id="downTipLogin" style="display:none;">-->
            <!--<p>你需要先登陆，</p>-->
        <!--</div>-->
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav :base_url="baseUrl" class="gamesite_foot_nav" gameimg="./img/down_logo_footer.png" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>
<script src="./index.js"></script>
