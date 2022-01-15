<template>
  <table class="z-table">
    <thead>
      <tr>
        <th v-for="(item, index) in tableColumnList" :key="index">
          {{ item.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in rowList" :key="index">
        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
      </tr>
    </tbody>
    <slot></slot>
  </table>
</template>
<script setup lang="ts">
import { ref, provide, computed, toRefs } from "vue";
interface Props {
  tableData: Array<Record<string, unknown>>;
}
interface TableColumnType {
  label: "";
  propKey: "";
  [propName: string]: any;
}
const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
});
const tableColumnList = ref<TableColumnType[]>([]);
const tableColumnRegister = (item: TableColumnType) => {
  tableColumnList.value.push(item);
};
provide("tableData", props.tableData);
const { tableData } = toRefs(props);
const rowList = computed(() => {
  return tableData.value.map((item) => {
    const _item = {};
    tableColumnList.value.forEach((column) => {
      _item[column.propKey] = item[column.propKey];
    });
    return _item;
  });
});
defineExpose({
  tableColumnRegister,
});
</script>
