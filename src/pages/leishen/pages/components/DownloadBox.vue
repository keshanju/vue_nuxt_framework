<template>
    <div class="kefu_download">
        <div class="kefu_icon cursor">
            <img src="../../assets/images/kefu_fixed.gif" style="height:auto;" class="img_filter newmodal" alt="">
            <p class="kefu_time">8:00-24:00</p>
        </div>
        <div class="download_icon clear_fix">
            <div class="wechat_icon cursor f_left" id="wechat_ewm" data-html="true" :data-content="wechat_ewm" data-toggle="popover"  data-trigger="hover" data-placement="left"></div>
            <div class="weibo_icon cursor f_right" id="weibo_ewm" data-html="true" :data-content="weibo_ewm" data-toggle="popover"  data-trigger="hover" data-placement="left"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                language: "",
                webParam: "",
                newlist: [],
                newWithImg: [],
                inputValue: "",
                wechat_ewm: '<img src="/img/weixin.png" alt="">',
                weibo_ewm: '<img src="/img/weibo.png" alt="">',
            };
        },

        created() {
            this.language = this.$route.params.language;
        },

        methods: {
            test() {},
            getMore() {},
            goDetail() {}
        }
    };
</script>