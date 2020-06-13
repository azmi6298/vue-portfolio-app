import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
// import './assets/js/app.js'
Vue.use(VueFullPage);

import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
