<script lang="ts" setup>
import { getCurrentInstance, VNode, ComponentInternalInstance } from "vue";
import { matchParentComponentName } from "@/util/index";
interface Props {
  // table 标题
  label: string;
  // 标题对应的数据源中属性的key
  propKey: string;
  // 列宽
  width: string | number;
  // 是否固定
  fixed: boolean;
}
const props = defineProps<Props>();
const context = getCurrentInstance();
const isMatchParentComponent = matchParentComponentName(
  context?.parent as unknown as VNode,
  "ZTable"
);
if (isMatchParentComponent) {
  (context?.parent as ComponentInternalInstance).exposed?.tableColumnRegister({
    ...props,
    slots: context?.slots,
  });
}
</script>
