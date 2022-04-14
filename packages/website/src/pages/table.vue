<template>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData">
      <ZTableColumn width="160" propKey="date" label="时间"></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData" border>
      <ZTableColumn width="160" propKey="date" label="时间"></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData1" border height="300">
      <ZTableColumn width="160" propKey="date" label="时间"></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData2" border height="300">
      <ZTableColumn
        width="80"
        fixed="left"
        propKey="date"
        label="时间"
      ></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
      <ZTableColumn
        width="260"
        fixed="left"
        propKey="code"
        label="编码"
      ></ZTableColumn>
      <ZTableColumn width="860" propKey="mobile" label="手机号"></ZTableColumn>
      <ZTableColumn fixed="right" propKey="option" label="编辑"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData">
      <ZTableColumn width="160" propKey="date" label="时间">
        <template v-slot:default="scope">
          <h2>{{ scope.value }}</h2>
        </template>
      </ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData">
      <ZTableColumn width="160" type="selection"></ZTableColumn>
      <ZTableColumn width="160" propKey="date" label="时间"></ZTableColumn>
      <ZTableColumn width="260" propKey="name" label="名字"></ZTableColumn>
      <ZTableColumn propKey="address" label="地址"></ZTableColumn>
    </ZTable>
  </ZRow>
  <ZRow class="tab-wrapper">
    <ZTable :tableData="tableData">
      <ZTableColumn
        width="160"
        propKey="date1"
        label="时间1"
        sortable
      ></ZTableColumn>
      <ZTableColumn
        width="160"
        propKey="date1"
        label="时间2"
        sortable
      ></ZTableColumn>
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
const tableData1 = [
  { name: "zjjaxx", address: "杭州市", date: "2012-10-02" },
  { date: "2012-10-02", address: "杭州市", name: "zx" },
  { date: "2012-10-02", name: "zy", address: "杭州市" },
  { name: "zjjaxx", address: "杭州市", date: "2012-10-02" },
  { date: "2012-10-02", address: "杭州市", name: "zx" },
  { date: "2012-10-02", name: "zy", address: "杭州市" },
];
const tableData2 = [
  {
    name: "zjjaxx",
    address: "杭州市",
    date: "2012-10-02",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
  {
    date: "2012-10-02",
    address: "杭州市",
    name: "zx",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
  {
    date: "2012-10-02",
    name: "zy",
    address: "杭州市",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
  {
    name: "zjjaxx",
    address: "杭州市",
    date: "2012-10-02",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
  {
    date: "2012-10-02",
    address: "杭州市",
    name: "zx",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
  {
    date: "2012-10-02",
    name: "zy",
    address: "杭州市",
    code: "12345",
    mobile: 123345,
    option: "edit",
  },
];
</script>
<style>
.tab-wrapper {
  margin: 24px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
