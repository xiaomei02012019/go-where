<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchEnd="handleTouchEnd"
    >{{item}}</li>
  </ul>

</template>
<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  computed:{
    letters(){
      const letters=[]
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
      // ['A','B','C']
    }
  },
  data(){
    return{
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated(){
    this.startY=this.$refs['A'][0].offsetTop
  },
  methods:{
    handleLetterClick(e){
      console.log(e.target.innerText)
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
     this.touchStatus=true
    },
    handleTouchMove(e){

       //A元素距离顶部的高度
       // const startY=this.$refs['A'][0].offsetTop
       // console.log(startY)
       // const touchY=e.touches[0].clientY-79
       // console.log(touchY)
       if(this.touchStatus){
         if(this.timer){
           clearTimeout(this.timer)
         }
         this.timer=setTimeout(()=>{
           const touchY=e.touches[0].clientY-79
           const index=Math.floor((touchY-this.startY)/20)
           if(index>=0 && index<this.letters.length){
             this.$emit('change',this.letters[index])
           }
         },10)
       }
    },
    handleTouchEnd(){
      this.touchStatus=false
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
  display :flex
  flex-direction :column
  justify-content :center
  position :absolute
  top: 1.58rem
  right:0
  bottom:0
  width .4rem
.item
  line-height: .44rem
  text-align :center
  color :$bgColor
</style>