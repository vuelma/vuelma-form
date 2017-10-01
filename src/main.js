// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/**
 * Converts a snake case string to title case.
 *
 * @param  {String} value the string to convert
 * @return {String}
 */
Vue.filter('snakeToTitle', value => (
  value.split('_').map(char => (
    char.charAt(0).toUpperCase() + char.substring(1)
  )).join(' ')
));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
