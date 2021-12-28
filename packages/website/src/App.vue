<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <ZContainer>
    <ZHeader></ZHeader>
    <ZContainer>
      <ZAside></ZAside>
      <ZContainer>
        <ZMain></ZMain>
        <ZFooter></ZFooter>
      </ZContainer>
    </ZContainer>
  </ZContainer>
  <ZRow class="row" :gutter="50">
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
  </ZRow>
</template>

<style>
.row {
  margin-top: 10px;
  background-color: #eee;
}
.col-content {
  background: #777;
  height: 50px;
}
.z-container {
  background-color: #eee;
}
.z-header {
  background-color: #b3c0d1;
}
.z-aside {
  height: 260px;
  background-color: #d3dce6;
}
.z-footer {
  background-color: #b3c0d1;
}
.z-main {
  background-color: #e9eef3;
}
</style>
