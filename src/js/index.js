import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

//グローバルフィルター
Vue.filter("currencyDecumal", function(value) {
    return value.toFixed(2)
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
