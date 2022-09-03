<template>
  <div>
    <detail-banner 
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    :categoryList="categoryList"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
   
  </div>
</template>

<script>
import DetailBanner from './componments/Banner'
import DetailHeader from './componments/Header'
import DetailList from './componments/List.vue'
import axios from 'axios'
export default {
  name:'MyDetail',
  components:{DetailBanner,DetailHeader,DetailList},
  data(){
    return{
      sightName:'',
      bannerImg:'',
      gallaryImgs:'',
      categoryList:'',
      list:[
        {
          title:"成人票",
          children:[
          {
            title:'成人三馆联票',
            children:[
              {
                title:'成人三馆联票 - 某一连锁店销售',
              }
            ]
          },
          {
            title:'成人五馆联票'
          }
          ]
        },
        {
          title:"学生票",
        },
        {
          title:"儿童票",
        },
        {
          title:"特惠票",
        }
      ]
    }
  }, 
  methods:{
    getDetailInfo(){
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res){
     res=res.data
     if(res.ret&& res.data){
      const data=res.data
      this.sightName=data.sightName
      this.bannerImg=data.bannerImg
      this.gallaryImgs=data.gallaryImgs
      this.list=data.categoryList
     }
    }
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