import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// lib
import Vant from 'vant'; //vant component
import 'amfe-flexible'; //flex setting html font-size

// css
import 'vant/lib/index.css';  //vant component style
import '@/styles/index.less';  //global style

// use
Vue.use(Vant);  //use vant component

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
