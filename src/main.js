// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'
// import 'default-passive-events'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
//解决点击click事件，会延迟300毫秒执行
fastclick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")


// 移动端 1像素边框问题
// 手机分辨率高，1px是css像素，在手机里会变成多像素,解决：
// import './assets/styles/border.css'
//300毫秒点击延迟问题，在某些机型上，点击click事件，会延迟300毫秒执行，解决：
//fastclick

