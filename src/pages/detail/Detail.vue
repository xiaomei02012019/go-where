<template>
	<div >
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
    import DetailBanner from './componments/Banner.vue'
	import DetailHeader from './componments/Header.vue'
	import DetailList from './componments/List.vue'
	import axios from 'axios'
	export default {
		name:'MyDetail',
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return{
				list:[{
				title:'成人票',
				children:[{
					title:'成人三馆联票',
					children:[{
					title:'成人三馆联票-某一连锁店销售'
				}]
				},{
					title:'成人五馆联票'
				}]
			},{
				title:'学生票'
			},{
				title:'儿童票'
			},{
				title:'特惠票'
			},]}
		},
		methods:{
			getDetailInfo(){
                 axios.get('/api/detail/json?id='+this.$route.params.id)
			}
		},
		mounted(){
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
</style>