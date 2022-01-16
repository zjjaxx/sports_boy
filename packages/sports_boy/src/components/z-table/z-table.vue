<template>
  <div
    ref="table"
    class="z-table-wrapper"
    :class="[border && 'z-table-border']"
    :style="{ height: parseInt(height + '') + 'px' }"
  >
    <table class="z-table" :style="{ width: tableWidth + 'px' }">
      <colgroup>
        <col
          v-for="(item, index) in tableColumnList"
          :key="index"
          :width="parseFloat(item.width + '') + 'px'"
        />
      </colgroup>
      <thead ref="thead" :class="[height && 'z-header-sticky']">
        <tr>
          <th
            v-for="(item, index) in tableColumnList"
            :key="index"
            :class="[item.fixed ? 'z-th-sticky-' + item.fixed : '']"
          >
            <div class="cell">{{ item.label }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rowList" :key="index">
          <td v-for="(value, key) in item" :key="key">
            <div class="cell">{{ value }}</div>
          </td>
        </tr>
      </tbody>
      <slot></slot>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, toRefs, onMounted } from "vue";
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
// 动态计算table 宽度
const table = ref();
const tableWidth = ref(0);
onMounted(() => {
  const minWidth = tableColumnList.value
    .map((column) => column.width)
    .reduce((a, b) => {
      if (!b) {
        // column 最小为80
        b = 80;
      }
      return parseInt(a + "") + parseInt(b + "");
    }, 0);
  console.log((table.value as unknown as HTMLElement).clientWidth);
  tableWidth.value = Math.max(
    (table.value as unknown as HTMLElement).clientWidth,
    minWidth as number
  );
});
// 向子组件暴露tableColumnRegister 方法
defineExpose({
  tableColumnRegister,
});
</script>
