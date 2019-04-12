<template>
    <div class="footnav_box" style="height: 288px;">
        <div class="footnav_cell clearfix_a">
            <!--关于我们部分-->
            <div class="f_left">
                <dl style="margin-bottom: 35px;">
                    <dt style="display: inline;margin-right: 15px;"><a style="color:#fff;font-size: 14px">{{$t("foot.c1")}}</a>
                    </dt>
                    <dd style="margin: 0 10px;display: inline;"><a class="foot_link_font">{{$t("foot.c2")}}</a></dd>
                    <dd style="margin: 0 10px;display: inline;"><a class="foot_link_font">{{$t("foot.c3")}}</a></dd>
                </dl>
                <dl>
                    <dt style="display: inline;margin-right: 15px;"><a style="color:#fff;font-size: 14px">{{$t("foot.c4")}}</a>
                    </dt>
                    <dd style="margin: 0 10px;display: inline;"><a class="foot_link_font">{{$t("foot.c5")}}</a></dd>
                    <dd style="margin: 0 10px;display: inline;" v-show="region_code == 0"><a class="foot_link_font">{{$t("foot.c6")}}</a>
                    </dd>
                    <dd style="margin: 0 10px;display: inline;"><a class="foot_link_font">{{$t("foot.c8")}}</a></dd>
                </dl>
            </div>
            <!--关注我们部分-->
            <div class="focuson_box clearfix_a">
                <div class="wechat_img f_left" style="margin-right:40px;">
                    <p class="txt">{{$t("foot.c9")}}</p>
                    <img src="../../assets/images/wechat.png" alt="" style="width: 90px">
                </div>
                <div class="weibo_img f_left">
                    <p class="txt">{{$t("foot.c10")}}</p>
                    <img src="../../assets/images/weibo.png" alt="" style="width: 90px;">
                </div>
            </div>
            <!--联系我们部分-->
            <div style="width: 300px;" class="f_right">
                <p class="foot_link_font" style="margin-bottom: 20px;">{{$t("foot.c11")}}<br>{{$t("foot.c14")}}</p>
                <a v-if="region_code == 0" class="email_of_bh" href="mailto:customer@bohe.com">customer@bohe.com</a>
                <p style="margin-top: 10px"></p>
                <p v-if="region_code == 0&&language=='zh_CN'" style="color: #fff;margin-top: -15px;margin-bottom: 8px;">
                    {{$t("foot.c15")}}</p>
                <a v-if="region_code == 1" class="public_btn" @click="onChart" style="padding: 10px 20px;">{{$t("head.a14")}}</a>
                <p style="margin-top: 20px"></p>
                <a target="_blank" href="https://weibo.com/u/6713214878"><img style="width: 60px;height: 22px;" src="../../assets/images/weibo_gz.png"/></a>
            </div>
        </div>
        <!---->
        <div style="padding: 20px 0;">
            <p style="margin-bottom: 25px;font-size: 12px;color: #fff;">{{$t("foot.c12")}}</p>
            <div class="clearfix_a horizen_download-box" style="position: relative;overflow: visible;">
                <ul class="clearfix_a f_left" style="margin-top: 15px;overflow: visible;">
                    <li class="horizen_download-cell">
                        <i class="spirit_box"></i>
                        <span class="horizen_download-txt f_right">Windows</span>
                    </li>
                    <li class="horizen_download-cell" style="margin-left: 30px;display: none;">
                        <i class="spirit_box"></i>
                        <span class="horizen_download-txt f_right">Mac</span>
                    </li>
                    <li class="horizen_download-cell" id="footerDownAndroid" style="margin-left: 30px" data-container="body" data-html="true" :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="top">
                        <i class="spirit_box"></i>
                        <span class="horizen_download-txt f_right">Android</span>
                    </li>
                    <li class="horizen_download-cell" id="footerDownIos" style="margin-left: 30px" data-html="true" data-container="body" :data-content="androidDownContent" data-toggle="popover"  data-trigger="hover" data-placement="right">
                        <i class="spirit_box"></i>
                        <span class="horizen_download-txt f_right">iOS</span>
                    </li>
                </ul>
                <div style="position: absolute;left: 55%;margin-left: -125px;width: 250px;margin-top: 15px;">
                    <a target="_blank" href="https://v.yunaq.com/certificate?domain=www.bohe.com&from=label&code=90030">
                        <img style="width: 110px;height: 40px;" src="https://aqyzmedia.yunaq.com/labels/label_sm_90030.png">
                    </a>
                    <a style="margin-left: 20px;" target="_blank" id="_pingansec_bottomimagesmall_brand" href="http://si.trustutn.org/info?sn=856181109037266429071&certType=1">
                        <img style="width: 110px;height: 40px;" src="https://v.trustutn.org/images/cert/brand_bottom_small.jpg"/>
                    </a>
                </div>
                <div style="width:300px;" class="f_right">
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010602003069" style="display: block;height:20px;line-height:20px;padding-bottom:5px;">
                        <img src="../../assets/images/beian_icon.png" alt="">
                        <span style="height:20px;line-height:20px;margin-left: 5px;color:#939393;">鄂公网安备 42010602003069号</span>
                    </a>
                    <p class="beian_num_bh">{{$t("foot.c13")}}</p>
                    <p class="beian_num_bh" v-show="region_code == 1">
                        <span>{{$t("foot.c16")}}</span><span>027-86951781</span></p>
                    <p class="beian_num_bh" v-show="region_code == 1">
                        <span>{{$t("foot.c17")}}</span>
                        <span>{{$t("foot.c18")}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {UchatModels, UchatUtil} from "../../../../js/model";
    export default {
        props: {
            region_code: Number,
            language: String,
            gameimg: String
        },
        data(){
            return {
                androidDownContent:''
            }
        },
        created(){
            let lang=''
            if (this.language == 'zh_CN') {
                lang = 'cn';
            } else {
                lang = 'en';
            }
            this.androidDownContent = '<img style=\'width: 100px;\' width=\'100\' height=\'100\' src=\'/img/code_' + this.region_code + '_' + lang + '.png\' alt=\'薄荷加速器\'>';
        },
        methods:{
            onChart(){
                // const chat = new UchatUtil();
                // const mod = new UchatModels();
                // mod.imnumber = '6712';
                // mod.box = true;
                // chat.pop(mod);
                // chat.ready(null);
            }
        }
    }
</script>

<style scoped>

</style>