<template>
    <div>
        <div style="margin-bottom: 100px;">
            <!-- 标题-->
            <div class="com_zixun_title">
                <b class="icon_s1"></b>
                <p class="font_s10">{{$t("detailsnews.d1")}}</p>
            </div>
            <!-- 列表导航-->
            <ul>
                <li v-for="(item , index) in hotNewList" :key="index"><a class="l_hover" v-text="item.title" @click="gonewsdetail(item.id)"></a></li>
            </ul>
            <div class="empty_box" v-show="hotNewList.length == 0">
                <img class="empty_img" src="../../assets/images/empty_event.png" alt="">
                <p class="empty_msg">{{$t("pgame.n2")}}</p>
            </div>
        </div>
        <div style="margin-bottom: 100px;">
            <!-- 标题-->
            <div class="com_zixun_title">
                <b class="icon_s1"></b>
                <p class="font_s10">{{$t("detailsnews.d2")}}</p>
            </div>
            <!-- 列表导航-->
            <ul>
                <li v-for="(item , index) in mobilNewList" :key="index">
                    <a class="l_hover" v-text="item.title" @click="gonewsdetail(item.id)"></a>
                </li>
            </ul>
            <div class="empty_box" v-show="mobilNewList.length == 0">
                <img class="empty_img" src="../../assets/images/empty_event.png">
                <p class="empty_msg">{{$t("pgame.n2")}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            mobilNewList:Array,
            hotNewList:Array
        },
        methods:{
            gonewsdetail(id){
                window.open('news_'+id+'.html','_blank')
            }
        }
    }
</script>

<style scoped>

</style>