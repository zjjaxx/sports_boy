<script lang="ts" setup>
import { getCurrentInstance, ComponentInternalInstance } from "vue";
import { matchParentComponentName } from "@/util/index";
interface Props {
  // table 标题
  label: string;
  // 标题对应的数据源中属性的key
  propKey: string;
  // 列宽
  width?: string | number;
  // 是否固定
  fixed?: boolean;
  // 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮
  type?: "selection" | "index" | "expand";
  // 排序
  sortable?: boolean;
}
const props = defineProps<Props>();
const context = getCurrentInstance();
const isMatchParentComponent = matchParentComponentName(
  context?.parent as unknown as ComponentInternalInstance,
  "ZTable"
);
if (isMatchParentComponent) {
  let columnData = {
    ...props,
    slots: context?.slots,
  };
  if (props.sortable) {
    columnData = Object.assign({}, columnData, { sortType: false });
  }

  (context?.parent as ComponentInternalInstance).exposed?.tableColumnRegister(
    columnData
  );
}
</script>
