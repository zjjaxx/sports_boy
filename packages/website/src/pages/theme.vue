<template>
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
  <h3 class="test-a">h3h3h</h3>
</template>
<script lang="ts" setup>
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
