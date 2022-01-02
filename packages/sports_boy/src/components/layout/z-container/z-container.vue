<template>
  <div class="z-container z-flex" :class="isColumn ? 'z-flex-column' : ''">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useSlots, computed } from "vue-demi";
import { matchChildComponentName } from "@/util/index";
// 好像ts类型文件无法导入，只能写在这。。。
interface Props {
  direction?: "horizontal" | "vertical" | undefined;
}
const props = withDefaults(defineProps<Props>(), {
  direction: undefined,
});
const slots = useSlots();
const isColumn = computed(() => {
  if (props.direction === undefined) {
    return matchChildComponentName(
      slots.default ? slots.default() : undefined,
      ["ZHeader", "ZFooter"]
    );
  } else if (props.direction === "horizontal") {
    return false;
  } else if (props.direction === "vertical") {
    return true;
  }
});
</script>
