<template>
    <div class="z-col" :style="c_style">
        <slot></slot>
    </div>
</template>
<script lang="tsx">
import { defineComponent, inject, computed, toRefs, toRaw, onMounted,ref } from "vue"
export default defineComponent({
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        xs: {
            type: [Number],
            default: undefined
        },
        sm: {
            type: [Number],
            default: undefined
        },
        md: {
            type: [Number],
            default: undefined
        },
        lg: {
            type: [Number],
            default: undefined
        },
        xl: {
            type: [Number],
            default: undefined
        }
    },
    setup(props) {
        const { span, offset, xs, sm, md, lg, xl } = toRefs(props)
        //offset样式
        const offsetStyle = computed(() => {
            return {
                marginLeft: `${(offset.value >= 24 ? 24 : offset.value) / 24 * 100}%`
            }
        })
        const matchMediaList = [
            window.matchMedia('(max-width: 768px)'),
            window.matchMedia('(max-width: 992px)'),
            window.matchMedia('(max-width: 1200px)'),
            window.matchMedia('(max-width: 1920px)'),
            window.matchMedia('(min-width: 1920px)'),
        ]
        //span样式
        const computeSpanStyle=() => {
            let spanValue=span.value
            //响应式判断
            if (matchMediaList[0].matches) {
                if (xs.value !== undefined) {
                    spanValue = xs.value
                }
            }
            else if (matchMediaList[1].matches) {
                if (sm.value !== undefined) {
                    spanValue = sm.value
                }
            }
            else if (matchMediaList[2].matches) {
                if (md.value !== undefined) {
                    spanValue = md.value
                }
            }
            else if (matchMediaList[3].matches) {
                if (lg.value !== undefined) {
                    spanValue = lg.value
                }
            }
            else if (matchMediaList[3].matches) {
                if (xl.value !== undefined) {
                    spanValue = xl.value
                }
            }
            return {
                width: `${(spanValue >= 24 ? 24 : spanValue) / 24 * 100}%`
            }
        }
        const spanStyle =ref(computeSpanStyle())
        onMounted(()=>{
            //监听窗口尺寸变化
            window.onresize=()=>{
                spanStyle.value=computeSpanStyle()
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
            ...toRaw(gutterStyle.value), ...toRaw(spanStyle.value), ...toRaw(offsetStyle.value)
        }))
        return {
            c_style
        }
    }
})
</script>