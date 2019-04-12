<template>
    <div>
        <l-head></l-head>
        <p style="color: blue;">当前地区:{{region_code}}</p>
        <p style="color: blue;">当前语言:{{language}}</p>
        <p class="test">当前页数:{{page}}</p>

        <p>切换语言：{{$t('title')}}</p>

        <p style="color: red;">渲染的服务端数据</p>
        <div v-for="(item,index) in list" :key="index">
            <a :href="'/news_' + item.id + '.html'">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
    import Head from './components/HeadNav';
    import HttpClient from '~/../../js/httpclient.js';
    import {ActivityModel} from '~/../../js/model.js';

    export default {
        /**
         * 服务端动态数据
         */
        async asyncData(context) {
            const region_code = context.params.region_code;
            const language = context.params.language;
            //
            const http = new HttpClient();
            let params = new ActivityModel();
            params.project = HttpClient.PROJECT_LEIGOD;
            params.region_code = region_code;
            params.lang = language;
            const resData = await http.getActivityList(params);
            //
            return {
                list: resData.data.list,
                language: language,
                region_code: region_code,
                page: 1,
            }
        },
        /**
         * 头部
         */
        head() {
            return {
                title: this.title,
                meta: [
                    {name: 'description', content: 'My custom description'}
                ]
            }
        },
        /**
         * 组件
         */
        components: {
            'l-head': Head,
        },
        /**
         * 参数
         * @returns {{items: string[], list: Array, language: string}}
         */
        data: function () {
            return {
                title: '测试title',
                list: [],

                region_code: 0,
                language: '',
                page: 0,
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {

            }
        },
    }
</script>

<style scoped>
</style>