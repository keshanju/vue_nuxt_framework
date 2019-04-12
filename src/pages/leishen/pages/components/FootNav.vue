<template>
    <div class="foot">
        <div class="foot_content">
            <!--foot-one-->
            <div class="row-fluid pos_foot_txt1">
                <div class="span3 cursor">
                    <img :src="bakImg" alt="雷神加速器" width="150" style="width: 150px;">
                </div>
                <div class="span2">
                    <ul class="">
                        <li class="h5_font_no_hover pos_foot_txt0">
                            {{$t("nav.navlist10")}}
                        </li>
                        <li>
                            <a class="list_font pos_foot_txt3 go_recharge">{{$t("nav.navlist11")}}</a>
                        </li>
                        <li>
                            <a class="list_font pos_foot_txt3" href="activity.html">{{$t("nav.navlist12")}}</a>
                        </li>
                    </ul>
                </div>
                <div class="span2">
                    <ul class="">
                        <li class="h5_font_no_hover pos_foot_txt0">
                            {{$t("nav.navlist13")}}
                        </li>
                        <li>
                            <a class="list_font pos_foot_txt3" href="help.html"
                            >{{$t("nav.navlist14")}}</a>
                        </li>
                        <li>
                            <a class="list_font pos_foot_txt3" href="userserver.html">{{$t("nav.navlist15")}}</a>
                        </li>
                    </ul>
                </div>
                <div class="span2">
                    <ul class="">
                        <li class="h5_font_no_hover pos_foot_txt0">
                            {{$t("nav.navlist16")}}
                        </li>
                        <li class="weixin_focus" data-html="true" :data-content="weixinCode" data-toggle="popover" data-trigger="hover" data-placement="left">
                            <a class="list_font pos_foot_txt3">{{$t("nav.navlist17")}}</a>
                        </li>
                        <li class="weibo_focus" data-html="true" :data-content="weiboCode" data-toggle="popover" data-trigger="hover" data-placement="left">
                            <a class="list_font pos_foot_txt3" href="https://weibo.com/p/1006066443936086?is_hot=1" target="_blank">{{$t("nav.navlist18")}}</a>
                        </li>
                    </ul>
                </div>
                <div class="span3 f_right">
                    <!--国内显示-->
                    <ul class="text-center" v-if="region_code == 1">
                        <li>
                            <a class="kefu_box newmodal">
                                <img src="../../assets/images/qq_kfu@2x.png" alt="雷神加速器" style="width: 16px;" width="16">
                                <span>{{$t("nav.navlist19")}}</span>
                            </a>
                        </li>
                        <!---->
                        <!--<li class="web_phone_number pos_banner_txt0">-->
                        <!--021-80270833-->
                        <!--</li>-->
                        <li style="margin-top: 10px;" class="product_font">
                            {{$t("nav.navlist20")}}
                        </li>
                    </ul>
                    <!--国外显示-->
                    <div v-if="region_code == 0" class="kefu_box_en">
                        <img src="../../assets/images/email_icon.png" alt="" style="width: 28px;" width="28">
                        <p class="email_font pos_warm_txt">kf@leigod.com</p>
                        <p class="connect_email_font">{{$t("nav.navlist26")}}</p>
                    </div>
                </div>
            </div>
            <div class="solid_line"></div>
            <!--foot-two-->
            <div class="clear_fix pos_foot_txt2">
                <div class="f_left">
                    <ul>
                        <!--<li class="pos_foot_txt3">-->
                        <!--<span class="h5_font12_white">{{$t("nav.navlist21")}}</span>-->
                        <!--<span class="product_font">{{$t("nav.navlist22")}}</span>-->
                        <!--</li>-->
                        <li class="pos_foot_txt3">
                            <p class="product_font">{{$t("nav.navlist23")}}</p>
                        </li>
                        <li>
                            <p class="product_font">{{$t("nav.navlist24")}}</p>
                        </li>
                    </ul>
                </div>
                <div class="f_right">
                    <ul class="clear_fix">
                        <li class="f_left pos_foot_img">
                            <a id="_pingansec_bottomimagesmall_brand"
                               href="http://si.trustutn.org/info?sn=544171218031154034526&certType=1">
                                <img src="https://v.trustutn.org/images/cert/brand_bottom_small.jpg" style="width: 124px;height: 47px;">
                            </a>
                        </li>
                        <li class="f_left pos_foot_img">
                            <a key="5a15257a0c909623245ac96b"
                               href="http://www.cn-ecusc.org.cn/cert/aqkx/site/?site=www.leigod.com">
                                <img src="//static.anquan.org/static/outer/image/aqkx_124x47.png?id=www.leigod.com?t=79">
                            </a>
                        </li>
                        <li class="f_left pos_foot_img">
                            <a key="5a15257a0c909623245ac96b" logo_size="124x47" logo_type="business"
                               href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.leigod.com&at=business">
                                <img src="//static.anquan.org/static/outer/image/hy_124x47.png?id=www.leigod.com?t=79">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            region_code: Number,
            language: String,
            gameimg: String
        },

        data() {
            return {
                bakImg:this.gameimg||'./img/foot_logo.png'
            };
        },
        created() {
            this.initMate();
        },

        methods: {
            initMate() {
                this.weiboCode = '<img style=\'width: 158px;height: 194px;\' src=\'/img/weibo.png\' alt=\'雷神加速器\'>';
                this.weixinCode = '<img style=\'width: 158px;height: 194px;\' src=\'/img/weixin.png\' alt=\'雷神加速器\'>';
            }
        }
    };
</script>

<style scoped>
</style>
