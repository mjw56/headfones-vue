<template>
  <div class="search">
    <input v-model="searchInput" />
    <button v-on:click="search">search</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { client } from '../helpers/graphql';
import { SearchResultsQuery } from '../queries';

export default Vue.extend({
  data: () => ({
    searchInput: ''
  }),
  methods: {
    async search(event: any) {
      console.log(this.searchInput);

      try {
        const res = await client.request(SearchResultsQuery, { query: this.searchInput });
        console.log(res);

      } catch (e) {
        console.log('err', e);
      }
    }
  }
});

</script>
