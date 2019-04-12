<template>
	<div style="background: #EBEBEB;">
		<!--顶部导航-->
		<head-nav
			:gw_url="gw_url"
			:region_code="region_code"
			:language="language"
			:user_url="user_url"
			:page_name="pageName"
		></head-nav>

		<!-- 页面contend -->
		<!-- 套餐页轮播图 -->
		<div class="recharge_banner clear_fix" :class="{'recharge_en_banner' : region_code == 0}" id="app" :now_time="now_time" :m_url="m_url" :gw_url="gw_url" :user_url="user_url" :region_code="region_code" :language="language">
			<div class="package_slideshow_box">
				<a  href="brandnew.html" class="img_filter" v-if="region_code == 0">
					<img class="img_filter cursor" src="../assets/images/recharge_banner_4.png" alt>
				</a>
				<a  :href="activityInfo.url" class="img_filter" v-if="region_code == 1">
					<img class="img_filter cursor" src="../assets/images/recharge_banner_middle.png" :alt="activityInfo.title">
				</a>
			</div>
		</div>
		<div class="recharge_banner_content">
			<ul class="webpackage_box_fa row-fluid"  v-if="region_code == 0">
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 1}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">720</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">60</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c20")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=0'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 2}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">2160</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">162</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c23")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=1'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 3}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">4320</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">288</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c25")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=2'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 4}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">8760</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">298</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c27")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=3'">{{$t("recharge.c22")}}</a>
				</li>
			</ul>
			<ul class="webpackage_box_fa row-fluid" v-if="region_code == 1">
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 1}"
				>
					<img class="xianshi_activity sc_show hide" src="../assets/images/xsth.png" alt="">
					<p class="sc_show hide" style="position: absolute;top: 20px;text-align: center;width: 100%;left: 0;">限时: 3.22-3.31</p>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">800</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;height: 38px;">
						<span class="package_symbol_font sc_hide hide" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font sc_hide hide">49</span>
						<span class="package_symbol_font sc_show hide" style="margin-top: 8px;color:#FE6637;">¥</span>
						<span class="package_amount_font sc_show hide" style="color:#FE6637;">39.8</span>
						<s style="margin-left: 5px;" class="sc_show hide">原价50</s>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;height: 16px;">
						<span class="hide sc_hide">{{$t("recharge.c20")}}</span>
						<p id="sc_num" class="hide sc_show">
							参与人数:
							<span id="payuser_num" style="color:#FE6637;"></span>
						</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=0'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 2}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">2300</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">139</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c23")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=1'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 3}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">4500</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">219</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c25")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=2'">{{$t("recharge.c22")}}</a>
				</li>
				<li
					style="width: 24.9%"
					class="webpackage_box_son span3"
					:class="{'webpackage_active': chooseIndex == 4}"
				>
					<div class="webpackage_top_cell">
						<!--圆周动画的小icon-->
						<b class="web_icon_anim"></b>
						<p class="package_title_font">9000</p>
						<p class="package_time_font">{{$t("recharge.c19")}}</p>
					</div>
					<div style="margin-top: 10px;">
						<span class="package_symbol_font" style="margin-top: 8px;">¥</span>
						<span class="package_amount_font">279</span>
					</div>
					<div class="lists_font" style="text-align: center;margin-bottom: 30px;">
						<p>{{$t("recharge.c27")}}</p>
					</div>
					<a class="default_hover web_white_btn pak_buynow_font" style="padding: 12px 40px;" :href="user_url + '/user.html?region_code=' + region_code + '&language=' + language + '&page=1&package_index=3'">{{$t("recharge.c22")}}</a>
				</li>
			</ul>
			<div class="zanting_box">
                <!-- 雷神全球加速器 -->
                <p class="zanting_logo_font pos_zanting">{{$t('index.a1')}}</p>
                <!-- 可随时暂停时间的网游加速器 -->
                <p class="zanting_title_font pos_zanting">{{$t('index.a3')}}</p>
                <!-- 一次购买相当于永久使用 -->
                <p class="zanting_buy_font pos_zanting">{{$t('index.a4')}}</p>
                <!-- 扫码关注“雷神加速器”微信公众号 -->
                <p class="zanting_detail_font">{{$t('recharge.c31')}}</p>
                <!-- 也可随时暂停时间 -->
                <p class="zanting_detail_font">{{$t('index.a15')}}</p>
            </div>
            <!-- 温馨提示 （根据不同组件进行渲染）-->
            <div>
                <h3 class="warm_tips_font">{{$t("warmtips.tip1")}}</h3>
                <div class="warm_detail_font">
                    <p class="pos_warm_txt" style="word-break:keep-all;">{{$t("warmtips.tip2")}}</p>
                    <p class="pos_warm_txt" style="word-break:keep-all;">{{$t("warmtips.tip3")}}</p>
                    <p class="pos_warm_txt" style="word-break:keep-all;">{{$t("warmtips.tip4")}}</p>
                </div>
                <div class="hide warm_detail_font">
                    <p class="pos_warm_txt" style="word-break:keep-all;">{{$t("warmtips.tip5")}}</p>
                    <p class="pos_warm_txt" style="word-break:keep-all;">{{$t("warmtips.tip6")}}</p>
                </div>
            </div>
		</div>
		<!-- 客服下载 -->
		<download-box v-if="region_code == 1"></download-box>
		<!--底部导航-->
		<foot-nav class="other_foot_nav" :region_code="region_code" :language="language"></foot-nav>
	</div>
</template>
<script>
import "babel-polyfill";
import HeadNav from "./components/HeadNav";
import FootNav from "./components/FootNav";
import DownloadBox from "./components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import { ActivityModel, ActivityPicModel } from "~/../../js/model.js";
import LocalStorageUtil from "~/../../js/cookie.js";
import WebParams from "~/../../js/params.js";

export default {
	/**
	 * 服务端动态数据
	 */
	async asyncData(context) {
		const http = new HttpClient();
		const webParams = new WebParams(context);

		let url = "";
		let params = "";

		//系统时间
		url = context.app.getBaseUrl + HttpClient.URL_TOOL_SYSTEM_TIME;
		params = {};
        let resData = await http.get(url, params);
        const now_time = resData.data.time;

		//活动图片
        url = context.app.getBaseUrl + HttpClient.URL_ACTIVITY_PICTURE_LIST;
        params = new ActivityPicModel();
        params.project = HttpClient.PROJECT_LEIGOD;
        params.region_code = webParams.region_code;
        params.lang = webParams.lang;
        let resData1 = await http.post(url, params);
        const activityList = resData1.data;
		//
		return {
            activityList: activityList,
			language: webParams.lang,
			region_code: webParams.region_code,
			page: webParams.page,
			from: webParams.from,
			pageName: webParams.pageName,
            now_time: now_time
		};
	},
	/**
	 * 头部
	 */
	head() {
		return {
			title: this.title,
			meta: [
				{ name: "description", content: this.description },
				{ name: "keywords", content: this.keywords }
			]
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
	data: function() {
		return {
			title: "测试title",
            list: [],
            region_code: 0,
            language: "",
            page: 0,
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            pageName: '', //页面
            wangbaDownloadUrl: "",
            activityList: [],
            activityInfo: null,
            chooseIndex: 1,
            now_time:''
		};
	},
	created() {
        this.$i18n.locale = this.language;
		this.initMeta();
		this.getActivityInfo();
        this.init();
        //
        if (process.client) {
        }
	},
	methods: {
        /**
         * 初始化meta
         */
        initMeta() {
            this.gw_url = this.getWebBaseUrl();
            this.imageHeadUrl = this.getImgBaseUrl();
            this.m_url = this.getMobWebBaseUrl();
            this.user_url = this.getUserBaseUrl();
            //
            const htmlName = this.$route.name;
            const config = this.metaConfig[this.region_code][this.language];
            this.title = config[htmlName].title;
            this.description = config[htmlName].description;
            this.keywords = config[htmlName].keywords;
        },
		init() {},
		goActivityDetail() {},
		changeHotNews() {},
		goNews() {},
		goNewsDetail() {},
		onChoosePrice() {},
		buyNow() {},
		/**
         * 活动数据
         */
        getActivityInfo() {
            if (this.activityList.length <= 0) return;
            this.activityInfo = this.activityList[0];
            this.activityInfo['img_3'] = this.activityInfo.imgs.filter((a, b) => {
                return a.key == 3;
            })[0].img_url;
            this.activityInfo.img_3 = this.imageHeadUrl + this.activityInfo.img_3;
            if (this.activityInfo.url == '') {
                this.activityInfo.url = WebParams.HTML_NAME_DETAILS_ACTIVITY_NEW + '?id=' + this.activityInfo.id;
            }
        }
	}
};
</script>
