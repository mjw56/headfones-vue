<template>
  <div class="search-results">
      <div v-for="(value, propertyName) in results.data.search" :key="propertyName">
          <div v-if="propertyName === 'albums'">
              <search-results-card-block :list="value.items" :title="'albums'"></search-results-card-block>
          </div>

        <div v-if="propertyName === 'playlists'">
            <search-results-card-block :list="value.items" :title="'playlists'"></search-results-card-block>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
.search-results {
    padding: 0 30px;
}
</style>

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
