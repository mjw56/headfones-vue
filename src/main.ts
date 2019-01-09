import Vue from 'vue';
import App from './App.vue';
import Player from './components/Player.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  components: {
    player: Player,
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
