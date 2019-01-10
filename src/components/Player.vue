<template>
  <div class="player" />
</template>

<script lang="ts">
import Vue from 'vue';
import PlayerService from '../services/Player';

const Player = Vue.extend({
    data: () => ({
        playerService: null
    }),
    methods: {},
  mounted() {
      this.playerService = new PlayerService();
  }
});

Vue.component('player', Player);
export default Player;
</script>
