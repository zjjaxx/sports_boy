<template>
  <button
    :disabled="disable"
    :type="nativeType"
    :class="[
      'z-button',
      props.size && 'z-' + props.size + '-button',
      props.type && 'z-type-' + props.type,
      round && 'z-round',
      circle && 'z-circle',
      (disable || loading) && 'z-disable',
      isButtonGroup && props.type
        ? 'z-button-group-item-type'
        : 'z-button-group-item-default',
    ]"
  >
    <ZIcon
      v-if="loading"
      :class="['z-icon-loading', slots.default && 'z-icon-right']"
      name="loading-out"
    ></ZIcon>
    <slot name="icon">
      <ZIcon
        v-if="icon && !loading"
        :class="[slots.default && 'z-icon-right']"
        :name="icon"
      ></ZIcon>
    </slot>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { getCurrentInstance, useSlots, VNode } from "vue";
import ZIcon from "../z-icon/z-icon.vue";
import { matchParentComponentName } from "@/util/index";
interface Props {
  // 尺寸
  size?: "medium" | "small" | "mini";
  // 类型
  type?: "primary" | "success" | "warning" | "danger" | "info";
  // 是否圆角按钮
  round?: boolean;
  // 是否圆形按钮
  circle?: boolean;
  //是否禁用状态
  disable?: boolean;
  //图标类名
  icon?: string;
  // 是否加载中状态
  loading?: boolean;
  // 原生
  nativeType?: "button" | "submit" | "reset";
}
const props = defineProps<Props>();
const slots = useSlots();
// button group
const parent = getCurrentInstance()?.parent;
const isButtonGroup = matchParentComponentName(
  parent as unknown as VNode,
  "ZButtonGroup"
);
</script>
