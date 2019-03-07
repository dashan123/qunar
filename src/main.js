// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'css/iconfont/iconfont.css'
import 'css/reset.css'
import VueAweSomeSwiper from 'vue-awesome-swiper'
// 需要stylus
import 'swiper/dist/css/swiper.css'
import store from '@/store/store'

import animate from 'animate.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAweSomeSwiper)
Vue.use(animate)

const bus = new Vue()
Vue.prototype.$bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
