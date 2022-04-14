<template>
  <span
    class="z-align-center z-checkbox"
    :class="[calcDisabled && 'z-checkbox-disabled']"
  >
    <input
      v-model="modelValue"
      :disabled="calcDisabled"
      class="z-checkbox-input"
      type="checkbox"
    />
    <span
      class="z-checkbox-input-wrapper"
      :class="[
        indeterminate && 'z-checkbox-indeterminate',
        modelValue && 'z-checked',
      ]"
    >
    </span>
    <span :class="[modelValue && 'z-label-checked']">
      <slot>
        <span v-if="label && showLabel">{{ label }}</span>
      </slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, Ref } from "vue";
import { getParentByNameRecursive, deepClone } from "@/util/index";
interface Props {
  modelValue?: boolean;
  disabled?: boolean;
  // 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
  label?: string | number | boolean;
  // 表示 checkbox 的不确定状态，一般用于实现全选的效果
  indeterminate: boolean;
  showLabel?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showLabel: true,
  label: "",
  indeterminate: undefined,
});
const emit = defineEmits(["update:modelValue", "change"]);
const groupModelValue = inject<Ref<any[]>>("modelValue");
const checkboxGroup = getParentByNameRecursive(
  getCurrentInstance()?.parent,
  "ZCheckboxGroup"
);
const modelValue = computed({
  get: () => {
    if (props.modelValue) {
      return props.modelValue;
    } else if (groupModelValue) {
      return groupModelValue.value.includes(props.label);
    } else {
      return false;
    }
  },
  set: (value) => {
    console.log("props.indeterminate", props.indeterminate);
    if (groupModelValue && checkboxGroup && props.indeterminate === undefined) {
      if (groupModelValue.value.includes(props.label)) {
        const groupModelList = deepClone(groupModelValue.value);
        const index = groupModelValue.value.findIndex(
          (item) => item === props.label
        );
        groupModelList.splice(index, 1);
        checkboxGroup.exposed.emit("update:modelValue", groupModelList);
        checkboxGroup.exposed.emit("change", groupModelList);
      } else {
        checkboxGroup.exposed.emit("update:modelValue", [
          ...groupModelValue.value,
          props.label,
        ]);
        checkboxGroup.exposed.emit("change", [
          ...groupModelValue.value,
          props.label,
        ]);
      }
    }
    if (modelValue.value !== undefined) {
      emit("update:modelValue", value);
      emit("change", value);
    }
  },
});
const min = inject<Ref<string | number>>("min");
const max = inject<Ref<string | number>>("max");
const calcDisabled = computed(() => {
  if (groupModelValue && checkboxGroup) {
    if (
      min &&
      groupModelValue.value.length === parseInt(min.value + "") &&
      groupModelValue.value.includes(props.label)
    ) {
      return true;
    } else if (
      max &&
      groupModelValue.value.length === parseInt(max.value + "")
    ) {
      if (groupModelValue.value.includes(props.label)) {
        return false;
      } else {
        return true;
      }
    } else {
      return props.disabled;
    }
  } else {
    return props.disabled;
  }
});
</script>
