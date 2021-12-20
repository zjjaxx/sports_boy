<script lang="tsx">
import { defineComponent,inject,computed,toRefs} from "vue"
export default defineComponent({
    props:{
        span:{
            type:Number,
            default:24
        },
        offset:{
             type:Number,
             default:0
        }
    },
    setup(props){
        const {span,offset}=toRefs(props)
        //offset样式
        const offsetStyle=computed(()=>{
            return {
                marginLeft:`${(offset.value>=24?24:offset.value)/24*100}%`
            }
        })
        //span样式
        const spanStyle=computed(()=>{
            return {
                width:`${(span.value>=24?24:span.value)/24*100}%`
            }
        })
        //gutter样式
        const gutter=inject<number>("gutter")||0
        const gutterStyle=computed(()=>{
            return {
                paddingLeft:`${gutter/2}px`,
                paddingRight:`${gutter/2}px`,
            }
        })
        return {
            gutterStyle,
            spanStyle,
            offsetStyle
        }
    },
    render() {
        const { $slots,gutterStyle,spanStyle,offsetStyle} = this
        return (
            <div class="z-col" style={{...gutterStyle,...spanStyle,...offsetStyle}}>
                {
                    $slots.default ? $slots.default() : null
                }
            </div>
        )
    }
})
</script>