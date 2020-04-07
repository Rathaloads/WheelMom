import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PyUi from '~/index'

Vue.config.productionTip = false

Vue.use(PyUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
