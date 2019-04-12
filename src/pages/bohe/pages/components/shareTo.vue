<template>
    <div>
        <ul class="share-container">
            <li style="color:#333;">分享到：</li>
            <li class="weChartShare" data-html="true"  :data-content="wechartImg" data-toggle="popover"  data-trigger="click" data-placement="top">
                <!--<a title="分享到微信" href="javascript:void(0)" class="bds_weixin">-->
                    <img src="../../assets/images/share/wx.png"/>
                <!--</a>-->
            </li>
            <li>
                <!--<a title="分享到QQ好友" href="javascript:void(0)" class="share_qq" @click="shareToqq()">-->
                    <img src="../../assets/images/share/qq.png" @click="shareToqq"/>
                <!--</a>-->
            </li>
            <li>
                <!--<a title="分享到新浪微博" href="javascript:void(0)" class="share_xlwb" @click="shareToSinaWB()">-->
                    <img src="../../assets/images/share/xl.png" @click="shareToSinaWB"/>
                <!--</a>-->
            </li>
            <li>
                <!--<a title="分享到百度贴吧" href="javascript:void(0)" class="share_bdtb" @click="shareToTieba()">-->
                    <img src="../../assets/images/share/tb.png" @click="shareToTieba" />
                <!--</a>-->
            </li>
            <li>
                <!--<a title="分享到QQ空间" href="javascript:void(0)" class="share_qzone" @click="shareToQzone()">-->
                    <img src="../../assets/images/share/zone.png" @click="shareToQzone" />
                <!--</a>-->
            </li>
        </ul>
    </div>
</template>

<script>
    import QRCode from 'qrcode'
    export default {
        props:{
            item:Object,
            current: Boolean
        },
        data() {
            return {
                _source: '',
                _sourceUrl: '',
                _pic: '',
                _showcount: 1,
                _site: 'http://www.bohe.com',
                _url:'',
                _title:'',
                wechartImg:''
            }
        },
        mounted(){
            let self=this
            if(this.current){
                this._url= window.location.href
                this._title= document.title
            }else{
                this._url= window.location.origin+'/news_'+this.item.id+'.html'
                // this._url='https://cn.bohe.com/news_'+this.item.id+'.html'
                this._title= this.item.title+'- (BOHE)薄荷官网'
                this._pic=this.item.image_url
            }
            QRCode.toDataURL(self._url, function (err, url) {
                self.wechartImg = '<img style=\'width: 100px;\' width=\'100\' height=\'100\' src=\'' + url + '\' alt=\'薄荷游戏资讯\'>';
            })
        },
        methods: {
            //分享到新浪微博
            shareToSinaWB() {
                var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?appkey=1343713053"' //真实的appkey，必选参数
                _shareUrl += '&url=' + encodeURIComponent(this._url || document.location) //参数url设置分享的内容链接|默认当前页location，可选参数
                _shareUrl += '&title=' + encodeURIComponent(this._title || document.title+'- (BOHE)薄荷官网') //参数title设置分享的标题|默认当前页标题，可选参数
                _shareUrl += '&content=' + 'utf-8' //参数content设置页面编码gb2312|utf-8，可选参数
                window.open(_shareUrl, '_blank')
            },
            //分享到QQ空间
            shareToQzone() {
                var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'
                _shareUrl += 'url=' + encodeURIComponent(this._url || document.location) //参数url设置分享的内容链接|默认当前页location
                _shareUrl += '&showcount=' + this._showcount || 0 //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
                _shareUrl += '&desc=' + encodeURIComponent(this._desc || '薄荷游戏资讯') //参数desc设置分享的描述，可选参数
                _shareUrl += '&summary=' + encodeURIComponent(this._summary || '游戏资讯') //参数summary设置分享摘要，可选参数
                _shareUrl += '&title=' + encodeURIComponent(this._title || document.title) //参数title设置分享标题，可选参数
                _shareUrl += '&site=' + encodeURIComponent(this._site || '') //参数site设置分享来源，可选参数
                window.open(_shareUrl, '_blank')
            },
            //分享到百度贴吧
            shareToTieba() {
                var _shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi?'
                _shareUrl += 'title=' + encodeURIComponent(this._title || document.title) //分享的标题
                _shareUrl += '&url=' + encodeURIComponent(this._url || document.location) //分享的链接
                window.open(_shareUrl, '_blank')
            },
            //分享到qq
            shareToqq() {
                var _shareUrl = 'https://connect.qq.com/widget/shareqq/index.html?'
                _shareUrl += 'url=' + encodeURIComponent(this._url || location.href) //分享的链接
                _shareUrl += '&title=' + encodeURIComponent(this._title || document.title) //分享的标题
                window.open(_shareUrl, '_blank')
            }
        }
    }
</script>

<style scoped>
    .share-container {
        list-style: none;
    }

    .share-container li {
        float: left;
        margin-left:8px;
    }

    .share-container li img {
        width: 24px;
    }
</style>