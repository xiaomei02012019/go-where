<template>
  <div>
    <div class="title">
    热销推荐
  </div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
      <div class="item-info">
      <p class="item-title">{{item.title}}</p>
      <p class="item-desc">{{item.desc}}</p>
      <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
  </div>


</template>

<script>
  export default {
    name:'HomeRecommend',
    props:{
      list:Array
    },

  }
</script>
<!-- min-width:0文本过多，在同行显示三个点 -->
<!-- text-indent可以把文本段落的第一行缩进 -->
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
 .title
   margin-top: .2rem
   line-height: .8rem
   background:#eee
   text-indent: .2rem
 .item
   overflow:hidden 
   display:flex
   height:1.9rem
   .item-img
      width :1.7rem
      height:1.7rem
      padding: .1rem
   .item-info
      flex:1
      padding: .1rem
      min-width:0
    .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
    .item-desc
        line-height:.4rem
        margin-top: .1rem
        color:#ccc
    .item-button
        line-height: .4rem
        margin-top: .23rem
        background #dd9300
        padding: 0 .2rem
        border-radius .06
        color:#fff
</style>