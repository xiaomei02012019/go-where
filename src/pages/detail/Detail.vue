<template>
	<div >
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
		
		</div>
	</div>
</template>

<script>
    import DetailBanner from './componments/Banner.vue'
	import DetailHeader from './componments/Header.vue'

	export default {
		name:'MyDetail',
		components:{
			DetailBanner,
			DetailHeader,
		
		},
		
		mounted(){
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
.content 
  height: 50rem
</style>