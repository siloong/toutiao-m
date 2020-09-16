import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import('@/styles/index.less');  //global style

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
