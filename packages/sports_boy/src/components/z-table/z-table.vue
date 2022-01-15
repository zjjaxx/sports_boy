<template>
  <table ref="table" class="z-table">
    <thead>
      <tr>
        <th
          v-for="(item, index) in tableColumnList"
          :key="index"
          :style="{ width: calcWidth(item.width) }"
        >
          {{ item.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in rowList" :key="index">
        <td
          v-for="(value, key, _index) in item"
          :key="key"
          :style="{ width: calcWidth(tableColumnList[_index].width) }"
        >
          {{ value }}
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
}
const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
});
// 子组件类型
interface TableColumnType {
  label: string;
  propKey: string;
  width: string | number;
  [propName: string]: any;
}
const tableColumnList = ref<TableColumnType[]>([]);
// 收集子组件
const tableColumnRegister = (item: TableColumnType) => {
  tableColumnList.value.push(item);
};

const { tableData } = toRefs(props);
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
// 计算列宽度
const table = ref(null);
const calcWidth = (width: string | number) => {
  if (width === undefined) {
    const fixTotalWidth = tableColumnList.value
      .filter((column) => column.width)
      .map((item) => item.width)
      .reduce((a, b) => {
        return parseInt(a + "") + parseInt(b + "");
      }, 0);
    const flexWidthList = tableColumnList.value.filter(
      (column) => column.width === undefined
    );
    console.log(
      "table.value",
      (table.value as unknown as HTMLElement).clientWidth
    );
    const singleFlexWidth =
      ((table.value as unknown as HTMLElement).clientWidth -
        (fixTotalWidth as number)) /
      flexWidthList.length;
    return singleFlexWidth + "px";
  } else {
    return parseInt(width + "") + "px";
  }
};
// 向子组件暴露tableColumnRegister 方法
defineExpose({
  tableColumnRegister,
});
</script>
