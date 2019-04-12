<template>
    <div>
        <!-- 头部导航 -->
        <div class="wrap_of_header">
            <head-nav class="head_style" :gw_url="gw_url" :m_url="m_url" :region_code="region_code" :language="language"
                      :user_url="user_url"
                      :page_name="pageName"></head-nav>
        </div>
        <!-- container部分 -->
        <div style="background-color: #ededf2;">
            <div class="bg_banner_s1" :class="{'bg_banner_s2':language == 'zh_CN'}">
            </div>
            <div class="main_container_3">
                <!--tab栏切换部分-->
                <div style="width:100%;margin: 0 auto;padding: 0 30px;display: none;" v-show="region_code == 0">
                    <ul class="ul_com_s3">
                        <li class="li_com_s3 cursor_pointer">
                            <img class="f_left vip_img" src="../assets/images/vip_0.png" alt="">
                            <p class="f_right">{{$t("recharge.v1")}}</p>
                        </li>
                        <li class="li_com_s3 cursor_pointer">
                            <img class="f_left vip_img" src="../assets/images/vip_1.png" alt="">
                            <p class="f_right">{{$t("recharge.v2")}}</p>
                        </li>
                        <li class="li_com_s3 cursor_pointer" :class="{lis_active_s1:czTypeIndex == 2}">
                            <img class="f_left vip_img" src="../assets/images/vip_2.png" alt="">
                            <p class="f_right">{{$t("recharge.v3")}}</p>
                        </li>
                    </ul>
                </div>
                <div style="display: none;" v-show="region_code == 0">
                    <ul style="display: none;" class="ul_com_s4" v-show="czTypeIndex == 0">
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v5")}}</span>
                                <span class="font_s12">{{$t("recharge.v4")}}</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>12.95</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v6")}}</span>
                                <span class="font_s12">15.14%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>32.97</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v7")}}</span>
                                <span class="font_s12">22.86%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>59.94</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4 li_com_s4_hover li_com_s4_tj">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v8")}}</span>
                                <span class="font_s12">46.02%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>83.88</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                    </ul>
                    <ul style="display: none;" class="ul_com_s4" v-show="czTypeIndex == 1">
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v5")}}</span>
                                <span class="font_s12">{{$t("recharge.v4")}}</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>16.95</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v6")}}</span>
                                <span class="font_s12">15.14%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>43.15</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v7")}}</span>
                                <span class="font_s12">22.86%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>78.45</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4 li_com_s4_hover li_com_s4_tj">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v8")}}</span>
                                <span class="font_s12">46.02%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>109.8</span>
                            </div>
                            <a class="font_s15 hover_btn2">{{$t("recharge.v9")}}</a>
                        </li>
                    </ul>
                    <ul style="display: none;" class="ul_com_s4" v-show="czTypeIndex == 2">
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v5")}}</span>
                                <span class="font_s12">{{$t("recharge.v4")}}</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>20.95</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v6")}}</span>
                                <span class="font_s12">15.14%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>53.33</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v7")}}</span>
                                <span class="font_s12">22.86%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>96.96</span>
                            </div>
                            <a class="font_s15">{{$t("recharge.v9")}}</a>
                        </li>
                        <li class="li_com_s4 li_com_s4_hover li_com_s4_tj">
                            <div class="">
                                <span class="font_s11">{{$t("recharge.v8")}}</span>
                                <span class="font_s12">46.02%Off</span>
                            </div>
                            <div class="font_s13">
                                <b class="font_s14" v-text="region_code == 0 ? '$' : '¥'"></b>
                                <span>135.71</span>
                            </div>
                            <a class="font_s15 hover_btn2">{{$t("recharge.v9")}}</a>
                        </li>
                    </ul>
                </div>
                <div class="package_msg">
                    <ul class="package_state clearfix_a">
                        <li class="package_state_li package_state_li_dark clearfix_a">
                            <div class="state_type">{{$t("mrecharge.j9")}}</div>
                            <div class="diamond_state">{{$t("mrecharge.j12")}}</div>
                            <div class="platinum_state">{{$t("mrecharge.j11")}}</div>
                            <div class="gold_state">{{$t("mrecharge.j10")}}</div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u5")}}</div>
                            <div class="diamond_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="platinum_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="gold_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u6")}}</div>
                            <div class="diamond_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="platinum_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="gold_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u7")}}</div>
                            <div class="diamond_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="platinum_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="gold_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u8")}}</div>
                            <div class="diamond_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="platinum_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                            <div class="gold_state">
                                <img class="recharge_detail_icon" src="../assets/images/recharge_detail_icon.png"
                                     alt="">
                            </div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u9")}}</div>
                            <div class="diamond_state"><img class="recharge_detail_icon"
                                                            src="../assets/images/recharge_detail_icon.png"
                                                            alt=""></div>
                            <div class="platinum_state"><img class="recharge_detail_icon"
                                                             src="../assets/images/recharge_detail_icon.png"
                                                             alt=""></div>
                            <div class="gold_state"><img class="recharge_detail_icon"
                                                         src="../assets/images/recharge_detail_icon.png"
                                                         alt=""></div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u10")}}</div>
                            <div class="diamond_state"><img class="recharge_detail_icon"
                                                            src="../assets/images/recharge_detail_icon.png"
                                                            alt=""></div>
                            <div class="platinum_state"><img class="recharge_detail_icon"
                                                             src="../assets/images/recharge_detail_icon.png"
                                                             alt=""></div>
                            <div class="gold_state"><img class="recharge_detail_icon"
                                                         src="../assets/images/recharge_detail_icon.png"
                                                         alt=""></div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u11")}}</div>
                            <div class="diamond_state">2</div>
                            <div class="platinum_state">1</div>
                            <div class="gold_state">1</div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u12")}}</div>
                            <div class="diamond_state">100m/s</div>
                            <div class="platinum_state">20m/s</div>
                            <div class="gold_state">5m/s</div>
                        </li>
                        <li class="package_state_li clearfix_a">
                            <div class="state_type">{{$t("pexplain.u13")}}</div>
                            <div class="diamond_state">{{$t("pexplain.u14")}}</div>
                            <div class="platinum_state">{{$t("pexplain.u14")}}</div>
                            <div class="gold_state">{{$t("pexplain.u14")}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--底部导航-->
        <div class="wrap_of_footer">
            <foot-nav :region_code="region_code" :language="language"></foot-nav>
        </div>
    </div>
</template>
<script src="./recharge.js"></script>
