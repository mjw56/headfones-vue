<template>
  <div class="search-results-card-block">
    <search-results-card
        v-for="item in list" :key="item.id"
        :image="item.images[0]" 
        :title="item.name"
        :uri="item.uri"></search-results-card>
  </div>
</template>

<style lang="scss">
.search-results-card-block {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-auto-flow: row;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import SearchResultsCard from './SearchResultsCard.vue';

const SearchResultsCardBlock = Vue.extend({
    components: {
        'search-results-card': SearchResultsCard
    },
    data: () => ({}),
    methods: { },
    props: ['list']
});

Vue.component('search-results-card-block', SearchResultsCardBlock);
export default SearchResultsCardBlock;
</script>
