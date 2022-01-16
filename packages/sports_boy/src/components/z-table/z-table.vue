<template>
  <table
    ref="table"
    class="z-table"
    :class="[border && 'z-table-border']"
    :style="{ height: parseInt(height + '') + 'px' }"
  >
    <thead ref="thead">
      <tr>
        <th
          v-for="(item, index) in tableColumnList"
          :key="index"
          :style="{ width: calcWidth(item.width) }"
        >
          <div class="cell">{{ item.label }}</div>
        </th>
      </tr>
    </thead>
    <tbody :style="{ height: tbodyHeight + 'px' }">
      <tr v-for="(item, index) in rowList" :key="index">
        <td
          v-for="(value, key, _index) in item"
          :key="key"
          :style="{ width: calcWidth(tableColumnList[_index].width) }"
        >
          <div class="cell">{{ value }}</div>
        </td>
      </tr>
    </tbody>
    <slot></slot>
  </table>
</template>
<script setup lang="ts">
import { ref, computed, toRefs, onMounted, onUnmounted } from "vue";
import { debounce } from "@/util/index";
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
    const singleFlexWidth =
      ((table.value as unknown as HTMLElement).clientWidth -
        (fixTotalWidth as number)) /
      flexWidthList.length;
    return singleFlexWidth + "px";
  } else {
    return parseInt(width + "") + "px";
  }
};
// 动态计算tbody高度
const thead = ref(null);
const tbodyHeight = ref();
const callBack = debounce(() => {
  console.log("trigger----");
  // 触发页面刷新
  tableColumnList.value = [...tableColumnList.value];
}, 300);
onMounted(() => {
  // 如果传入了height
  if (height.value) {
    tbodyHeight.value =
      parseInt(height.value + "") -
      (thead.value as unknown as HTMLElement).offsetHeight;
  }
  // 监听窗口尺寸变化
  window.addEventListener("resize", callBack);
});
onUnmounted(() => {
  window.removeEventListener("resize", callBack);
});
// 向子组件暴露tableColumnRegister 方法
defineExpose({
  tableColumnRegister,
});
</script>
