<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
	list:Array
  },
  data(){
    return {
      swiperOption: {
        pagination: {
            el:".swiper-pagination",//分页器的类名
            clickable:true//设置分页小圆点可手动点击
        },
        loop:true,
        },
      }
  },
  computed:{
	showSwiper(){
		return this.list.length
	}
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 25.6%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>