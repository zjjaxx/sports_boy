<template>
  <button
    :disabled="disable"
    :class="[
      'z-button',
      props.size && 'z-' + props.size + '-button',
      props.type && 'z-type-' + props.type,
      round && 'z-round',
      disable && 'z-disable',
    ]"
  >
    <slot name="icon">
      <ZIcon v-if="icon" class="z-icon-right" :name="icon"></ZIcon>
    </slot>
    <slot>按钮</slot>
  </button>
</template>
<script setup lang="ts">
import ZIcon from "../z-icon/z-icon.vue";
interface Props {
  // 尺寸
  size: "medium" | "small" | "mini";
  // 类型
  type: "primary" | "success" | "warning" | "danger" | "info";
  // 是否圆角按钮
  round: boolean;
  //是否禁用状态
  disable: boolean;
  //图标类名
  icon: string;
  // 是否加载中状态
  loading: boolean;
  // 是否默认聚焦
  autofocus: boolean;
  // 原生
  nativeType: "button" | "submit" | "reset";
}
const props = withDefaults(defineProps<Props>(), {});
</script>
