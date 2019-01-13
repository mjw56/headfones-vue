<template>
  <div class="search-results-card" 
    v-on:click="handleCardClick"
    :data-uri="uri">
    <img v-bind:src="image.url" />
    <span>{{title}}</span>
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
    flex-shrink: 0;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import PlayerService from '../services/Player';

const SearchResultCard = Vue.extend({
    data: () => ({}),
    methods: {
      handleCardClick(e: Event) {
        const uri = this.$el.getAttribute('data-uri');
        PlayerService.play(uri);
      }
    },
    props: ['image', 'title', 'uri']
});

Vue.component('search-result-card', SearchResultCard);
export default SearchResultCard;
</script>
