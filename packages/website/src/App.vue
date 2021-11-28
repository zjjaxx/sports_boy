<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <ZRow class="row" type="flex" :gutter="50">
    <ZCol :span="6">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="6" :offset="6">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="6">
       <div class="col-content"></div>
    </ZCol>
  </ZRow>
</template>

<style>
.row{
  background-color: #eee;
}
.col-content{
  background: #777;
  height: 50px;
}
</style>
