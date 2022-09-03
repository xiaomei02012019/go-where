<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './componments/Banner'
import DetailHeader from './componments/Header'
export default {
  name:'MyDetail',
  components:{DetailBanner,DetailHeader}

}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>