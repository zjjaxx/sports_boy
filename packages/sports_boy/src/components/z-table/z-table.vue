<script lang="tsx">
import { defineComponent, ref, toRefs, onMounted, computed } from "vue";
import ZCheckbox from "@/components/z-checkbox/z-checkbox.vue";
import ZCheckboxGroup from "@/components/z-checkbox-group/z-checkbox-group.vue";
// 子组件类型
interface TableColumnType {
  label: string;
  propKey: string;
  width?: string | number;
  fixed?: boolean;
  type?: "selection" | "index" | "expand";
  sortable?: boolean;
  [propName: string]: any;
}
export default defineComponent({
  props: {
    // 数据源
    tableData: {
      type: Array,
      default: () => [],
    },
    // 是否带边框
    border: Boolean,
    // 高度
    height: {
      type: [String, Number],
      default: 0,
    },
  },
  setup(props, { expose, slots }) {
    const { tableData, border, height } = toRefs(props);
    const tableColumnList = ref<TableColumnType[]>([]);
    // 收集子组件
    const tableColumnRegister = (item: TableColumnType) => {
      tableColumnList.value.push(item);
    };
    // 排序
    const rowList = computed(() => {
      return tableData.value.map((item) => {
        const _item = {};
        tableColumnList.value.forEach((column) => {
          _item[column.propKey] = (item as Object)[column.propKey];
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
      tableWidth.value = Math.max(
        (table.value as unknown as HTMLElement).clientWidth,
        minWidth as number
      );
    });
    // 计算固定列前的总宽度
    const calcTotalLeft = (index: number) => {
      return tableColumnList.value
        .slice(0, index)
        .filter((item) => item.fixed)
        .map((item) => item.width)
        .reduce((a, b) => {
          if (!b) {
            // column 最小为80
            b = 80;
          }
          return parseInt(a + "") + parseInt(b + "");
        }, 0);
    };
    // 向子组件暴露tableColumnRegister 方法
    expose({ tableColumnRegister });
    const indeterminate = ref(false);
    const checkAll = ref(false);
    const checkboxGroup = ref<number[]>([]);
    const checkAllChange = (value: boolean) => {
      console.log("value", value);
      checkboxGroup.value = value
        ? new Array(tableData.value.length).fill("").map((item, index) => index)
        : [];
      indeterminate.value = false;
    };
    const groupChange = (value: any[]) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === tableData.value.length;
      indeterminate.value =
        checkedCount > 0 && checkedCount < tableData.value.length;
    };
    const calcTh = (item: TableColumnType) => {
      switch (item.type) {
        case "selection":
          return (
            <ZCheckbox
              onChange={checkAllChange}
              v-model={checkAll.value}
              indeterminate={indeterminate.value}
            ></ZCheckbox>
          );
        default:
          if (item.sortable) {
            return (
              <div class="cell z-flex align-center">
                <span>{item.label}</span>
                <span class="caret-wrapper">
                  <i class="sort-caret ascending"></i>
                  <i class="sort-caret descending"></i>
                </span>
              </div>
            );
          }
          return <div class="cell">{item.label}</div>;
      }
    };
    const calcTd = (item: TableColumnType, value, index) => {
      switch (item.type) {
        case "selection":
          return <ZCheckbox showLabel={false} label={index}></ZCheckbox>;
        default:
          return <div class="cell">{value}</div>;
      }
    };
    const tableRender = computed(() => (
      <div
        ref={table}
        class={["z-table-wrapper", border.value && "z-table-border"]}
        style={{ height: parseInt(height.value + "") + "px" }}
      >
        <table class="z-table" style={{ width: tableWidth.value + "px" }}>
          <colgroup>
            {tableColumnList.value.map((item, index) => (
              <col key={index} width={parseFloat(item.width + "") + "px"} />
            ))}
          </colgroup>
          <thead ref="thead" class={[height.value && "z-header-sticky"]}>
            <tr>
              {tableColumnList.value.map((item, index) => (
                <th
                  key={index}
                  class={[item.fixed ? "z-th-sticky-" + item.fixed : ""]}
                  style={{
                    left: item.fixed ? calcTotalLeft(index) + "px" : "",
                  }}
                >
                  {calcTh(item)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowList.value.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, _index) => {
                  const value = item[key];
                  return (
                    <td
                      key={key}
                      class={[
                        tableColumnList.value[_index].fixed
                          ? "z-th-sticky-" + tableColumnList.value[_index].fixed
                          : "",
                      ]}
                      style={{
                        left: tableColumnList.value[_index].fixed
                          ? calcTotalLeft(_index) + "px"
                          : "",
                      }}
                    >
                      {tableColumnList.value[_index].slots.default
                        ? tableColumnList.value[_index].slots.default({ value })
                        : calcTd(tableColumnList.value[_index], value, index)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          {slots.default && slots.default()}
        </table>
      </div>
    ));

    return () => {
      return tableColumnList.value.find(
        (column) => column.type === "selection"
      ) ? (
        //@ts-ignore
        <ZCheckboxGroup v-model={checkboxGroup.value} onChange={groupChange}>
          {tableRender.value}
        </ZCheckboxGroup>
      ) : (
        tableRender.value
      );
    };
  },
});
</script>
