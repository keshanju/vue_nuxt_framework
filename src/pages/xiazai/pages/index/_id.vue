<template>
    <div style="width: 1200px;margin: 0 auto;" id="tabContainer" :data-pageSize="pageSize">
        <div class="clear_fix" style="margin: 0 auto 43px;">
            <!--游戏平台列表-->
            <div class="f_left graphicbox-cell" style="margin-top: 6px;" v-for="(item,index) in paltforms" :key="item.value"
                 @click="changePlatform(index)">
                        <span class="gamesite_list" :data-length="item.listLength" :class="{'f_left':true, 'web_public_btn':currentIndex==index}"
                              style="padding: 4px 12px;margin-right: 10px;border-radius: 100px;">{{item.label}}</span>
            </div>
            <!--搜索框-->
            <div class="f_right" style="position:relative;" v-show="false">
                <input class="downsite_search_ipt" type="text" v-model="key_word" placeholder="请输入游戏名称">
                <img class="rel_search_ipt" style="cursor: pointer;" @click="searchGame" src="../../assets/images/down_search_normal.png">
            </div>
        </div>
        <!--所有的游戏列表-->
        <div v-show="currentIndex==0" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in gameList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="gameList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--所有的平台列表-->
        <div v-show="currentIndex==1" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in platformDownList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="platformDownList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--Steam的游戏列表-->
        <div v-show="currentIndex==2" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in steamList" :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="steamList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--Origin的游戏列表-->
        <div v-show="currentIndex==3" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in originList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul >
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="originList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--Uplay的游戏列表-->
        <div v-show="currentIndex==4" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in uplayList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="uplayList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--Epic Games的游戏列表-->
        <div v-show="currentIndex==5" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in epicGamesList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="uplayList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--战网的游戏列表-->
        <div v-show="currentIndex==6" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in zwList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="uplayList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--Wegame的游戏列表-->
        <div v-show="currentIndex==7" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in weGameList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="uplayList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>
        <!--GOG的游戏列表-->
        <div v-show="currentIndex==8" class="game_list_output">
            <ul class="clear_fix"  style="padding: 10px 0;">
                <li class="graphicbox f_left white_box_radius"  v-for="item in gogList"
                    :key="item.id">
                    <!--图片部分-->
                    <div class="graphicbox-cell">
                        <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank"><img style="width: 380px;height: 180px;" :src="item.list_img_url"
                                                                                                                                             :alt="item.title"></a>
                    </div>
                    <!--文字部分-->
                    <div class="text_left graphicbox-cell" style="padding: 12px;">
                        <!--第一行文字-->
                        <div style="margin: 5px 0 0;" class="clear_fix">
                            <p style="width: 75%;" class="game_name_title f_left words_flow">{{item.title}}</p>
                            <div class="f_right game_hotnum words_flow" style="width: 25%;">
                                <img src="../../assets/images/downsite_hot_icon.png"
                                     style="width: 16px;height: 16px;vertical-align: top">
                                人气: <span>{{item.human_hot}}</span>
                            </div>
                        </div>
                        <!--第二行文字-->
                        <div class="clear_fix" style="margin: 15px 0 0;" :data-url="item.down_url">
                            <div class="f_left game_time">
                                <p style="font-size: 14px;">大小：<span>{{item.file_size}}</span></p>
                                <p style="font-size: 14px;">更新时间：<span>{{item.game_update_time}}</span></p>
                            </div>
                            <div class="f_right" style="padding-top: 2px">
                                <a :href="env=='development'?'./game/'+item.id.toString():'./game/'+item.id.toString()+'.html'" target="_blank" class="public_btn user_downLoad-btn">{{item.online=='0'?'敬请期待':'下载'}}</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center" style="padding-top: 50px;padding-bottom: 50px;" v-show="uplayList.length == 0">
                <img src="../../assets/images/downsite_no_source.png" class="empty_img">
                <p style="margin-top: 35px;" class="empty_msg">即将上线，敬请期待</p>
            </div>
        </div>

        <!-- <div class="pagination" style="text-align: center;margin-top: 30px;margin-bottom: 0;" v-show="total!=0">
             <ul :page="page">
                <li :class="{'disabled':page == 1}">
                     <a @click="clickPage" style="font-size: 20px;" :href="page == 1 ? 'javascript:;' : (page == 2 ? ('index.html') : ((page - 1)) + '.html')">&laquo;</a>
                 </li>
                 <li v-for="index in total" :key="index" :class="{'active':index == page,mycustompage:showpage}">
                     <a @click="clickPage" :href="index == 1 ? ('index.html') : (index + '.html')">{{index}}</a>
                 </li>
                 <li :class="{'disabled':page == total}">
                     <a @click="clickPage" style="font-size: 20px;" :href="page == total ? 'javascript:;' : ((page + 1) + '.html')">&raquo;</a>
                 </li>
             </ul>
         </div> -->
    </div>
</template>
<script src="./index.js"></script>
