<template>
  <div class="search-results-card-block">
    <h1>{{title}}</h1>
    <div class="search-results-card-block__grid">
      <search-results-card
          v-for="item in list" :key="item.id"
          :image="item.images[0]" 
          :title="item.name"
          :uri="item.uri"></search-results-card>
    </div>
  </div>
</template>

<style lang="scss">
.search-results-card-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
}
.search-results-card-block__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-auto-flow: row;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
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
    props: ['list', 'title']
});

Vue.component('search-results-card-block', SearchResultsCardBlock);
export default SearchResultsCardBlock;
</script>
