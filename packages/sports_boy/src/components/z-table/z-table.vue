<template>
  <table
    ref="table"
    class="z-table z-flex z-flex-column"
    :class="[border && 'z-table-border']"
    :style="{ height: parseInt(height + '') + 'px' }"
  >
    <thead ref="thead" :class="[height && 'z-header-sticky']">
      <tr>
        <th
          v-for="(item, index) in tableColumnList"
          :key="index"
          :class="[
            item.width ? 'flex-0' : 'flex-1',
            item.fixed ? 'z-th-sticky-' + item.fixed : '',
          ]"
          :style="{ width: parseFloat(item.width + '') + 'px' }"
        >
          <div class="cell">{{ item.label }}</div>
        </th>
      </tr>
    </thead>
    <tbody class="z-flex z-flex-column">
      <tr v-for="(item, index) in rowList" :key="index">
        <td
          v-for="(value, key, _index) in item"
          :key="key"
          :class="[tableColumnList[_index].width ? 'flex-0' : 'flex-1']"
          :style="{
            width: parseInt(tableColumnList[_index].width + '') + 'px',
          }"
        >
          <div class="cell">{{ value }}</div>
        </td>
      </tr>
    </tbody>
    <slot></slot>
  </table>
</template>
<script setup lang="ts">
import { ref, computed, toRefs } from "vue";
interface Props {
  // 数据源
  tableData: Array<Record<string, unknown>>;
  // 是否带边框
  border: boolean;
  // 高度
  height: string | number;
}
const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
});
// 子组件类型
interface TableColumnType {
  label: string;
  propKey: string;
  width: string | number;
  fixed: boolean;
  [propName: string]: any;
}
const tableColumnList = ref<TableColumnType[]>([]);
// 收集子组件
const tableColumnRegister = (item: TableColumnType) => {
  tableColumnList.value.push(item);
};

const { tableData, border, height } = toRefs(props);
// 生成table body 行数据
const rowList = computed(() => {
  return tableData.value.map((item) => {
    const _item = {};
    tableColumnList.value.forEach((column) => {
      _item[column.propKey] = item[column.propKey];
    });
    return _item;
  });
});
// 向子组件暴露tableColumnRegister 方法
defineExpose({
  tableColumnRegister,
});
</script>
