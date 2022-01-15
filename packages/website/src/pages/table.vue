<template>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData">
      <ZTableColumn width="160" propKey="date" label="时间"></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
</template>
<script setup lang="ts">
const tableData = [
  { name: "zjjaxx", address: "杭州市", date: "2012-10-02" },
  { date: "2012-10-02", address: "杭州市", name: "zx" },
  { date: "2012-10-02", name: "zy", address: "杭州市" },
];
</script>
<style>
.tab-wrapper {
  margin: 24px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
