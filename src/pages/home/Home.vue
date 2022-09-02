<template>
 <div>
	<home-header ></home-header>
	<home-swiper :list="swiperList"></home-swiper>
	<home-icons :list="iconList"></home-icons>
	<home-recommend :list="recommendList"></home-recommend>
	<home-weekend :list="weekendList"></home-weekend>

 </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import {mapState} from "vuex";

export default {
	name: 'MyHome',
	components: { HomeHeader ,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
	data(){
      return{
     lastCity:'',
		swiperList:[],
		iconList:[],
		recommendList:[],
		weekendList:[]

	  }
	},
	methods:{
	  getHomeInfo(){
		axios.get('/api/index.json?city=' + this.city)
		 .then(this.getHomeInfoSucc)
	  },
	  getHomeInfoSucc(res){
	     res=res.data
      console.log("mxm1",res)
		if(res.ret && res.data){
		   const data=res.data

		   this.swiperList=data.swiperList  //焦点轮播图
		   this.iconList=data.iconList  //导航图标
		   this.recommendList=data.recommendList//热门推荐 
		   this.recommendList=data.recommendList//热门推荐 
		   this.weekendList=data.weekendList//周末去哪
  
		}
		// console.log(res);
	  }
	},
  computed:{
    ...mapState(['city'])
  },
	mounted(){
    this.lastCity=this.city
      this.getHomeInfo()
	},
  activated() {  //页面重新被显示的时候执行
    // console.log('activated')
    if(this.lastCity!==this.city){
      this.lastCity=this.city
     this.getHomeInfo()
    }
  }
}


</script>

<style>

</style>
