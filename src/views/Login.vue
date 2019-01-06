<template>
  <div class="login">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
  methods: {
    login(event: any) {
      const url = process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_PROD_SERVER
        : process.env.VUE_APP_DEV_SERVER;
      window.location.replace(`${url}/auth/connect`);
    }
  }
};

</script>
