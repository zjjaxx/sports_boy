<template>
    <div class="z-col" :style="c_style">
        <slot></slot>
    </div>
</template>
<script lang="tsx">
import { defineComponent, inject, computed, toRefs,toRaw } from "vue"
export default defineComponent({
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const { span, offset } = toRefs(props)
        //offset样式
        const offsetStyle = computed(() => {
            return {
                marginLeft: `${(offset.value >= 24 ? 24 : offset.value) / 24 * 100}%`
            }
        })
        //span样式
        const spanStyle = computed(() => {
            return {
                width: `${(span.value >= 24 ? 24 : span.value) / 24 * 100}%`
            }
        })
        //gutter样式
        const gutter = inject<number>("gutter") || 0
        const gutterStyle = computed(() => {
            return {
                paddingLeft: `${gutter / 2}px`,
                paddingRight: `${gutter / 2}px`,
            }
        })
        const c_style = computed(() => ({
            ...toRaw(gutterStyle.value) , ...toRaw(spanStyle.value), ...toRaw(offsetStyle.value)
        }))
        return {
            c_style
        }
    }
})
</script>