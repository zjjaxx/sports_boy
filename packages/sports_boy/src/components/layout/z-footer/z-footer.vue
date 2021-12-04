<template>
    <div class="z-footer" :style="{ height: props.height + 'px' }">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
interface Props {
    height?: number
}
const props = withDefaults(defineProps<Props>(), {
    height: 60
})
</script>