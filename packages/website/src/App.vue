<script setup lang="ts">
import { ref } from "vue";
const size = ref("default");
const sizeChange = (_size: string) => {
  size.value = _size;
};
const type = ref();
const typeChange = (_type: string) => {
  type.value = _type;
};
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
  <ZRow class="row-1">
    <ZCol :span="6">
      <ZButton :size="size" style="margin-left: 10px" @click=""
        >默认按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
        >中等按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        size="small"
        style="margin-left: 10px"
        @click="sizeChange('small')"
        >小型按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton size="mini" style="margin-left: 10px" @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :span="4">
      <ZButton :type="type" style="margin-left: 10px">default</ZButton>
    </ZCol>
    <ZCol :span="4">
      <ZButton
        type="primary"
        style="margin-left: 10px"
        @click="typeChange('primary')"
        >主要按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton type="info" style="margin-left: 10px" @click="typeChange('info')"
        >通知按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        type="warning"
        style="margin-left: 10px"
        @click="typeChange('warning')"
        >警告按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        type="danger"
        style="margin-left: 10px"
        @click="typeChange('danger')"
        >危险按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        type="success"
        style="margin-left: 10px"
        @click="typeChange('success')"
        >成功按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :span="4">
      <ZButton
        round
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
        >中等按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        size="small"
        round
        style="margin-left: 10px"
        @click="sizeChange('small')"
        >小型按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        round
        size="mini"
        style="margin-left: 10px"
        @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        round
        type="primary"
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
        >中等按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        size="small"
        type="primary"
        round
        style="margin-left: 10px"
        @click="sizeChange('small')"
        >小型按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        round
        size="mini"
        type="primary"
        style="margin-left: 10px"
        @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :span="4">
      <ZButton
        disable
        type="primary"
        style="margin-left: 10px"
        @click="typeChange('primary')"
        >主要按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        disable
        type="info"
        style="margin-left: 10px"
        @click="typeChange('info')"
        >通知按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        disable
        type="warning"
        style="margin-left: 10px"
        @click="typeChange('warning')"
        >警告按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        disable
        type="danger"
        style="margin-left: 10px"
        @click="typeChange('danger')"
        >危险按钮</ZButton
      >
    </ZCol>
    <ZCol :span="4">
      <ZButton
        disable
        type="success"
        style="margin-left: 10px"
        @click="typeChange('success')"
        >成功按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :span="6">
      <ZButton
        icon="share"
        round
        type="primary"
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
      ></ZButton>
    </ZCol>
    <ZCol :span="6">
      <ZButton
        icon="share"
        round
        type="primary"
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
        >中等按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        icon="share"
        size="small"
        type="primary"
        round
        style="margin-left: 10px"
        @click="sizeChange('small')"
        >小型按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        icon="share"
        round
        size="mini"
        type="primary"
        style="margin-left: 10px"
        @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :span="6">
      <ZButton
        icon="share"
        loading
        type="primary"
        size="medium"
        style="margin-left: 10px"
        @click="sizeChange('medium')"
        >中等按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        loading
        icon="share"
        size="small"
        type="primary"
        round
        style="margin-left: 10px"
        @click="sizeChange('small')"
        >小型按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        loading
        icon="share"
        round
        size="mini"
        type="primary"
        style="margin-left: 10px"
        @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
    <ZCol :span="6">
      <ZButton
        loading
        icon="share"
        round
        size="mini"
        style="margin-left: 10px"
        @click="sizeChange('mini')"
        >超小按钮</ZButton
      >
    </ZCol>
  </ZRow>
  <ZRow class="row-1">
    <ZCol :offset="2" :span="6">
      <ZButtonGroup>
        <ZButton icon="share" type="primary">按钮组</ZButton>
        <ZButton icon="share" type="primary">按钮组</ZButton>
      </ZButtonGroup>
    </ZCol>
    <ZCol :span="6">
      <ZButtonGroup>
        <ZButton icon="share">按钮组</ZButton>
        <ZButton icon="share">按钮组</ZButton>
      </ZButtonGroup>
    </ZCol>
    <ZCol :span="6">
      <ZButtonGroup>
        <ZButton icon="share" round>按钮组</ZButton>
        <ZButton icon="share" round>按钮组</ZButton>
      </ZButtonGroup>
    </ZCol>
  </ZRow>
</template>

<style>
.row {
  margin-top: 10px;
  background-color: #eee;
}
.row-1 {
  margin-top: 10px;
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
