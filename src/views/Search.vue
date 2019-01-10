<template>
  <div class="search">
    <div class="search-task-bar">
      <input v-model="searchInput" />
      <button v-on:click="search">search</button>
    </div>

    <search-results :results="results" />
  </div>
</template>

<style lang="scss">
.search-task-bar {
  margin: 20px 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { client } from '../helpers/graphql';
import { SearchResultsQuery } from '../queries';

export default Vue.extend({
  data: () => ({
    searchInput: '',
    results: { data: null }
  }),
  methods: {
    async search(event: any) {
      try {
        const res = await client.request(SearchResultsQuery, { query: this.searchInput });
        Vue.set(this.results, 'data', res);
      } catch (e) {
        console.log('err', e);
      }
    }
  }
});

</script>
