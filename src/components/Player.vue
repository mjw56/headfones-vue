<template>
  <div class="player">
      <button v-on:click="previous">Previous</button>
      <button v-on:click="play">Play</button>
      <button v-on:click="pause">Pause</button>
      <button v-on:click="next">Next</button>
  </div>
</template>

<style lang="scss">
.player {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #2c3e50;
}
</style>

<script lang="ts">
import Vue from 'vue';
import PlayerService from '../services/Player';

const Player = Vue.extend({
    data: () => ({
        playerService: null
    }),
    methods: {
        play: PlayerService.togglePlay,
        pause: PlayerService.togglePlay,
        previous: PlayerService.previousTrack,
        next: PlayerService.nextTrack,

    },
  mounted() {
      this.playerService = PlayerService;
      this.playerService.embed();
  }
});

Vue.component('player', Player);
export default Player;
</script>
