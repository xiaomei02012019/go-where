<template>
<div class="wrapper">
   <swiper :options="swiperOption">
    <!-- slides -->
    <!-- 循环输出轮播图 -->
    <swiper-slide  v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeSwiper',
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        //循环输出轮播图
        swiperList:[
          {
            id:'0001',
            imgUrl: 'https://imgs.qunarzz.com/vc/0d/e7/e3/055d1a9e1efef66f37e0a348ff.jpg_1920x440x92.jpg'
          },
          {
              id:'0002',
            imgUrl: 'https://imgs.qunarzz.com/vc/3c/1a/c9/58b124f7145151d81e4cafa1b2.jpg_1920x440x92.jpg'
          }
        ]
      }
    }
  }
</script>
<!-- padding-bottom:23%  设置宽高比例 -->
<!-- .wrapper >>> .swiper-pagination-bullet-active 只要在wrapper类下出现以下样式，都会生效，不受到scoped限制 -->
<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
       background: #fff !important
 .wrapper
   overflow:hidden
   width 100%
   height:0
   padding-bottom:23%  
   .swiper-img
     width:100%
     background:#eee
   
</style>