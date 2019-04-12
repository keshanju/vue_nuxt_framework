<template>
    <div>
        <div class="main_banner_s1">
            <!-- 头部 -->
            <div class="wrap_of_header bg_com1">
                <head-nav :gw_url="gw_url" :region_code="region_code" :m_url="m_url" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>
            </div>
            <p class="font_s19">{{$t("agreement.header")}}</p>
        </div>
        <div class="content_of_protocol">
            <h4 class="font_s20">{{$t("agreement.title1")}}</h4>
            <p class="font_s21">{{$t("agreement.t1_p1")}}</p>
            <p class="font_s21">{{$t("agreement.t1_p2")}}</p>
            <h4 class="font_s20">{{$t("agreement.title2")}}</h4>
            <p class="font_s21">{{$t("agreement.t2_p1")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p2")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p3")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p3_p1")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p3_p2")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p4")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p5")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p5_p1")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p5_p2")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p5_p3")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p6")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p6_p1")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p6_p2")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p6_p3")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p6_p4")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p7")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p7_p1")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p7_p2")}}</p>
            <p class="font_s22">{{$t("agreement.t2_p7_p3")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p8")}}</p>
            <p class="font_s21">{{$t("agreement.t2_p9")}}</p>
            <h4 class="font_s20">{{$t("agreement.title3")}}</h4>
            <p class="font_s21">{{$t("agreement.t3_p1")}}</p>
            <p class="font_s21">{{$t("agreement.t3_p2")}}</p>
            <p class="font_s21">{{$t("agreement.t3_p3")}}</p>
            <p class="font_s21">{{$t("agreement.t3_p4")}}</p>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./protocol.js"></script>
