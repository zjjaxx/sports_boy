<script setup lang="ts">
import {ref} from "vue"
const size=ref("default")
const sizeChange=(_size:string)=>{
  size.value=_size
}
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
  <ZIcon></ZIcon>
  <ZRow>
    <ZCol :span="6">
       <ZButton :size="size" style="margin-left: 10px;" @click="">default</ZButton>
    </ZCol> 
    <ZCol :span="6">
       <ZButton size="medium" style="margin-left: 10px;" @click="sizeChange('medium')">medium</ZButton>
    </ZCol> 
     <ZCol :span="6">
       <ZButton size="small" style="margin-left: 10px;" @click="sizeChange('small')">small</ZButton>
    </ZCol> 
     <ZCol :span="6">
       <ZButton size="mini" style="margin-left: 10px;" @click="sizeChange('mini')">mini</ZButton>
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
