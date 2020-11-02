import Vue from 'vue'
import App from './App.vue'
import Router from './routers/index.js'

Vue.config.productionTip = false

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
