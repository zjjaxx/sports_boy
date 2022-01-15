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
</template>
<script lang="ts" setup></script>
<style>
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
