<template>
  <ZRow>
    <ZCheckbox v-model="flag">备选项</ZCheckbox>
  </ZRow>
  <ZRow>
    <ZCheckbox disabled v-model="flag1">备选项</ZCheckbox>
    <ZCheckbox disabled :modelValue="true">备选项</ZCheckbox>
  </ZRow>
  {{ group }}
  <ZCheckboxGroup v-model="group">
    <ZCheckbox label="a">备选项</ZCheckbox>
    <ZCheckbox label="b">备选项</ZCheckbox>
    <ZCheckbox label="c">备选项</ZCheckbox>
    <ZCheckbox disabled label="d">备选项</ZCheckbox>
  </ZCheckboxGroup>
  <h2>{{ group3 }}</h2>
  <ZCheckboxGroup v-model="group3" min="2" max="4">
    <ZCheckbox label="a">备选项a</ZCheckbox>
    <ZCheckbox label="b">备选项b</ZCheckbox>
    <ZCheckbox label="c">备选项c</ZCheckbox>
    <ZCheckbox label="d">备选项d</ZCheckbox>
    <ZCheckbox label="e">备选项e</ZCheckbox>
    <ZCheckbox label="f">备选项f</ZCheckbox>
  </ZCheckboxGroup>
  <ZCheckbox
    v-model="checkAll"
    @change="handleCheckAllChange"
    :indeterminate="indeterminate"
    >全选</ZCheckbox
  >
  <ZCheckboxGroup v-model="group1" @change="groupChange">
    <ZCheckbox label="a">备选项a</ZCheckbox>
    <ZCheckbox label="b">备选项b</ZCheckbox>
    <ZCheckbox label="c">备选项c</ZCheckbox>
  </ZCheckboxGroup>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
const flag = ref(false);
const flag1 = ref(false);
const group = ref(["c", "d"]);
const group3 = ref(["c", "d"]);
watchEffect(() => {
  console.log("group change", group.value);
});
const checkAll = ref(false);
const indeterminate = ref(true);
const group1 = ref(["a"]);

const handleCheckAllChange = (val: boolean) => {
  group1.value = val ? ["a", "b", "c"] : [];
  indeterminate.value = false;
};
const groupChange = (value: any[]) => {
  let checkedCount = value.length;
  checkAll.value = checkedCount === 3;
  indeterminate.value = checkedCount > 0 && checkedCount < 3;
};
</script>
