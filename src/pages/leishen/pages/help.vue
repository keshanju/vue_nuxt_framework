<template>
    <div>
        <!--顶部导航-->
        <head-nav :gw_url="gw_url" :region_code="region_code" :language="language" :user_url="user_url" :page_name="pageName"></head-nav>

        <!-- banner -->
        <div class="help_banner" id="app" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
            <div class="help_sub_banner">
                <h2 class="help_banner_title">{{$t("help.g1")}}</h2>
                <div class="zhixun">
                    <h4 class="kf_title">{{$t("help.g2")}}</h4>
                    <p class="kf_tip">{{$t("help.g3")}}</p>
                    <p class="kf_msg">{{$t("help.g4")}}</p>
                    <p class="kf_msg">{{$t("help.g5")}}</p>
                    <p class="kf_msg">{{$t("help.g6")}}</p>
                    <p class="kf_msg">{{$t("help.g7")}}</p>
                    <p class="kf_msg">… …</p>
                    <a class="help_btn newmodal" v-if="region_code == 1">{{$t("help.g8")}}</a>
                    <p class="kf_tip" v-if="region_code == 0" style="font-size: 14px;">{{$t("nav.navlist26")}}</p>
                    <a href="mailto:kf@leigod.com" class="email_font" v-if="region_code == 0" style="font-size: 28px;">kf@leigod.com</a>
                </div>
            </div>
        </div>
        <!--contend-->
        <div class="help_content">
            <ul class="help_tab_nav clear_fix">
                <li class="help_tab_li">
                    <a href="help.html">{{$t("help.g9")}}</a>
                </li>
                <li class="help_tab_li">
                    <a href="help.html?tab=1">{{$t("help.g10")}}</a>
                </li>
                <li class="help_tab_li">
                    <a href="help.html?tab=2">{{$t("help.g11")}}</a>
                </li>
            </ul>
            <!-- 帮助中心 -->
            <ul :data-g_tab="0" class="question_helps clear_fix help_tab">
                <li id="help_1" class="question_help">
                    <div class="question_time_img question_help_img"></div>
                    <div class="question_help_content">
                        <!--<h4 class="question_help_title">{{firstHelpDetail.title}}</h4>-->
                         <h4 class="question_help_title">{{$t('help.g30')}}</h4>
                        <p class="question_help_msg">{{$t("help.g12")}}</p>
                        <p class="question_help_msg">{{$t("help.g13")}}</p>
                        <a class="question_help_btn">{{$t("help.g14")}}</a>
                    </div>
                </li>
                <li id="help_2" class="question_help">
                    <div class="question_phone_img question_help_img"></div>
                    <div class="question_help_content">
                        <h4 class="question_help_title">{{secondHelpId == 0? $t('help.g31') : secondHelpDetail.title}}</h4>
                        <p class="question_help_msg">{{$t("help.g15")}}</p>
                        <p class="question_help_msg">{{$t("help.g16")}}</p>
                        <a class="question_help_btn">{{$t("help.g14")}}</a>
                    </div>
                </li>
                <li id="questions" class="question_help">
                    <div class="question_tab_img question_help_img"></div>
                    <div class="question_help_content">
                        <h4 class="question_help_title">{{$t("help.g17")}}</h4>
                        <p class="question_help_msg">{{$t("help.g18")}}</p>
                        <p class="question_help_msg">{{$t("help.g19")}}</p>
                        <a class="question_help_btn">{{$t("help.g14")}}</a>
                    </div>
                </li>
            </ul>
            <!-- 公司简介 -->
            <div :data-g_tab="1" class="jianjie help_tab hide">
                <img src="../assets/images/leigod_whole_logo.png" alt="" style="width:100%;margin-top: 30px;">
                <h5 class="jianjie_title">{{$t("help.g22")}}</h5>
                <div class="jianjie_content">
                    <h6 class="jianjie_p">{{$t("help.g23")}}</h6>
                    <h6 class="jianjie_p"><b>{{$t("help.g24")}}</b>{{$t("help.g27")}}</h6>
                    <h6 class="jianjie_p"><b>{{$t("help.g25")}}</b>{{$t("help.g28")}}</h6>
                    <h6 class="jianjie_p"><b>{{$t("help.g26")}}</b>{{$t("help.g29")}}</h6>
                </div>
            </div>
            <!-- 加入我们 -->
            <div :data-g_tab="2" class="new_contact_box help_tab hide">
                <div class="new_contanct">
                    <div id="join_nav" class="join_left">
                        <ul>
                            <li class="join_li" v-for="(item, index) in joinDatas" :key="index">
                                <a :href="'#'+item.link" :id="item.id" class="join_msg">
                                    <span class="join_icon"></span>
                                    <p class="join_title">{{item.title}}</p>
                                </a>
                            </li>
                        </ul>
                        <div class="mail">
                            请发送简历至邮箱: <br/>
                            <b>HR@leigod.com</b>
                        </div>
                    </div>
                    <div class="join_right">
                        <ul class="join_list">
                            <li id="b1">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">OpenWRT开发工程师（5人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left">
                                        1、负责路由产品开源 OpenWRT系统开发与调试工作，包括系统构建等；<br>
                                        2、定制路由固件,开发新模块；<br>
                                        3、负责修改uboot内核；<br>
                                        4、负责luci开发。
                                    </p>
                                </div>
                                <div class="join_right_require ">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left">
                                        1、熟悉C/C++开发，熟练掌握shell脚本；<br/>
                                        2、熟悉Linux系统,熟悉tcp/ip协议及socket通讯方式；<br/>
                                        3、精通Openwrt系统框架、编译流程及应用程序开发，熟练掌握iptables/iproute2等开发工具；<br/>
                                        4、有VPN，代理服务器相关产品开发经验优先。<br/>
                                        5、熟悉路由加速原理和嵌入式开发，有ss加速和dpi包深度探测经验优先。
                                    </p>
                                </div>
                            </li>
                            <li id="b2">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">运营总监（1人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、负责网游加速器运营策略的分析、制定与执行；<br/>
                                        2、负责规划产品市场定位及市场推广策略；<br/>
                                        3、合理分析产品运营数据及市场状况，根据市场变化对运营策略提出合理有效调整；<br/>
                                        4、负责部门协作沟通，与开发部门通力合作，保证游戏加速器的正常运行及营收。<br/>
                                        5、进行数据分析，挖掘用户各层次需求，收集分析运营数据，优化运营方案； <br/>
                                        6、全面负责网站的线上推广(SEM、SEO、CPS、EDM)策略规划和网络营销工作； <br/>
                                        7、负责针对不同的推广目标、内容进行专项推广，跟踪和反馈方案的推广执行情况，对平台的注册用戶数、网站访问量、网络咨询量和传播效果负责； <br/>
                                        8、负责搜集、整理网络营销市场及公司各种动态、活动信息，关注平台新功能发布和新版本上线、及时推广更新；
                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、3年以上品牌建设、网络营销、推广工作经验，具有产品成功运营经验者优先；<br/>
                                        2、熟悉网站排名、流量原理，熟悉Baidu、Google等搜索竞价和网盟营销，微博推广、bbs营销、软文推广、网络广告、EDM、问答营销、WIKI营销等各种网络营销手段；有强烈的营销意识，创意策划能力；
                                        <br/>
                                        3、有很强的市场意识，能够有效的把握用户心理，具有敏锐的新闻嗅觉，对互联网、虚拟产品有较深的理解，有独特见解和执行操作能力；<br/>
                                        4、熟悉游戏加速器运营流程，熟悉用户需求；<br/>
                                        5、对数据敏感，有较强的数据分析能力，经营管控能力；<br/>
                                        6、善于思考，较强的学习能力和理解能力；
                                    </p>
                                </div>
                            </li>
                            <li id="b3">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">新媒体运营（3人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left">
                                        1、根据公司要求，撰写产品策划文案、品牌宣传文案、网络新闻稿、广告软文及其他宣传文案；<br/>
                                        2、负责策划运营微信公众号，提供内容和线上活动方案实施；<br/>
                                        3、能够独立创作和完成稿件的撰写，稿件思路清晰，重点突出；<br/>
                                        4、加强对团队成员的管理与业务指导以及对外沟通。<br/>
                                        5、负责与粉丝的日常互动，保持粉丝的活跃度
                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left">
                                        1、广告策划、市场营销、新闻学等相关专业本科或以上学历；<br/>
                                        2、较强的自学能力和创意能力，扎实的文字功底，逻辑思维力强，思路敏捷；<br/>
                                        3、具有优秀的文案写作能力，出色的文字组织能力，写作经验丰富，有丰富的提案经验；<br/>
                                        4、熟悉产品策划，品牌策划、活动策划的整个流程，熟悉专业创意方法，洞察力强；<br/>
                                        5、善于沟通，善于领会客户的要求，能自主思考，具备敏锐的洞察力；
                                    </p>
                                </div>
                            </li>
                            <li id="b4">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">SEO主管（1人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、负责公司开拓网络营销资源和渠道，提升网站整体流量和知名度。<br/>
                                        2、掌握以百度/谷歌为首的搜索引擎的基本排名规律、精通搜索引擎的优化、关键词代码优化、图片优化，进行站内优化、站外优化以及内外部链接优化。<br/>
                                        3、运用多种网络推广手段（微信、微博、各论坛等）来提高公司品牌的知名度，以达 到咨询量增加的效果。<br/>
                                        4、策划、执行在线推广活动，收集推广反馈数据，不断改进推广效果，对推广效果进行评估、分析、优化和总结。<br/>
                                        5、制定SEO优化方案,指导网站编辑人员提高网站收录量，增加反向链接，并向其他部门提供SEO支持。<br/>

                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、有三年以上SEO团队管理经验，能够对团队规章进行统筹和管理，有带领团队针对百度和谷歌整站优化的经验（提供案例/必须）。<br/>
                                        2、熟练掌握互联网在线推广技术，熟悉网站产品的设计、推广和营销，精通SEO搜索引擎、关键字、竞价排名，推广联盟，论坛推广、微博等全方位的网络运营技能。<br/>
                                        3、具有一定的数据分析能力，良好的网案销售方案策划、竞争策略制定的能力，能根据网站日志，网站流量的分析调整网站的推广和优化策略。<br/>
                                        4、熟悉HTML，对DIV+CSS熟练，有大型门户类网站优化经验，有丰富的seo整站内部结构优化经验。<br/>
                                        5、网站网页制作，能独立进行网站结构优化，网站页面优化，网站诊断，流量分析等。
                                    </p>
                                </div>
                            </li>
                            <li id="b5">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">官网客服（5人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left">
                                        1、游戏玩家的维护以及沟通，保持用户粘性；<br/>
                                        2、接受玩家咨询，答疑和指导，记录咨询投诉内容，按照相应流程处理后反馈相关部门；<br/>
                                        3、协助运营进行加速器BUG测试及问题的反馈；

                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left">
                                        1、具有较强的服务意识及良好的沟通、协调能力，较强的执行力;<br/>
                                        2、熟练使用OFFICE相关工作软件，以及较快的打字速度;<br/>
                                        3、普通话标准、流利、音质清晰;<br/>
                                        4、热爱服务工作，善于倾听，准确理解沟通内容;<br/>
                                        5、熟悉windows操作系统，熟悉计算机硬件知识的将优先考虑。<br/>
                                        6、熟悉加速器，STEAM以及非国服游戏的优先
                                    </p>
                                </div>
                            </li>
                            <li id="b6">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">网络推广（1人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、负责网络线上营销推广、过程监控及评估工作；<br/>
                                        2、利用各种分类信息平台、百度百科、百度文库、贴吧、百度知道、博客、论坛、网络社区等网络资源和工具进行口碑推广；<br/>
                                        3、负责软文、伪原创的写作、发布和热点关键词信息配合推广，整合第三方网站资源，增加网站的流量和知名度；<br/>
                                        4、定期收集外推数据，并进行分析，提出优化建议。<br/>
                                        5、各类新媒体平台文字内容的编辑，推广文案撰写和内容产出<br/>
                                        6、有优秀的文案功底，擅长撰写软文<br/>
                                        7、负责新媒体平台（微信公众号，微博，今日头条等）文章采集与整合编辑；<br/>
                                        8、建立与维护广告宣传渠道网，如：直投网络、微信服务号等
                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left">
                                        1、 工作认真细致，态度严谨，有极强的工作责任心；<br/>
                                        2、 思维活跃、创意出色，具备创造性思维；<br/>
                                        3、 团队精神强，能不断进取，追求卓越；<br/>
                                        4、 熟练使用电脑，有经验者优先；<br/>
                                        5、 专科以上学历；
                                    </p>
                                </div>
                            </li>
                            <li id="b7">
                                <div class="zhanwei_new"></div>
                                <h4 class="join_right_t">Web前端开发工程师（3人）</h4>
                                <h5 class="join_right_sub"></h5>
                                <div class="join_right_duty">
                                    <h5 class="join_tip f_left">工作职责</h5>
                                    <p class="f_left">
                                        1、负责公司官网以及WEB 系统前端与后端的集成开发；<br/>
                                        2、产品易用性改进和 Web 界面技术优化；<br/>
                                        3、在理解前端开发流程的基础上，结合前端实际建立或优化提升工作效率的工具；
                                    </p>
                                </div>
                                <div class="join_right_require">
                                    <h5 class="join_tip f_left">岗位要求</h5>
                                    <p class="f_left" style="width: 80%;">
                                        1、熟悉 W3C 标准，熟悉HTML5/CSS/JS、ES6, TypeScript，了解 web标准化、性能优化、可用性、可访问和安全性等；<br/>
                                        2、掌握至少一种常见框架Jquery、Angular、React、Vue等，有一定的前端通用组件设计和开发能力；<br/>
                                        3、熟悉前端自动化构建工具和PHP优先考虑，如 grunt,、gulp、browserify、webpack等；<br/>
                                        4、自我管理能力强，崇尚团队合作，快速的学习能力，乐于分享与沟通。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--帮助弹窗-->
        <div id="help_dialog" class="help_dialog hidden">
            <div class="help_dialog_content">
                <!-- 关闭按钮 -->
                <!--<div id="help_close" class="help_dialog_close"></div>-->
                <img id="help_close" class="help_dialog_close" src="../assets/images/help_close.png" alt="雷神加速器" style="width: 40px;height: 40px;">
                <!--swiper-->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <!-- 暂停时间功能说明 -->
                            <div class="help_dialog_box" style="margin-bottom:0;">
                                <div class="help_content_con_detail" style="margin:0;">
                                    <h4 class="tit">{{firstHelpDetail.title}}</h4>
                                    <div class="help_content_lazyload" style="margin-top: 30px;" v-html="firstHelpDetail.content"></div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <!-- 客户端使用帮助 -->
                            <div class="help_dialog_box" style="margin-bottom:0;height:100%">
                                <div class="help_content_con_detail" style="margin:0;">
                                    <h4 class="tit">{{secondHelpId == {}? $t('help.g31') : secondHelpDetail.title}}</h4>
                                    <div class="help_content_lazyload" style="margin-top: 30px;" v-html="secondHelpDetail.content">
                                    </div>
                                    <div class="con khd_con" style="margin-top:150px;" v-show="secondHelpId == {}">
                                        <img src="https://static.leigod.com/images/images/bangzhuwendang.png" style="width:192px;">
                                        <h5 style="text-align:center; color:#999; font-size:14px; margin-top:20px;">{{$t("help.g20")}}
                                            <br>{{$t("help.g21")}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <!-- 常见问题汇总 -->
                            <div class="contact_problemBox">
                                <ul class="contact_problemBox_left">
                                    <li class="question_li" v-for="(item,index) in questionList" :index="index" :key="index">
                                        <a><span></span>
                                            <p style="font-size: 14px;">{{item.title}}</p>
                                        </a>
                                    </li>
                                </ul>
                                <div class="help_content_lazyload contact_problemBox_right">
                                    <div v-for="(item,index) in questionDetail" :key="index" class="questiondetail_li hide" v-html="item.content" style="height:90%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <!-- 如果需要导航按钮 -->
                <img id="prev" class="swiper-button-prev" style="width: 40px;height: 40px;" src="../assets/images/help_prev.png" alt="雷神加速器">
                <img id="next" class="swiper-button-next" style="width: 40px;height: 40px;" src="../assets/images/help_next.png" alt="雷神加速器">
            </div>
        </div>
        <!-- 客服下载 -->
        <download-box v-if="region_code == 1"></download-box>
        <!--底部导航-->
        <foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
    </div>
</template>
<script src="./help.js">
</script>
<style scoped>
    @import "../assets/css/swiper2.7.6.less";
</style>
