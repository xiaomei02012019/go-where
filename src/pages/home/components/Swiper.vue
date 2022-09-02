<template>
<div class="wrapper">
   <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <!-- 循环输出轮播图 -->
    <swiper-slide  v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
   
  </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeSwiper',
    props:{
      list:Array
    },
    mounted() {
      console.log("mxm",this.list)
    },
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        }
      }
    },
    computed:{
      showSwiper(){
        return this.list.length
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
   height:100%
    
   .swiper-img
     width:100%
     background:#eee
   
</style>