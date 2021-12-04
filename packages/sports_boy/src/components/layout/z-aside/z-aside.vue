<template>
    <div class="z-aside" :style="{ width: props.width + 'px' }">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
interface Props {
    width?: number
}
const props = withDefaults(defineProps<Props>(), {
    width: 300
})
</script>