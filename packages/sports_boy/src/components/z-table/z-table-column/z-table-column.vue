<script lang="ts" setup>
import { getCurrentInstance, VNode, ComponentInternalInstance } from "vue";
import { matchParentComponentName } from "@/util/index";
interface Props {
  label: string;
  propKey: string;
  width: string | number;
}
const props = defineProps<Props>();
const context = getCurrentInstance();
const isMatchParentComponent = matchParentComponentName(
  context?.parent as unknown as VNode,
  "ZTable"
);
if (isMatchParentComponent) {
  (context?.parent as ComponentInternalInstance).exposed?.tableColumnRegister(
    props
  );
}
</script>
