<template>
  <div class="search">
    <input v-model="searchInput" />
    <button v-on:click="search">search</button>

    <search-results :results="results" />
  </div>
</template>

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
