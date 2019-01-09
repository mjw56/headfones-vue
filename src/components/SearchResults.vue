<template>
  <div class="search-results">
      <div v-for="(value, propertyName) in results.data.search" :key="propertyName">
          <div v-if="propertyName === 'albums'">
              <search-results-card-block :list="value.items"></search-results-card-block>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const SearchResults = Vue.extend({
    data: () => ({}),
    methods: { },
    props: ['results']
});

Vue.component('search-results', SearchResults);
export default SearchResults;
</script>
