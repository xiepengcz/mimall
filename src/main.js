import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import lazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// import env from './env'
// import Swiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(Message)
// Vue.use(Swiper)
// mock开头
const mock = false
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
// 超时时间
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口响应错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (location.hash !== '#/index') { window.location.href = '/#/login' }
  } else {
    Message.error(res.msg)
    return Promise.reject(res)
  }
})
Vue.use(lazyload, {
  loading: '/imgs/loading-svg/loading-spinning-bubbles.svg'
})
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
