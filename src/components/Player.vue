<template>
  <div class="player" />
</template>

<script lang="ts">
import Vue from 'vue';
import { getCookie } from '../helpers/cookies';
import { SERVER_URL } from '../helpers/constants';

declare global {
    interface Window { Spotify: any; onSpotifyWebPlaybackSDKReady: any; }
}
window.onSpotifyWebPlaybackSDKReady = window.onSpotifyWebPlaybackSDKReady || {};

const Player = Vue.extend({
    data: () => ({
        device_id: null,
        player: null
    }),
    methods: {
        init() {
            this.player = new window.Spotify.Player({
                getOAuthToken: async (cb: any) => {
                    const user = await fetch(`${SERVER_URL}/token`, { credentials: 'include' }).then(
                        (res) => res.json()
                    );
                    cb(user.accessToken);
                },
                name: 'headfon.es',
                volume: 0.5,
            });

            this.player.addListener('ready', ({ device_id }: any) => {
                this.device_id = device_id;
            });
            this.player.addListener('not_ready', ({ device_id }: any) => {
                console.log('Device ID has gone offline', device_id);
            });

            this.player.connect();
        }
    },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    window.onSpotifyWebPlaybackSDKReady = () => {
        if (!getCookie('jwt')) {
            return;
        }
        this.init();
    };
    document.body.appendChild(script);
  }
});

Vue.component('player', Player);
export default Player;
</script>
