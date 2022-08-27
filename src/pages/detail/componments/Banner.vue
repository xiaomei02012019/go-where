<template>
<div>
    <div class="banner" @click="handleBannerClick">
		<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="故宫博物院">
		<div class="banner-info">
			<div class="banner-title">故宫博物院(AAAAA景区)</div>
			<div class="banner-number"><span class="iconfont banner-icon">&#xeac4;</span>19</div>
		</div>
	</div>
	<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
    import CommonGallary from './../../../common/Gallary.vue'
	export default {
		name:'DetailBanner',
		data(){
           return{
			showGallary:false,
imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg","http://img1.qunarzz.com/sight/p0/2204/46/46de34606a90da59a3.water.jpg_r_800x800_5611e300.jpg"]
		   } 
		},
		methods:{
            handleBannerClick(){
                this.showGallary=true
			},
			handleGallaryClose(){
				console.log('触发了改变')
				this.showGallary=false
			}
		},
		components:{
			CommonGallary
		}
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