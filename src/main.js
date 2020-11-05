import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/js/bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(bootstrap);
new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')
 