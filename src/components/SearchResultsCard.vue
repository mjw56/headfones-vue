<template>
  <div class="search-results-card">
    <img v-bind:src="image.url" />
    {{title}}
    {{uri}}
  </div>
</template>

<style lang="scss">
.search-results-card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: inline-block;

  img {
    z-index: 1;
    object-fit: cover;
    width: 100%;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

const SearchResultCard = Vue.extend({
    data: () => ({}),
    methods: { },
    props: ['image', 'title', 'uri']
});

Vue.component('search-result-card', SearchResultCard);
export default SearchResultCard;
</script>
