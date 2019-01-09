import Vue from 'vue';
import App from './App.vue';
import Player from './components/Player.vue';
import SearchResults from './components/SearchResults.vue';
import SearchResultsCardBlock from './components/SearchResultsCardBlock.vue';
import SearchResultsCard from './components/SearchResultsCard.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  components: {
    'player': Player,
    'search-results': SearchResults,
    'search-results-card-block': SearchResultsCardBlock
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
