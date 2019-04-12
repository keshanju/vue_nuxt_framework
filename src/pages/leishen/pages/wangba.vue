<template>
    <div>
        <!--顶部导航-->
        <head-nav></head-nav>

        <!--banner-->
        <div class="wangba_banner">
            <img alt="雷神加速器" src="../assets/images/wagnba0907.png"/>
            <a class="marketdownload"></a>
        </div>

        <!--专题内容区-->
        <div class="wangba_content_box">
            <div class="wangba_content">
                <ul>
                    <!--第一部分-->
                    <li>
                        <img alt="雷神加速器" src="../assets/images/wangbalist1.png" width="466" style="width: 466px;" class="wangba_content_left ml100"/>
                        <div class="wangba_content_right ml25">
                            <img alt="雷神加速器" src="../assets/images/wangbalist1tt2.png" width="502" style="width: 502px;"  class="juzhong"/>
                            <ul>
                                <li>
                                    <span></span>
                                    <p>
                                        每个网吧有独立管理后台系统
                                        (网吧总账户余额自助充值、用户合法使用监控、实时计费日志等)。网吧总账户所有机器共享使用时间
                                        (按分钟计费时间), 用户加速成功开始计费扣网吧总账户时间,
                                        断开加速该用户自动停止计费。
                                    </p>
                                </li>
                                <li class="bbt">
                                    <span></span>
                                    <p>
                                        用户上线加速自动识别开始计费时间，用户断开下线自动识别停止计费时间(无需手动暂停),
                                        网吧计费系统仅限网吧商家使用。
                                    </p>
                                </li>
                                <li>
                                    <h5 class="wangba_tit">计费举例</h5>
                                </li>
                                <li>
                                    <p class="wangba_example">
                                        “雷神网咖”总账户充值10000分钟共享时间,如果1个用户上线使用100分钟,即计费扣除100分钟,网吧账户总剩余9900分钟,如果10个用户上线使用100分钟即计费扣除1000分钟,网吧账户总剩余9000分钟,节约费用使用效率极高网吧极大降低成本。
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!--分割线-->
                    <li>
                        <img alt="雷神加速器" src="../assets/images/wangba_fgx.png" width="1200" style="width: 1200px;" class="wangba_fgx"/>
                    </li>

                    <!--第二部分-->
                    <li class="mt20">
                        <div class="wangba_content_right ml100">
                            <img alt="雷神加速器" src="../assets/images/wangbalist2td2.png" width="440" style="width: 440px;" class="juzhong"/>
                            <ul>
                                <li>
                                    <span></span>
                                    <p>
                                        雷神网吧加速使用的专线与玩家版本相同,承诺100%用银行金融级内网传输专线(非Cn2假冒专线)。
                                    </p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>
                                        独家全国不同地区专线节点覆盖全国主要地区让您的网吧用户离游戏专线节点更近。
                                    </p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>
                                        独有全国环形内网确保无论网吧在中国那个地区,都可以畅享最低的游戏延时和稳定性。
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <img alt="雷神加速器" src="../assets/images/wangbalist2.png" width="392" style="width: 392px;" class="wangba_content_left ml100 mt25"/>
                    </li>

                    <!--分割线-->
                    <li>
                        <img alt="雷神加速器" src="../assets/images/wangba_fgx.png" width="1200" style="margin: 70px auto;width: 1200px;"/>
                    </li>

                    <!--第三部分-->
                    <li class="mt0">
                        <img alt="雷神加速器" src="../assets/images/wangbalist3.png" width="472" style="width: 472px;" class="wangba_content_left ml100 mt25"/>

                        <div class="wangba_content_right ml75 mt80">
                            <img alt="雷神加速器" src="../assets/images/wangbalist3t2.png" width="440" style="width: 440px;"/>
                            <ul>
                                <li>
                                    <span></span>
                                    <p>网吧系统后台安全绑定网吧IP, 专属本网吧范围机器使用。</p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>
                                        无需账户密码, 绑定网吧IP机器自动识别一键登陆,
                                        即刻加速游戏。
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <!--分割线-->
                    <li>
                        <img alt="雷神加速器" src="../assets/images/wangba_fgx.png" width="1200" style="margin: 70px auto;width: 1200px;"/>
                    </li>

                    <!--第四部分-->
                    <li>
                        <img alt="雷神加速器" src="../assets/images/wangba_foot.png" width="380" style="width: 380px;" class="juzhong"/>
                        <div class="wangba_contact_us ui_clear">
                            <a href="http://wpa.qq.com/msgrd?v=3&uin=3003610503&site=qq&menu=yes" target="_blank">
                                <div class="qqnormal"></div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 客服下载 -->
        <download-box></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav"></foot-nav>

    </div>
</template>

<script>
    import "babel-polyfill";
    import HeadNav from "./components/HeadNav";
    import FootNav from "./components/FootNav";
    import DownloadBox from "./components/DownloadBox";
    import HttpClient from "~/../../js/httpclient.js";
    import {ActivityModel} from "~/../../js/model.js";
    import LocalStorageUtil from "~/../../js/cookie.js";

    export default {
        /**
         * 服务端动态数据
         */
        // async asyncData(context) {
        //     const region_code = context.params.region_code;
        //     const language = context.params.language;
        //     //
        //     const http = new HttpClient();
        //     let params = new ActivityModel();
        //     params.project = HttpClient.PROJECT_LEIGOD;
        //     params.region_code = region_code;
        //     params.lang = language;
        //     const resData = await http.getActivityList(params);
        //     //
        //     return {
        //         list: resData.data.list,
        //         language: language,
        //         region_code: region_code,
        //         page: 1
        //     };
        // },
        /**
         * 头部
         */
        head() {
            return {
                title: this.title,
                meta: [{name: "description", content: "My custom description"}]
            };
        },
        /**
         * 组件
         */
        components: {
            "head-nav": HeadNav,
            "foot-nav": FootNav,
            "download-box": DownloadBox
        },
        /**
         * 参数
         * @returns {{items: string[], list: Array, language: string}}
         */
        data: function () {
            return {
                title: "测试title",
                list: [],

                region_code: 0,
                language: "",
                page: 0,
                wangbaDownloadUrl: ""
            };
        },
        created() {
            this.init();
            //
            if (process.client) {
            }
        },
        methods: {
            init() {
            }
        }
    };
</script>

<style scoped>
</style>
