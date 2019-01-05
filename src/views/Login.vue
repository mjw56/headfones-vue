<template>
  <div class="login">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  methods: {
    login(event) {
      window.location.replace('http://localhost:3004/auth/connect');
    }
  }
})
export default class Login extends Vue {}
</script>
