<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ZRow,ZCol} from 'zr_ui'
console.log("ZCol",ZCol)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <test></test>
  <p>website</p>
  <ZRow>
    a
  </ZRow>
  <ZCol></ZCol>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
