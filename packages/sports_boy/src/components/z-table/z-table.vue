<script lang="tsx">
import { defineComponent, ref, toRefs, onMounted, computed } from "vue";
// 子组件类型
interface TableColumnType {
  label: string;
  propKey: string;
  width: string | number;
  fixed: boolean;
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
    height: [String, Number],
  },
  setup(props, { expose, slots }) {
    const { tableData, border, height } = toRefs(props);
    const tableColumnList = ref<TableColumnType[]>([]);
    // 收集子组件
    const tableColumnRegister = (item: TableColumnType) => {
      tableColumnList.value.push(item);
    };
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
    return () => (
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
                  <div class="cell">{item.label}</div>
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
                      {tableColumnList.value[_index].slots.default ? (
                        tableColumnList.value[_index].slots.default({ value })
                      ) : (
                        <div class="cell">{value}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          {slots.default && slots.default()}
        </table>
      </div>
    );
  },
});
</script>
