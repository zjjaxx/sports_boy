import {mount} from "@vue/test-utils"
import ZIcon from "@/components/z-icon/z-icon.vue"

describe("ZIcon",()=>{
    test("ZIcon name 属性",()=>{
        const wrapper=mount(ZIcon,{
            props:{
                name:"complate"
            }
        })
        expect(wrapper.find(".gulu-complate").exists()).toBe(true)
    })
})