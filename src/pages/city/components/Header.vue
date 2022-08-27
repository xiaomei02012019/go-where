<template>
	<div class="header">
		<router-link to="/" class="header-left">
        <div class="iconfont header-back">&#xe685;</div>
		</router-link>
		城市选择
		
	</div>
</template>

<script>
	export default {
		name:"CityHeader"
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size:.32rem
  .header-left
      width .64rem
      float: left
      .back-icon
        text-align: center
        font-size:.4rem
		color: #fff
</style>