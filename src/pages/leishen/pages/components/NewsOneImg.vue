<template>
    <div>
        <div class="news_title clear_fix">
            <h5 class="f_left" style="margin: 0;">{{gamename}}</h5>
            <a class="cursor f_right" :href="'newslist.html?label=' + gamename" target="_blank">{{$t("news.d7")}}</a>
        </div>
        <div class="cursor" v-if="newlist.length > 0">
            <a :href="'news_'+newWithImg.id+'.html'" target="_blank" style="width:100%;">
                <div class="new_img_box">
                    <img :data-original="imageHeadUrl + newWithImg.image_url" :alt="newWithImg.title" class="new_img lazyload">
                </div>
                <p class="new_title">{{newWithImg.title}}</p>
            </a>
        </div>
        <ul style="min-height:97px;" v-if="newlist.length > 1">
            <li class="news_li" v-for="(item,index) in newsList" :key="index">
                <a :href="'news_'+item.id+'.html'" target="_blank">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            imageHeadUrl: String,
            tabindex: Number,
            gamename: String,
            newlist: Array,
        },
        data() {
            return {};
        },

        created() {
            this.newWithImg = this.newlist[0];
            this.newsList = [];
            if(this.newsList != null && this.newsList.length > 0) {
                this.newsList = this.newlist.slice(1,4);
            }
        },

        methods: {}
    };
</script>

<style scoped>
</style>
