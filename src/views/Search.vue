<template>
  <div class="search">
    <form class="search-task-bar" @submit.prevent="search">
      <input v-model="searchInput" placeholder="Search for an album, artist, song ..." />
    </form>

    <search-results :results="results" />
  </div>
</template>

<style lang="scss">
.search-task-bar {
  margin: 0 0 20px 0;

  input {
    height: 100px;
    width: 100%;
    font-size: 60px;
    padding: 0 30px;
    color: #2c3e50;
    font-weight: bold;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #2c3e50;

    &::placeholder {
      color: #999;
    }
  }
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
