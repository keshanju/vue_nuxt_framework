import "babel-polyfill";
import HeadNav from "../components/downHeadNav";
import FootNav from "../components/downFootNav";
import DownloadBox from "../components/DownloadBox";
import HttpClient from "~/../../js/httpclient.js";
import WebParams from "~/../../js/params.js";
import {downGameModel} from "../../../../js/model";

export default {
    /**
     * 服务端动态数据
     */
    async asyncData(context) {
        const http = new HttpClient();
        const webParams = new WebParams(context);
        //游戏列表
        //let url = context.app.getBaseUrl + HttpClient.URL_NEWS;
       let params = new downGameModel();
        // params.region_code = webParams.region_code;
        // params.lang = webParams.lang;
        // params.page = webParams.page;
        // params.label =0
        // params.key_word=''
        params.size = 9;
        var currentIndex=0;
        if(context.query.tab){
            currentIndex=context.query.tab
        }
        let resData1=require('../../assets/json/gamelist.json');
        let total = Math.ceil(resData1.data.total / params.size);
        if (total>10) total = 10; //只显示前10页的内容
       
        var env=process.env.NODE_ENV;
        const allGame=resData1.data.list
        //获取config.json文件
        // let url = context.app.getWebBaseUrl + HttpClient.CONFIG_JSON;
        // const jsonConfig = await http.getConfig(url);
        // const downConfig = jsonConfig.leigod.down_platform[webParams.from];
        // const windowsDownloadUrl = downConfig.windows.download_url;
        return {
            allGame,
            language: webParams.lang,
            region_code: webParams.region_code,
            page: webParams.page,
            from: webParams.from,
            pageName: webParams.pageName,
            total: total,
            env:env,
            currentIndex:currentIndex,
            pageSize:params.size,

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
            allGame:[],
            pageSize:0,
            env:'',
            title: "",
            description: "",
            paltforms:[
                {label:'全部',value:'0',list:'allgameList',listLength:0},{label:'平台下载',value:'1',list:'allplatformDownList',listLength:0},
                {label:'Steam',value:'2',list:'allsteamList',listLength:0},{label:'Origin',value:'3',list:'alloriginList',listLength:0},
                {label:'Uplay',value:'4',list:'alluplayList',listLength:0},{label:'Epic',value:'5',list:'epicGamesList',listLength:0},
                {label:'战网',value:'6',list:'allZwList',listLength:0}
            ],
            keywords: "",
            region_code: 0,
            language: "",
            page: 1,
            gw_url: '', //官网地址
            m_url: '', //m站地址
            user_url: '', //user站地址
            imageHeadUrl: '', //图片地址
            from: '', //来源
            pageName: '', //页面
            key_word:'',
            gameList: [],
            platformDownList:[],
            steamList: [],
            originList: [],
            uplayList: [],
            weGameList: [],
            gogList: [],
            epicGamesList: [],
            zwList:[],
            currentIndex:0,
            total: 0,
            jsonConfig:{},
            windowsDownloadUrl:'',
            allgameList: [],
            allplatformDownList:[],
            allsteamList: [],
            alloriginList: [],
            alluplayList: [],
            allZwList: [],
            showpage:true
        };
    },
    created() {
        this.initList();
        this.$i18n.locale = this.language;
    },
    mounted(){
    },
    methods: {
        /*
            初始化列表选项，把返回的json数据进行处理；
            例如所有tab框下，allgameList:所有的游戏，gameList：要显示在当前页的游戏
        */
        initList(){
            this.allsteamList = this.allGame.Steam.sort(function (itemA,itemB){
            return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
           this.alloriginList= this.allGame.Origin.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            this.alluplayList = this.allGame.Uplay.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            this.epicGamesList = this.allGame.EpicGames.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            const otherList = this.allGame.Other.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            this.allplatformDownList=this.allGame.PlatForm.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            this.allZwList=this.allGame.zw.sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            this.allgameList= this.allsteamList.concat( this.alloriginList).concat( this.alluplayList).concat( this.epicGamesList).concat(otherList).concat(this.allplatformDownList).concat(this.allZwList).sort(function (itemA,itemB){
                return Number(itemB.human_hot)-Number(itemA.human_hot)
            })
            let page=this.page
            let sliceStart=0
            let sliceEnd=0
            if(page==1){
                sliceStart=0
                sliceEnd=this.pageSize
            }else{
                sliceStart=Number((page-1)*this.pageSize)
                sliceEnd= sliceStart+this.pageSize
            }
            this.paltforms.forEach(element=>{
                element.listLength=this[element.list].length
            })
            // this.gameList= this.allgameList.slice(sliceStart,sliceEnd);
            // this.platformDownList=this.allplatformDownList.slice(sliceStart,sliceEnd)
            // this.steamList=this.allsteamList.slice(sliceStart,sliceEnd)
            // this.originList=this.alloriginList.slice(sliceStart,sliceEnd)
            // this.uplayList=this.alluplayList.slice(sliceStart,sliceEnd)
            this.gameList= this.allgameList;
            this.platformDownList=this.allplatformDownList
            this.steamList=this.allsteamList
            this.originList=this.alloriginList
            this.uplayList=this.alluplayList
            this.zwList=this.allZwList
        },
        /*
            点击切换平台的时候调用的方法
            主要有3步骤，
            1：更新tab值，并设置到cookie(在web.js已经做了，兼容IE8)
            2：重新设置total值，更新分页组件的显示
            3：重新请求数据
        */
        changePlatform(index){
            this.currentIndex=index;
            // this.setCookie('tab',index,1,true); //由于已经在web.js做过了，所以这里可以不用了
            this.setTotal(index);
            this.getGameList();
        },
        // 重新初始化分页组件的total,根据total来控制显示多少页，total等于0就不显示分页组件
        setTotal(index){
            let listName=''
            this.paltforms.forEach(element => {
                if(element.value==index){
                    listName=element.list
                }
            });
            this.total= Math.ceil(this[listName].length/this.pageSize)
        },
        //点击搜索游戏的列表的的搜索按钮的时候
        searchGame(){
            this.getGameList()
        },
        getGameList() {
            // url = context.app.getBaseUrl + HttpClient.URL_NEWS;
            // let params = new downGameModel();
            // params.label = Number(this.paltforms[this.currentIndex].value);
            // params.region_code = this.webParams.region_code;
            // params.lang = this.webParams.lang;
            // params.page = this.webParams.page;
            // params.size = 9;
            // params.key_word=this.key_word
            // let resData1 = await http.get(url, params);
            // let total = Math.ceil(resData1.data.total / params.size);
            // if (total>10) total = 10;
            // const gameList = resData1.data.list;
        },
        //点击底部的分页按钮的时候
        clickPage(){
            // this.setCookie('tab',this.currentIndex,1,true)
        },
        // 获取设置的cookie值
        getCookie(key) {
            var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            }
            return '';
        },
        //获取当前的url的domain值
        getDomain() {
            var hostname = window.location.hostname;
            var hostList = hostname.split('.');
            var domain = '';
            for (var i = 1; i < hostList.length; i++) {
                domain = domain + '.' + hostList[i];
            }
            return domain;
        },
        //设置ookie值，超时时间的单位是小时
        setCookie(key, value, exHour, isDomain) {
            var cstr = key + "=" + value;
            // 时间
            if (exHour > 0) {
                var d = new Date();
                d.setTime(d.getTime() + (exHour*60 * 60 * 1000));
                var expires = "; expires=" + d.toUTCString();
                cstr = cstr + expires;
            }
            // 域名
            if (isDomain) {
                var domain = this.getDomain();
                // ProjectConfig.log('cookie设置的域名:' + domain);
                cstr = cstr + '; domain=' + domain;
            }
            //path
            cstr = cstr + '; path=/';
            document.cookie = cstr;
        }
    }
};