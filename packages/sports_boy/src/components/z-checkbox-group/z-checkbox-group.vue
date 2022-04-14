<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, computed } from "vue";
interface Props {
  modelValue: any[];
  min?: number | string;
  max?: number | string;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "change"]);
provide(
  "modelValue",
  computed(() => props.modelValue)
);
provide(
  "min",
  computed(() => props.min)
);
provide(
  "max",
  computed(() => props.max)
);
defineExpose({ emit });
</script>
