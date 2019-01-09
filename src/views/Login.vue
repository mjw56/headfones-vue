<template>
  <div class="login">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SERVER_URL } from '../helpers/constants';

export default {
  methods: {
    login(event: any) {
      window.location.replace(`${SERVER_URL}/auth/connect`);
    }
  }
};

</script>
