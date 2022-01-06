<template>
  <i :class="['gulu', 'gulu-' + props.name]"></i>
</template>
<script lang="ts" setup>
interface Props {
  name: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: "complate",
});
</script>
