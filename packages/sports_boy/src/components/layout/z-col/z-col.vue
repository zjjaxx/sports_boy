<template>
    <div class="z-col" :style="c_style">
        <slot></slot>
    </div>
</template>
<script lang="tsx">
import { debounce } from "@/util/index"
import { defineComponent, inject, computed, toRefs, toRaw, onMounted, ref } from "vue"
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
        // <=768px
        xs: {
            type: [Number],
            default: undefined
        },
        // <=992px
        sm: {
            type: [Number],
            default: undefined
        },
        // <=1200px
        md: {
            type: [Number],
            default: undefined
        },
        //<=1920px
        lg: {
            type: [Number],
            default: undefined
        },
        // >=1920px
        xl: {
            type: [Number],
            default: undefined
        }
    },
    setup(props) {
        console.log("setup-------------")
        const { span, offset, xs, sm, md, lg, xl } = toRefs(props)
        //offset样式
        const offsetStyle = computed(() => {
            return {
                marginLeft: `${(offset.value >= 24 ? 24 : offset.value) / 24 * 100}%`
            }
        })
        //span样式
        const computeSpanStyle = () => {
            const matchMediaList = [
                window.matchMedia('(min-width: 1920px)'),
                window.matchMedia('(max-width: 1920px)'),
                window.matchMedia('(max-width: 1200px)'),
                window.matchMedia('(max-width: 992px)'),
                window.matchMedia('(max-width: 768px)'),
            ]
            let spanValue = span.value
            //响应式判断
            if (matchMediaList[0].matches) {
                if (xl.value !== undefined) {
                    spanValue = xl.value
                }
            }
            if (matchMediaList[1].matches) {
                if (lg.value !== undefined) {
                    spanValue = lg.value
                }
            }
            if (matchMediaList[2].matches) {
                if (md.value !== undefined) {
                    spanValue = md.value
                }
            }
            if (matchMediaList[3].matches) {
                if (sm.value !== undefined) {
                    spanValue = sm.value
                }
            }
            if (matchMediaList[4].matches) {
                if (xs.value !== undefined) {
                    spanValue = xs.value
                }
            }
            return {
                width: `${(spanValue >= 24 ? 24 : spanValue) / 24 * 100}%`
            }
        }
        const spanStyle = ref(computeSpanStyle())
        onMounted(() => {
            //监听窗口尺寸变化
            window.addEventListener("resize", debounce(() => {
                spanStyle.value = computeSpanStyle()
            }, 300))
        })
        //gutter样式
        const gutter = inject<number>("gutter") || 0
        const gutterStyle = computed(() => {
            return {
                paddingLeft: `${gutter / 2}px`,
                paddingRight: `${gutter / 2}px`,
            }
        })
        const c_style = computed(() => {
            return {
                ...toRaw(gutterStyle.value), ...toRaw(spanStyle.value), ...toRaw(offsetStyle.value)
            }
        })
        return {
            c_style
        }
    }
})
</script>