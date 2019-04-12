export default class WebParams {

    //web html
    static HTML_NAME_DETAILS_ACTIVITY_NEW = 'activdetails.html'; // 新的活动详情?id=

    project = 0; //0 薄荷 1雷神
    page = 1;
    region_code = 1;
    lang = 'zh_CN';
    from = 'guanwang';
    pageName = ''; //页面名称
    label = '';//指定游戏资讯列表游戏名
    tab = 0;//tab页签index值
    id=0  //资讯详情的id

    constructor(context) {
        if(context == null) return;
        const region_code = context.params.region_code;
        const language = context.params.language;
        const page = context.params.id||context.params.page;

        if(region_code != '' && region_code != null) {
            this.region_code = Number(region_code);
        }
        if(language != '' && language != null) {
            this.lang = language;
        }
        if(page != '' && page != null) {
            this.page = Number(page);
        }
        if(context.query.hasOwnProperty('from')) {
            this.from = context.query.from;
        }
        if (context.query.hasOwnProperty('label')) {
            this.label = context.query.label;
        }
        if (context.query.hasOwnProperty('id')) {
            this.id = context.query.id;
        }
        if (context.query.hasOwnProperty('tab')) {
            this.tab = context.query.tab;
        }
        this.pageName = context.route.name + '.html';
        if (context.route.name == '' || context.route.name == null || context.route.name == undefined) {
            this.pageName = 'index.html';
        }
    }
}