import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import bitsToMB from '@/filters/bitsToMB'

Vue.config.productionTip = false
Vue.filter('bitsToMB', bitsToMB)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
