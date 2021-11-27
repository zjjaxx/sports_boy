<script lang="tsx">
import { defineComponent, toRefs, computed, PropType, provide } from "vue"
export default defineComponent({
    props: {
        //间距
        gutter: {
            type: Number,
            default: 0
        },
        //模式
        type: {
            type: String as PropType<"flex" | "">,
            default: ""
        },
        //flex水平方向
        justify: {
            type: String as PropType<"start" | "end" | "center" | "around" | "between">,
            default: "start"
        },
        //flex垂直方向
        align: {
            type: String as PropType<"start" | "end" | "center">,
            default: "start"
        },
        tag: {
            type: String,
            default: "div"
        }
    },
    setup(props) {
        const { type, justify, align, gutter } = toRefs(props)
        //provide
        provide("gutter", gutter.value)
        //样式
        const c_class = computed(() => {
            if (!type.value) {
                return ""
            }
            return [type.value ? `${type.value}` : '', `justify-${justify.value}`, `align-${align.value}`]
        })
        return {
            c_class
        }
    },
    render() {
        const { tag, $slots } = this
        return (
            <tag class={this.c_class}>
                {$slots.default ? $slots.default() : ''}
                <p>aafff</p>
            </tag>
        )
    }
})
</script>

