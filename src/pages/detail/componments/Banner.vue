<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="故宫博物院">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xeac4;</span>{{this.bannerImg.length}}</div>
      </div>
    </div>
    <common-gallary 
    @close="handleGallaryClose"
    :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '../../../common/Gallary.vue'
export default {
  name:'DetailBanner',
  components:{CommonGallary},
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array,
    categoryList:String,

  },
  data(){
    return{
      showGallary:false,
     
    }
  },
  methods:{
    //点击图片显示大图
    handleBannerClick(){
      this.showGallary=true
    },
    
    handleGallaryClose(){
      console.log('触发了改变')
      this.showGallary=false
    }
  },

}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      padding .02rem .4rem
      height .4rem
      line-height .4rem
      border-radius .2rem
      font-size .3rem
      background rgba(0,0,0,.8)
      .banner-icon
        font-size .3rem
</style>