// 入口js
import Vue from 'vue'
import App from './App'

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './router'

//状态管理
import store from './store/index.js'
import { mapGetters, mapActions ,mapState} from 'vuex'

//引入封装的请求文件鹤配置文件
import Fetch from './util/fetch'
import Config from './util/config'

//引入css
import '../static/common.css'
import '../static/border.scss'

//引入适配
import 'lib-flexible/flexible'

//引入swiper
import VueAwesomeSwiper  from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);   //全局声明

//引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})


Vue.config.productionTip = false

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode: 'history',            // HTML5 history 模式
  routes: routes,
  scrollBehavior(to,from,savePosition){
    return {x:0,y:0}
  }
})


/* eslint-disable no-new */
window.vm = new Vue({
  router,
  store,
  render: v => v(App),
  data:{
    mapGetters,             // 全局引入 vuex mapGetters 函数
    mapActions 
  }
}).$mount('#app')
