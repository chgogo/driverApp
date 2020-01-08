// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'jquery'
// mint-ul
import 'mint-ui/lib/style.css'
// 页面初始化
import './assets/reset/reset.css'
// 自适应
import './assets/font'
// iconfont
import './assets/iconfont/iconfont.css'
Vue.use(MintUI)

//axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.baseUrl = process.env.API_ROOT // 设置全局的接口名称
Vue.prototype.locationUrl = process.env.API_ROOT_loction // 设置全局的接口名称
Vue.config.productionTip = false  //在生产环中不进行提示

// 鼠标滑动
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// VueI18n 语言切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import zh from './../static/lang/zh' // 简体中文语言包
import en from './../static/lang/en' // 英文语言包
import jp from './../static/lang/jp' // 日语语言包
const i18n = new VueI18n({
  locale: window.localStorage.getItem('language')===null?'zh':window.localStorage.getItem('language'), // 语言标识，设置默认语言
  messages: {
    'zh': zh, // 简体中文
    'en': en, // 英文
    'jp': jp // 繁体中文
  }
})
// 谷歌地图
// import 'vue-googlemaps/dist/vue-googlemaps.css'
// import VueGoogleMaps from 'vue-googlemaps'
// Vue.use(VueGoogleMaps, {
//   load: {
// //填入申请的apiKey账号
//     apiKey: 'AIzaSyDPAnb8XSsFnh1K5Gw8Z-8m7KjgIfZXXWQ',
//     libraries: ['places'],
//     useBetaRenderer: false,
//   },
// })

import Mui from 'vue-awesome-mui'; // mui插件
Vue.use(Mui);

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
