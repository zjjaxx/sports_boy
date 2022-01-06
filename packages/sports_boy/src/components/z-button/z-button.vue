<template>
  <button :class="['z-button','z-'+props.size+'-button']">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
interface Props {
  // 尺寸
  size: "medium" | "small" | "mini";
  // 类型
  type: "primary" | "success" | "warning" | "danger" | "info" | "text";
  // 是否朴素按钮
  plain: boolean;
  // 是否圆角按钮
  round: boolean;
  // 是否加载中状态
  loading: boolean;
  //是否禁用状态
  disable: boolean;
  //图标类名
  icon: string;
  // 是否默认聚焦
  autofocus: boolean;
  // 原生
  nativeType: "button" | "submit" | "reset";
}
const props=withDefaults(defineProps<Props>(), {});

</script>
