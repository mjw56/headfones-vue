<template>
  <div class="home">
    <h1>Home</h1>
    <input v-model="searchInput" />
    <button v-on:click="search">search</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { client } from '../helpers/graphql';
import { SearchResultsQuery } from '../queries';

export default {
  methods: {
    async search(event: any) {
      const vm: any = this;
      console.log(vm.searchInput);

      try {
        const res = await client.request(SearchResultsQuery, { query: vm.searchInput });
        console.log(res);

      } catch (e) {
        console.log('err', e);
      }
    }
  }
};

</script>
