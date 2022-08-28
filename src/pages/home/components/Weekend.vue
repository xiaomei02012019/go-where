<template>
  <div>
    <div class="title">
    周末去哪儿
  </div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">
        </div>
      <div class="item-info">
      <p class="item-title">{{item.title}}</p>
      <p class="item-desc">{{item.desc}}</p>
    
      </div>
    </li>
  </ul>
  </div>


</template>

<script>
  export default {
    name:'HomeWeekend',
    data(){
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
            title:'白石山世界地质公园',
            desc:'体验悬空玻璃栈道白石山景区'
          },
           {
            id:'0002',
            imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
            title:'白石山世界地质公园',
            desc:'体验悬空玻璃栈道白石山景区'
          },
           {
            id:'0003',
            imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
            title:'白石山世界地质公园',
            desc:'体验悬空玻璃栈道白石山景区'
          }
        ]
      }
    }

  }
</script>
<!-- min-width:0文本过多，在同行显示三个点 -->
<!-- text-indent可以把文本段落的第一行缩进 -->
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding:.1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>