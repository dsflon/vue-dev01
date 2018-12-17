import Vue from 'vue';
import App from './App';

// import Slick from 'vue-slick';

// Vue.config.productionTip = false;
//
// //グローバルフィルター
// Vue.filter("currencyDecumal", function(value) {
//     return value.toFixed(2)
// })

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
      App,
      // Slick
  },
});
